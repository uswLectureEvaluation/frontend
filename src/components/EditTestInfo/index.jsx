import { useState } from 'react';
import * as Styled from './styled';
import { SemesterSelect, StyledOption, Soption } from '../../pages/Main/styled';
import { useMutation } from 'react-query';
import { queryClient } from '../..';
import User from '../../api/User';

const Edittestinfo = ({ setModalIsOpen, row }) => {
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
    <Styled.Wrapper>
      <Styled.TitleWrapper>
        <Styled.Title>{row.lectureName}</Styled.Title>
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
          </Styled.ContentTitleWrapper>
          <Styled.ContentTitleWrapper>
            <Styled.ContentTitle id="title">시험종류</Styled.ContentTitle>
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
          </Styled.ContentTitleWrapper>
        </Styled.Content>
        <Styled.MobileContent>
          <Styled.MobileContent id="semester">
            <Styled.ContentTitle id="mobile">수강학기</Styled.ContentTitle>
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
          </Styled.MobileContent>
          <Styled.MobileContent id="semester">
            <Styled.ContentTitle id="mobile">시험종류</Styled.ContentTitle>
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
          </Styled.MobileContent>
        </Styled.MobileContent>

        <Styled.Content id="content" onChange={difficultyChange}>
          <Styled.ContentTitle id="mobile">난이도</Styled.ContentTitle>
          <label>
            <Styled.FormCheckLeft
              name="examDifficulty"
              id="easy"
              value="쉬움"
              defaultChecked={examDifficulty === '쉬움'}
            />
            <Styled.FormCheckText>쉬움</Styled.FormCheckText>
          </label>
          <label>
            <Styled.FormCheckLeft
              name="examDifficulty"
              id="normal"
              value="보통"
              defaultChecked={examDifficulty === '보통'}
            />
            <Styled.FormCheckText>보통</Styled.FormCheckText>
          </label>
          <label>
            <Styled.FormCheckLeft
              name="examDifficulty"
              id="difficult"
              value="어려움"
              defaultChecked={examDifficulty === '어려움'}
            />
            <Styled.FormCheckText>어려움</Styled.FormCheckText>
          </label>
        </Styled.Content>

        <Styled.Content id="content" onChange={(e) => handleExam(e.target.checked, e.target.value)}>
          <Styled.ContentTitle id="mobile">
            시험유형<Styled.SmallTitle>(복수선택)</Styled.SmallTitle>
          </Styled.ContentTitle>
          <label>
            <Styled.FormCheckMulti
              name="examType"
              id="normal"
              value="족보"
              defaultChecked={exam.includes('족보') === true}
            />
            <Styled.FormCheckText>족보</Styled.FormCheckText>
          </label>
          <label>
            <Styled.FormCheckMulti
              name="examType"
              id="normal"
              value="교재"
              defaultChecked={exam.includes('교재') === true}
            />
            <Styled.FormCheckText>교재</Styled.FormCheckText>
          </label>
          <label>
            <Styled.FormCheckMulti
              name="examType"
              id="normal"
              value="PPT"
              defaultChecked={exam.includes('PPT') === true}
            />
            <Styled.FormCheckText>PPT</Styled.FormCheckText>
          </label>
          <label>
            <Styled.FormCheckMulti
              name="examType"
              id="normal"
              value="필기"
              defaultChecked={exam.includes('필기') === true}
            />
            <Styled.FormCheckText>필기</Styled.FormCheckText>
          </label>
        </Styled.Content>
        <Styled.Content id="content" onChange={(e) => handleExam(e.target.checked, e.target.value)}>
          <Styled.ContentTitle id="mobile" />
          <label>
            <Styled.FormCheckMulti
              name="examType"
              id="normal"
              value="응용"
              defaultChecked={exam.includes('응용') === true}
            />
            <Styled.FormCheckText>응용</Styled.FormCheckText>
          </label>
          <label>
            <Styled.FormCheckMulti
              name="examType"
              id="normal"
              value="실습"
              defaultChecked={exam.includes('실습') === true}
            />
            <Styled.FormCheckText>실습</Styled.FormCheckText>
          </label>
          <label>
            <Styled.FormCheckMulti
              name="examType"
              id="normal"
              value="과제"
              defaultChecked={exam.includes('과제') === true}
            />
            <Styled.FormCheckText>과제</Styled.FormCheckText>
          </label>
        </Styled.Content>
      </Styled.ContentWrapper>
      <Styled.TextField defaultValue={row.content} onChange={onChangeContent} rows="15" />
      <Styled.Wrapper id="button">
        <Styled.EditButton onClick={onTest}>수정하기</Styled.EditButton>
      </Styled.Wrapper>
    </Styled.Wrapper>
  );
};
export default Edittestinfo;
