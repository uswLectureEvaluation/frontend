import { useState } from 'react';
import { SemesterSelect, StyledOption, Soption } from '../../pages/Main/styled';
import { useMutation } from 'react-query';
import { queryClient } from '../..';
import User from '../../api/User';
import {
  Content,
  ContentTitle,
  ContentTitleWrapper,
  ContentWrapper,
  EditButton,
  FormCheckLeft,
  FormCheckMulti,
  FormCheckText,
  MobileContent,
  SmallTitle,
  TextField,
  Title,
  TitleButton,
  TitleWrapper,
  Wrapper,
} from '../WriteExam/styled';

const EditTestInfo = ({ setModalIsOpen, row }) => {
  const user = User();
  const [semester, setSemester] = useState(`${row.selectedSemester}`); //학기
  const [examType, setExamType] = useState(`${row.examType}`); //중간,기말
  const [examDifficulty, setDifficulty] = useState(`${row.examDifficulty}`); //난이도
  const [content, setContent] = useState(`${row.content}`); //글쓰기
  const [exam, setExamInfo] = useState(() => row.examInfo.split(', ')); //시험내용
  const examInfo = exam.join(', ');

  const difficultyChange = (e) => {
    setDifficulty(e.target.value);
  };
  const handleExam = (checked, value) => {
    if (checked) {
      setExamInfo([...exam, value]);
    } else {
      // 체크 해제
      setExamInfo(exam.filter((data) => data !== value));
    }
  };
  const onChangeContent = (e) => {
    setContent(e.target.value);
  };
  const examInfoUpdate = useMutation(
    () => user.UpdateExamInfo(semester, examInfo, examType, examDifficulty, content, row.id),
    {
      onSuccess: () => {
        alert('수정 완료');
        queryClient.invalidateQueries(['myInfo', 'myExamInfo']);
      },
    }
  );

  const onTest = () => {
    if (semester === '' || semester === '선택') return alert('학기를 선택해주세요');
    if (examType === '' || examType === '선택') return alert('시험종류를 선택해주세요');
    if (examDifficulty === '') return alert('난이도(란)을 선택해주세요');
    if (exam.length === 0) return alert('시험유형(란)을 선택해주세요');
    if (content.length < 30 || content.length > 1000)
      return alert('최소 30자 이상 최대 1000자 이내로 입력해주세요');

    examInfoUpdate.mutate();
    setModalIsOpen(false);
  };

  const options = ['선택'];
  const optionsValue = options.concat(row.semesterList.split(', '));

  const examTypeOptions = ['선택', '중간고사', '기말고사', '쪽지', '기타'];

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
            <SemesterSelect
              id="semester"
              defaultValue={`${row.selectedSemester}`}
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
          </ContentTitleWrapper>
          <ContentTitleWrapper>
            <ContentTitle id="title">시험종류</ContentTitle>
            <SemesterSelect
              id="semester"
              defaultValue={`${row.examType}`}
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
          </ContentTitleWrapper>
        </Content>
        <MobileContent>
          <MobileContent id="semester">
            <ContentTitle id="mobile">수강학기</ContentTitle>
            <SemesterSelect
              id="semester"
              defaultValue={`${row.selectedSemester}`}
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
          </MobileContent>
          <MobileContent id="semester">
            <ContentTitle id="mobile">시험종류</ContentTitle>
            <SemesterSelect
              id="semester"
              defaultValue={`${row.examType}`}
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
          </MobileContent>
        </MobileContent>

        <Content id="content" onChange={difficultyChange}>
          <ContentTitle id="mobile">난이도</ContentTitle>
          <label>
            <FormCheckLeft
              name="examDifficulty"
              id="easy"
              value="쉬움"
              defaultChecked={examDifficulty === '쉬움'}
            />
            <FormCheckText>쉬움</FormCheckText>
          </label>
          <label>
            <FormCheckLeft
              name="examDifficulty"
              id="normal"
              value="보통"
              defaultChecked={examDifficulty === '보통'}
            />
            <FormCheckText>보통</FormCheckText>
          </label>
          <label>
            <FormCheckLeft
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
              name="examType"
              id="normal"
              value="족보"
              defaultChecked={exam.includes('족보') === true}
            />
            <FormCheckText>족보</FormCheckText>
          </label>
          <label>
            <FormCheckMulti
              name="examType"
              id="normal"
              value="교재"
              defaultChecked={exam.includes('교재') === true}
            />
            <FormCheckText>교재</FormCheckText>
          </label>
          <label>
            <FormCheckMulti
              name="examType"
              id="normal"
              value="PPT"
              defaultChecked={exam.includes('PPT') === true}
            />
            <FormCheckText>PPT</FormCheckText>
          </label>
          <label>
            <FormCheckMulti
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
              name="examType"
              id="normal"
              value="응용"
              defaultChecked={exam.includes('응용') === true}
            />
            <FormCheckText>응용</FormCheckText>
          </label>
          <label>
            <FormCheckMulti
              name="examType"
              id="normal"
              value="실습"
              defaultChecked={exam.includes('실습') === true}
            />
            <FormCheckText>실습</FormCheckText>
          </label>
          <label>
            <FormCheckMulti
              name="examType"
              id="normal"
              value="과제"
              defaultChecked={exam.includes('과제') === true}
            />
            <FormCheckText>과제</FormCheckText>
          </label>
        </Content>
      </ContentWrapper>
      <TextField defaultValue={row.content} onChange={onChangeContent} rows="15" />
      <Wrapper id="button">
        <EditButton onClick={onTest}>수정하기</EditButton>
      </Wrapper>
    </Wrapper>
  );
};
export default EditTestInfo;
