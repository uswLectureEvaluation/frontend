import { useState } from 'react';
import { useMutation } from 'react-query';
import { queryClient } from '../..';
import User from '../../api/User';
import styled from '@emotion/styled';

const WriteExam = ({ setModalIsOpen, row, type }) => {
  const user = User();
  const [semester] = useState(row.selectedSemester); //학기
  const [examType] = useState(row.examType); //중간,기말
  const [examDifficulty, setDifficulty] = useState(row.examDifficulty); //난이도
  const [content, setContent] = useState(row.content); //글쓰기
  const [exam, setExamInfo] = useState(() => row.examInfo.split(', ')); //시험내용
  const examInfo = exam.join(', ');
  const examWriting = useMutation(
    () =>
      user.writeExamInfo(
        row.selectId,
        row.lectureName,
        row.professor,
        semester,
        examInfo,
        examType,
        examDifficulty,
        content
      ),
    {
      onSuccess: () => {
        alert('작성 완료');
        queryClient.invalidateQueries(['lecture', 'examList', row.selectId]);
        queryClient.invalidateQueries(['lecture', 'detail', row.selectId]);
        queryClient.invalidateQueries(['myInfo']);
      },
    }
  );

  const examInfoUpdate = useMutation(
    () => user.UpdateExamInfo(semester, examInfo, examType, examDifficulty, content, row.id),
    {
      onSuccess: () => {
        alert('수정 완료');
        queryClient.invalidateQueries(['myInfo', 'myExamInfo']);
      },
    }
  );

  const difficultyChange = (e) => {
    setDifficulty(e.target.value);
  };
  const handleExam = (checked, value) => {
    if (checked) {
      setExamInfo([...exam, value]);
    } else {
      setExamInfo(exam.filter((data) => data !== value));
    }
  };
  const onChangeContent = (e) => {
    setContent(e.target.value);
  };
  const onTest = () => {
    if (semester === '' || semester === '선택') return alert('학기를 선택해주세요');
    if (examType === '' || examType === '선택') return alert('시험종류를 선택해주세요');
    if (examDifficulty === '') return alert('난이도(란)을 선택해주세요');
    if (exam.length === 0) return alert('시험유형(란)을 선택해주세요');
    if (content.length < 30 || content.length > 1000)
      return alert('최소 30자 이상 최대 1000자 이내로 입력해주세요');
    type === 'update' ? examInfoUpdate.mutate() : examWriting.mutate();
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
          <ContentTitleWrapper>
            <ContentTitle id="title">수강학기</ContentTitle>
            {/* <SemesterSelect
              id="semester"
              defaultValue={row.selectedSemester}
              onChange={(e) => {
                setSemester(e);
              }}
            >
              {optionsValue.map((index) => (
                <StyledOption id="semester" key={index} value={index}>
                  <Soption id="semester">{index}</Soption>
                </StyledOption>
              ))}
            </SemesterSelect> */}
          </ContentTitleWrapper>
          <ContentTitleWrapper>
            <ContentTitle id="title">시험종류</ContentTitle>
            {/* <SemesterSelect
              id="semester"
              defaultValue={row.examType}
              onChange={(e) => {
                setExamType(e);
              }}
            >
              {examTypeOptions.map((index) => (
                <StyledOption id="semester" key={index} value={index}>
                  <Soption id="semester">{index}</Soption>
                </StyledOption>
              ))}
            </SemesterSelect> */}
          </ContentTitleWrapper>
        </Content>
        <MobileContent>
          <MobileContent id="semester">
            <ContentTitle id="mobile">수강학기</ContentTitle>
            {/* <SemesterSelect
              id="semester"
              defaultValue={row.selectedSemester}
              onChange={(e) => {
                setSemester(e);
              }}
            >
              {optionsValue.map((index) => (
                <StyledOption id="semester" key={index} value={index}>
                  <Soption id="semester">{index}</Soption>
                </StyledOption>
              ))}
            </SemesterSelect> */}
          </MobileContent>
          <MobileContent id="semester">
            <ContentTitle id="mobile">시험종류</ContentTitle>
            {/* <SemesterSelect
              id="semester"
              defaultValue={row.examType}
              onChange={(e) => {
                setExamType(e);
              }}
            >
              {examTypeOptions.map((index) => (
                <StyledOption id="semester" key={index} value={index}>
                  <Soption id="semester">{index}</Soption>
                </StyledOption>
              ))}
            </SemesterSelect> */}
          </MobileContent>
        </MobileContent>

        <Content id="content" onChange={difficultyChange}>
          <ContentTitle id="mobile">난이도</ContentTitle>
          <label>
            <FormCheckLeft
              type="radio"
              name="examDifficulty"
              id="easy"
              value="쉬움"
              defaultChecked={examDifficulty === '쉬움'}
            />
            <FormCheckText>쉬움</FormCheckText>
          </label>
          <label>
            <FormCheckLeft
              type="radio"
              name="examDifficulty"
              id="normal"
              value="보통"
              defaultChecked={examDifficulty === '보통'}
            />
            <FormCheckText>보통</FormCheckText>
          </label>
          <label>
            <FormCheckLeft
              type="radio"
              name="examDifficulty"
              id="difficult"
              value="어려움"
              defaultChecked={examDifficulty === '어려움'}
            />
            <FormCheckText>어려움</FormCheckText>
          </label>
        </Content>

        <Content id="content" onChange={(e) => handleExam(e.target.checked, e.target.value)}>
          <ContentTitle id="mobile">
            시험유형<SmallTitle>(복수선택)</SmallTitle>
          </ContentTitle>
          <label>
            <FormCheckMulti
              type="checkbox"
              name="examType"
              id="normal"
              value="족보"
              defaultChecked={exam.includes('족보') === true}
            />
            <FormCheckText>족보</FormCheckText>
          </label>
          <label>
            <FormCheckMulti
              type="checkbox"
              name="examType"
              id="normal"
              value="교재"
              defaultChecked={exam.includes('교재') === true}
            />
            <FormCheckText>교재</FormCheckText>
          </label>
          <label>
            <FormCheckMulti
              type="checkbox"
              name="examType"
              id="normal"
              value="PPT"
              defaultChecked={exam.includes('PPT') === true}
            />
            <FormCheckText>PPT</FormCheckText>
          </label>
          <label>
            <FormCheckMulti
              type="checkbox"
              name="examType"
              id="normal"
              value="필기"
              defaultChecked={exam.includes('필기') === true}
            />
            <FormCheckText>필기</FormCheckText>
          </label>
        </Content>
        <Content id="content" onChange={(e) => handleExam(e.target.checked, e.target.value)}>
          <ContentTitle id="mobile" />
          <label>
            <FormCheckMulti
              type="checkbox"
              name="examType"
              id="normal"
              value="응용"
              defaultChecked={exam.includes('응용') === true}
            />
            <FormCheckText>응용</FormCheckText>
          </label>
          <label>
            <FormCheckMulti
              type="checkbox"
              name="examType"
              id="normal"
              value="실습"
              defaultChecked={exam.includes('실습') === true}
            />
            <FormCheckText>실습</FormCheckText>
          </label>
          <label>
            <FormCheckMulti
              type="checkbox"
              name="examType"
              id="normal"
              value="과제"
              defaultChecked={exam.includes('과제') === true}
            />
            <FormCheckText>과제</FormCheckText>
          </label>
        </Content>
      </ContentWrapper>
      <TextField
        placeholder="시험에 대한 정보, 공부법, 문제유형 등을 자유롭게 작성해주세요 :)"
        defaultValue={row.content}
        onChange={onChangeContent}
        rows="15"
      />
      <Wrapper id="button">
        <EditButton onClick={onTest}>작성하기 (+20P)</EditButton>
      </Wrapper>
    </Wrapper>
  );
};
export default WriteExam;

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
  padding: 2rem 1.5rem 1rem;
  font-weight: 500;
  @media only screen and (max-width: 550px) {
    padding: 1rem;
  }
`;
const TitleButton = styled.button`
  font-size: 18px;
  padding: 2rem 1.5rem 1rem;
  font-weight: 500;
  border: none;
  background-color: white;
  cursor: pointer;
  @media only screen and (max-width: 550px) {
    padding: 1rem;
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
  margin: 1.5rem;
  border-bottom: 1px solid #e0e0e0;
  @media only screen and (max-width: 550px) {
    padding-left: 0rem;
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

const MobileContent = styled.div`
  display: none;
  @media only screen and (max-width: 550px) {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
    &#semester {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
  }
`;

const ContentTitle = styled.div`
  width: 25%;
  &#title {
    @media only screen and (max-width: 1100px) {
      width: 100%;
    }
  }
`;

const ContentTitleWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;

  @media only screen and (max-width: 1100px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const SmallTitle = styled.div`
  font-size: 12px;
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
    min-height: 150px;
    font-size: 16px;
    transform: scale(0.86);
  }
`;

const EditButton = styled.div`
  font-size: 16px;

  font-weight: 600;
  width: 350px;
  padding: 12px 20px;
  text-align: center;
  color: #ffffff;
  background-color: #336af8;
  border-radius: 15px;
  &:hover {
    cursor: pointer;
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
  @media only screen and (max-width: 1100px) {
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
    font-weight: 500;
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

const FormCheckMulti = styled.input`
  &:checked {
    display: inline-block;
    background: none;
    padding: 0px 10px;
    text-align: center;
    height: 35px;
    line-height: 33px;
    font-weight: 500;
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
// 여기까지
