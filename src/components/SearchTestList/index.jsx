import * as Styled from './styled';
import { examReportApi } from '../../api/Api';

const SearchTestList = ({ page }) => {
  return page.map((lecture) => <Subject key={Math.random()} lecture={lecture} />);
};

export const Subject = ({ lecture }) => {
  const examDifficultySet = lecture.examDifficulty;
  const onReport = () => {
    if (window.confirm('정말 신고하시겠어요? \n*허위 신고 시 제재가 가해질 수 있습니다!'))
      examReportApi(lecture.id).then(() => alert('신고 완료'));
  };
  const examDifficulty = {
    '매우 쉬움': <Styled.DataColor id="cyan">매우 쉬움</Styled.DataColor>,
    쉬움: <Styled.DataColor id="cyan">쉬움</Styled.DataColor>,
    보통: <Styled.DataColor>보통</Styled.DataColor>,
    어려움: <Styled.DataColor id="purple">어려움</Styled.DataColor>,
    '매우 어려움': <Styled.DataColor id="purple">매우 어려움</Styled.DataColor>,
  };

  return (
    <div style={{ marginTop: '15px' }}>
      <Styled.LectureWrapper>
        <Styled.MarginTop id="top">
          <Styled.TitleWrapper>
            <Styled.YearText>{lecture.selectedSemester}</Styled.YearText>
            <Styled.YearText>{lecture.examType}</Styled.YearText>
          </Styled.TitleWrapper>
          <Styled.EditButton onClick={onReport}>신고</Styled.EditButton>
          <div style={{ marginBottom: '35px' }} />
        </Styled.MarginTop>

        <div>
          <Styled.StarFlex id="top">
            <Styled.FlexContainer id="col">
              <Styled.StarFlex id="between">
                난이도
                <Styled.StarFlex id="data">{examDifficulty[examDifficultySet]}</Styled.StarFlex>
              </Styled.StarFlex>
            </Styled.FlexContainer>
            <Styled.FlexContainer id="col">
              <Styled.StarFlex id="between">
                시험유형
                <Styled.StarFlex id="black">{lecture.examInfo}</Styled.StarFlex>
              </Styled.StarFlex>
            </Styled.FlexContainer>
          </Styled.StarFlex>
        </div>

        <Styled.MarginTop id="bottom">
          <Styled.EvaluationDetail>
            {lecture.content.split('\n').map((value, index) => {
              return (
                <div key={index}>
                  {value}
                  <br />
                </div>
              );
            })}
          </Styled.EvaluationDetail>
        </Styled.MarginTop>
      </Styled.LectureWrapper>
    </div>
  );
};

export default SearchTestList;
