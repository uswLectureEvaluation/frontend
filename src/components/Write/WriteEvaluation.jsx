import styled from '@emotion/styled/macro';
import { Fragment, useState } from 'react';
import { User } from 'api';
import useSlider from 'components/Etc/RangeInput';
import SemesterSelect from 'components/SemesterSelect';
import {
  EvaluationSelectOptions,
  EvalutionSliderOptions,
  semesters,
} from 'constants/placeholderData';

const WriteEvaluation = ({ setModalIsOpen, row, type }) => {
  const user = User();
  const [content, setContent] = useState(row.content);
  const [selectedSemester, setSelectedSemester] = useState(row.selectedSemester); //학기
  const SliderOptions = {
    honey: useSlider(row.honey),
    learning: useSlider(row.learning),
    satisfaction: useSlider(row.satisfaction),
  }; //강의옵션
  const [lectureOptions, setLectureOptions] = useState({
    team: row.team,
    homework: row.homework,
    difficulty: row.difficulty,
  }); //강의옵션

  const data = {
    lectureName: row.lectureName,
    professor: row.professor,
    selectedSemester,
    satisfaction: SliderOptions.satisfaction[0],
    learning: SliderOptions.learning[0],
    honey: SliderOptions.honey[0],
    team: lectureOptions.team,
    difficulty: lectureOptions.difficulty,
    homework: lectureOptions.homework,
    content,
  };

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };
  const onChangeLectureOptions = (e) => {
    setLectureOptions({ ...lectureOptions, [e.target.name]: e.target.value });
  };

  const onEvaluate = () => {
    if (selectedSemester === '' || selectedSemester === '선택') return alert('학기를 선택해주세요');
    if (SliderOptions.honey[0] < 0.5 || SliderOptions.honey[0] === undefined)
      return alert('꿀강지수는 0.5점부터 선택 가능합니다');
    if (SliderOptions.learning[0] < 0.5 || SliderOptions.learning[0] === undefined)
      return alert('배움지수는 0.5점부터 선택 가능합니다');
    if (SliderOptions.satisfaction[0] < 0.5 || SliderOptions.satisfaction[0] === undefined)
      return alert('만족도는 0.5점부터 선택 가능합니다');
    if (lectureOptions.team === '') return alert('조모임(란)을 선택해주세요');
    if (lectureOptions.homework === '') return alert('과제(란)을 선택해주세요');
    if (lectureOptions.difficulty === '') return alert('학점(란)을 선택해주세요');
    if (content.length < 30 || content.length > 1000)
      return alert('최소 30자 이상 최대 1000자 이내로 입력해주세요');
    type === 'update' ? user.updateEvaluation(row.id, data) : user.writeEvaluation(row.id, data);
    setModalIsOpen(false);
  };

  return (
    <Wrapper>
      <TitleWrapper>
        <Title>{row.lectureName}</Title>
        <TitleButton
          onClick={() => {
            setModalIsOpen(false);
          }}
        >
          X
        </TitleButton>
      </TitleWrapper>

      <ContentWrapper>
        <Content id="group">
          <ContentTitle>수강학기</ContentTitle>
          <SemesterSelect
            list={semesters(row.semesterList)}
            selected={selectedSemester}
            setSelect={setSelectedSemester}
          />
        </Content>
        <MobileContent id="semester">
          <ContentTitle id="mobile">수강학기</ContentTitle>
          <SemesterSelect
            list={semesters(row.semesterList)}
            selected={selectedSemester}
            setSelect={setSelectedSemester}
          />
        </MobileContent>
        {EvalutionSliderOptions.map(({ id, name }) => {
          const [value, Slider] = SliderOptions[id];
          return (
            <Fragment key={id}>
              <Content>
                <ContentTitle>{name}</ContentTitle>
                <Slider /> <Score>{value}</Score>
              </Content>
              <MobileContent>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <ContentTitle id="mobile">{name}</ContentTitle>
                  <Score id="mobile">{value}</Score>
                </div>
                <Slider />
              </MobileContent>
            </Fragment>
          );
        })}
        {EvaluationSelectOptions.map(({ id, title, options }) => (
          <Content key={id} id="content" onChange={onChangeLectureOptions}>
            <ContentTitle>{title}</ContentTitle>
            {options.map(({ id: level, name, value }) => (
              <label key={level}>
                <FormCheckLeft
                  type="radio"
                  name={id}
                  id={level}
                  value={value}
                  defaultChecked={lectureOptions[id] === value}
                />
                <FormCheckText>{name}</FormCheckText>
              </label>
            ))}
          </Content>
        ))}
      </ContentWrapper>
      <TextField
        placeholder="강의평가를 작성해주세요 :)"
        defaultValue={content}
        onChange={onChangeContent}
        rows="15"
      />
      <Wrapper id="button">
        <EditButton onClick={onEvaluate}>
          {type === 'write' ? '작성하기 (+10P)' : '수정하기'}
        </EditButton>
      </Wrapper>
    </Wrapper>
  );
};

export default WriteEvaluation;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  &#button {
    align-items: center;
  }
`;

const Title = styled.div`
  font-size: 18px;
  padding: 2rem;
  padding-bottom: 1rem;
  @media only screen and (max-width: 550px) {
    padding: 1rem;
  }
`;

const TitleButton = styled.button`
  font-size: 18px;
  padding: 2rem;
  padding-bottom: 1rem;
  border: none;
  border-radius: 15px;
  background-color: white;
  cursor: pointer;
  @media only screen and (max-width: 550px) {
    padding: 1rem;
  }
`;

const Score = styled.span`
  margin: 2px 0 1px 24px;
  font-size: 18px;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.11;
  letter-spacing: 0.32px;
  color: #336af8;
  &#mobile {
    margin-right: 30px;
  }
`;
const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e0e0e0;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 2rem;
  margin: 1.5rem 0;
  border-bottom: 1px solid #e0e0e0;
  @media only screen and (max-width: 550px) {
    padding-left: 1rem;
    margin-bottom: 0.7rem;
  }
`;

const Content = styled.form`
  display: flex;
  margin: 0.5rem 0;
  align-items: center;
  &#group {
    margin-bottom: 1.5rem;
  }
  @media only screen and (max-width: 550px) {
    display: none;
    &#content {
      display: flex;
      margin: 0.5rem 0;
      align-items: center;
    }
  }
`;

const MobileContent = styled.form`
  display: none;
  @media only screen and (max-width: 550px) {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    &#semester {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
  }
`;

const ContentTitle = styled.div`
  width: 20%;
  &#mobile {
    width: 30%;
  }
`;

const TextField = styled.textarea`
  margin-bottom: 20px;
  width: 100%;
  resize: none;
  padding: 22px;
  outline-color: #336af8;
  border: solid 1px #e0e0e0;
  border-radius: 15px;
  background-color: #f9f9f9;
  @media only screen and (max-width: 550px) {
    min-height: 50px;
    font-size: 16px;
    transform: scale(0.9);
  }
`;

const EditButton = styled.button`
  font-size: 16px;

  font-weight: 600;
  width: 350px;
  padding: 12px 20px;
  text-align: center;
  color: #ffffff;
  background-color: #336af8;
  border-radius: 15px;
  border: none;
  &:hover {
    cursor: pointer;
  }
  &:disabled {
    cursor: auto;
    color: none;
    background-color: #efefef;
  }
  @media only screen and (max-width: 550px) {
    width: 80%;
    margin-bottom: 20px;
  }
`;

const FormCheckText = styled.span`
  font-size: 1vw;
  padding: 8px 15px;
  background: #eee;
  border-radius: 10px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #777;
  margin-right: 8px;
  @media only screen and (max-width: 550px) {
    font-size: 12px;
    padding: 6px 9px;
  }
`;

const FormCheckLeft = styled.input`
  &:checked {
    display: inline-block;
    background: none;
    padding: 0px 10px;
    text-align: center;
    height: 35px;
    line-height: 33px;

    display: none;
  }
  &#difficult {
    &:checked + ${FormCheckText} {
      color: #7800ff;
      font-weight: 600;
    }
  }
  &#normal {
    &:checked + ${FormCheckText} {
      color: #222222;
      font-weight: 600;
    }
  }
  &#easy {
    &:checked + ${FormCheckText} {
      color: #336af8;
      font-weight: 600;
    }
  }
  display: none;
`;
