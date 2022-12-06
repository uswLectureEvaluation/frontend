import { useState } from 'react';
import { useMutation } from 'react-query';
import { useRecoilValue } from 'recoil';
import { queryClient } from '../..';
import User from '../../api/User';
import { lectureState } from '../../app/recoilStore';
import { SemesterSelect, Soption, StyledOption } from '../../pages/Main/styled';
import * as Styled from './styled';

const WriteExam = ({ setModalIsOpen }) => {
  const user = User();
  const current = useRecoilValue(lectureState);
  const [semester, setSemester] = useState(''); //학기
  const [examType, setExamType] = useState(''); //중간,기말
  const [examDifficulty, setDifficulty] = useState(``); //난이도
  const [content, setContent] = useState(); //글쓰기
  const [exam, setExamInfo] = useState([]); //시험내용
  const examInfo = exam.join(', ');
  const examWriting = useMutation(
    () =>
      user.writeExamInfo(
        current.selectId,
        current.lectureName,
        current.professor,
        semester,
        examInfo,
        examType,
        examDifficulty,
        content
      ),
    {
      onSuccess: () => {
        alert('작성 완료');
        queryClient.invalidateQueries(['lecture', 'examList', current.selectId]);
        queryClient.invalidateQueries(['lecture', 'detail', current.selectId]);
        queryClient.invalidateQueries(['myInfo']);
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
    examWriting.mutate();
    setModalIsOpen(false);
  };

  const options = ['선택'];
  const optionsValue = options.concat(current.semesterList.split(', '));
  const examTypeOptions = ['선택', '중간고사', '기말고사', '쪽지', '기타'];

  return (
    <Styled.Wrapper>
      <Styled.TitleWrapper>
        <Styled.Title>{current.lectureName}</Styled.Title>
        <Styled.TitleButton
          onClick={() => {
            setModalIsOpen(false);
          }}
        >
          X
        </Styled.TitleButton>
      </Styled.TitleWrapper>

      <Styled.ContentWrapper>
        <Styled.Content id="group">
          <Styled.ContentTitleWrapper>
            <Styled.ContentTitle id="title">수강학기</Styled.ContentTitle>
            <SemesterSelect
              id="semester"
              defaultValue={'선택'}
              onChange={(e) => {
                setSemester(e);
              }}
            >
              {optionsValue.map((index) => (
                <StyledOption id="semester" key={index} value={index}>
                  <Soption id="semester">{index}</Soption>
                </StyledOption>
              ))}
            </SemesterSelect>
          </Styled.ContentTitleWrapper>
          <Styled.ContentTitleWrapper>
            <Styled.ContentTitle id="title">시험종류</Styled.ContentTitle>
            <SemesterSelect
              id="semester"
              defaultValue={'선택'}
              onChange={(e) => {
                setExamType(e);
              }}
            >
              {examTypeOptions.map((index) => (
                <StyledOption id="semester" key={index} value={index}>
                  <Soption id="semester">{index}</Soption>
                </StyledOption>
              ))}
            </SemesterSelect>
          </Styled.ContentTitleWrapper>
        </Styled.Content>
        <Styled.MobileContent>
          <Styled.MobileContent id="semester">
            <Styled.ContentTitle id="mobile">수강학기</Styled.ContentTitle>
            <SemesterSelect
              id="semester"
              defaultValue={'선택'}
              onChange={(e) => {
                setSemester(e);
              }}
            >
              {optionsValue.map((index) => (
                <StyledOption id="semester" key={index} value={index}>
                  <Soption id="semester">{index}</Soption>
                </StyledOption>
              ))}
            </SemesterSelect>
          </Styled.MobileContent>
          <Styled.MobileContent id="semester">
            <Styled.ContentTitle id="mobile">시험종류</Styled.ContentTitle>
            <SemesterSelect
              id="semester"
              defaultValue={'선택'}
              onChange={(e) => {
                setExamType(e);
              }}
            >
              {examTypeOptions.map((index) => (
                <StyledOption id="semester" key={index} value={index}>
                  <Soption id="semester">{index}</Soption>
                </StyledOption>
              ))}
            </SemesterSelect>
          </Styled.MobileContent>
        </Styled.MobileContent>

        <Styled.Content id="content" onChange={difficultyChange}>
          <Styled.ContentTitle id="mobile">난이도</Styled.ContentTitle>
          <label>
            <Styled.FormCheckLeft name="examDifficulty" id="easy" value="쉬움" />
            <Styled.FormCheckText>쉬움</Styled.FormCheckText>
          </label>
          <label>
            <Styled.FormCheckLeft name="examDifficulty" id="normal" value="보통" />
            <Styled.FormCheckText>보통</Styled.FormCheckText>
          </label>
          <label>
            <Styled.FormCheckLeft name="examDifficulty" id="difficult" value="어려움" />
            <Styled.FormCheckText>어려움</Styled.FormCheckText>
          </label>
        </Styled.Content>

        <Styled.Content id="content" onChange={(e) => handleExam(e.target.checked, e.target.value)}>
          <Styled.ContentTitle id="mobile">
            시험유형<Styled.SmallTitle>(복수선택)</Styled.SmallTitle>
          </Styled.ContentTitle>
          <label>
            <Styled.FormCheckMulti name="examType" id="normal" value="족보" />
            <Styled.FormCheckText>족보</Styled.FormCheckText>
          </label>
          <label>
            <Styled.FormCheckMulti name="examType" id="normal" value="교재" />
            <Styled.FormCheckText>교재</Styled.FormCheckText>
          </label>
          <label>
            <Styled.FormCheckMulti name="examType" id="normal" value="PPT" />
            <Styled.FormCheckText>PPT</Styled.FormCheckText>
          </label>
          <label>
            <Styled.FormCheckMulti name="examType" id="normal" value="필기" />
            <Styled.FormCheckText>필기</Styled.FormCheckText>
          </label>
        </Styled.Content>
        <Styled.Content id="content" onChange={(e) => handleExam(e.target.checked, e.target.value)}>
          <Styled.ContentTitle id="mobile" />
          <label>
            <Styled.FormCheckMulti name="examType" id="normal" value="응용" />
            <Styled.FormCheckText>응용</Styled.FormCheckText>
          </label>
          <label>
            <Styled.FormCheckMulti name="examType" id="normal" value="실습" />
            <Styled.FormCheckText>실습</Styled.FormCheckText>
          </label>
          <label>
            <Styled.FormCheckMulti name="examType" id="normal" value="과제" />
            <Styled.FormCheckText>과제</Styled.FormCheckText>
          </label>
        </Styled.Content>
      </Styled.ContentWrapper>
      <Styled.TextField
        placeholder="시험에 대한 정보, 공부법, 문제유형 등을 자유롭게 작성해주세요 :)"
        onChange={onChangeContent}
        rows="15"
      />
      <Styled.Wrapper id="button">
        <Styled.EditButton onClick={onTest}>작성하기 (+20P)</Styled.EditButton>
      </Styled.Wrapper>
    </Styled.Wrapper>
  );
};
export default WriteExam;
