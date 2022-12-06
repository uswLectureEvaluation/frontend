import { useQuery } from 'react-query';
import { useSearchParams } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import Lecture from '../../api/Lecture';
import { lectureState } from '../../app/recoilStore';
import Spinner from '../Spinner';

const LectureDetail = () => {
  const lectures = Lecture();
  const [searchparams] = useSearchParams();
  const selectId = searchparams.get('id');
  const setLectureInfo = useSetRecoilState(lectureState);
  const { data: lecture, isLoading } = useQuery(
    ['lecture', 'detail', selectId],
    () => lectures.detail(selectId),
    {
      onSuccess: (lecture) => {
        setLectureInfo({
          selectId: selectId,
          lectureName: lecture.data.lectureName,
          professor: lecture.data.professor,
          semesterList: lecture.data.semesterList,
        });
      },
    }
  );
  const floatFix = (num, size) => {
    return parseFloat(num).toFixed(size);
  };

  if (isLoading)
    return (
      <Content id="loading">
        <Spinner />
      </Content>
    );
  const current = lecture.data;
  const teamSet = floatFix(current.lectureTeamAvg, 0);
  const homeworkSet = floatFix(current.lectureHomeworkAvg, 0);
  const difficultySet = floatFix(current.lectureDifficultyAvg, 0);

  const team = {
    0: <DataColor id="cyan">없음</DataColor>,
    1: <DataColor id="purple">있음</DataColor>,
  };
  const homework = {
    0: <DataColor id="cyan">없음</DataColor>,
    1: <DataColor id="black">보통</DataColor>,
    2: <DataColor id="purple">많음</DataColor>,
  };
  const difficulty = {
    0: <DataColor id="cyan">너그러움</DataColor>,
    1: <DataColor id="black">보통</DataColor>,
    2: <DataColor id="purple">까다로움</DataColor>,
  };
  return (
    <Content id="top">
      <TitleWrapper id="top">
        <div>
          <SubWrapper>
            <Title>{current.lectureName}</Title>
          </SubWrapper>
          <SubWrapper>
            <Professor>
              {current.majorType} | {current.professor}
            </Professor>
          </SubWrapper>
          <TitleWrapper>
            {current.semesterList.split(', ').map((v) => {
              return (
                <Option key={v} id="semester">
                  {v}
                </Option>
              );
            })}
          </TitleWrapper>
        </div>
        <Option id="type">{current.lectureType}</Option>
      </TitleWrapper>
      <FlexContainer id="col">
        <WidthContainer>
          <FlexContainer id="between">
            <OptionTitle>꿀강지수</OptionTitle>
            <FlexContainer id="score">
              <Color
                id="score"
                style={{
                  color: '#336af8',
                  fontWeight: '500',
                }}
              >
                {Number(current.lectureHoneyAvg).toFixed(1)}
                <span style={{ color: '#a3a3a3' }}>/5</span>
              </Color>
            </FlexContainer>
          </FlexContainer>
          <FlexContainer id="between">
            <OptionTitle>조모임</OptionTitle>
            <FlexContainer id="score">
              <Color style={{ color: '#6200ee', fontSize: '14px' }}>
                {current.lectureHoneyAvg !== 0 ? (
                  team[teamSet]
                ) : (
                  <DataColor id="black">-</DataColor>
                )}
              </Color>
            </FlexContainer>
          </FlexContainer>
        </WidthContainer>
        <WidthContainer>
          <FlexContainer id="between">
            <OptionTitle>배움지수</OptionTitle>
            <FlexContainer id="score">
              <Color
                id="score"
                style={{
                  color: '#336af8',
                  fontWeight: '500',
                }}
              >
                {Number(current.lectureLearningAvg).toFixed(1)}
                <span style={{ color: '#a3a3a3' }}>/5</span>
              </Color>
            </FlexContainer>
          </FlexContainer>
          <FlexContainer id="between">
            <OptionTitle>과제</OptionTitle>
            <FlexContainer id="score">
              <Color style={{ color: '#6200ee', fontSize: '14px' }}>
                {current.lectureHoneyAvg !== 0 ? (
                  homework[homeworkSet]
                ) : (
                  <DataColor id="black">-</DataColor>
                )}
              </Color>
            </FlexContainer>
          </FlexContainer>
        </WidthContainer>
        <WidthContainer>
          <FlexContainer id="between">
            <OptionTitle>만족도</OptionTitle>
            <FlexContainer id="score">
              <Color
                id="score"
                style={{
                  color: '#336af8',
                  fontWeight: '500',
                }}
              >
                {Number(current.lectureSatisfactionAvg).toFixed(1)}
                <span style={{ color: '#a3a3a3' }}>/5</span>
              </Color>
            </FlexContainer>
          </FlexContainer>
          <FlexContainer id="between">
            <OptionTitle>학점</OptionTitle>
            <FlexContainer id="score">
              <Color style={{ color: '#6200ee', fontSize: '14px' }}>
                {current.lectureHoneyAvg !== 0 ? (
                  difficulty[difficultySet]
                ) : (
                  <DataColor id="black">-</DataColor>
                )}
              </Color>
            </FlexContainer>
          </FlexContainer>
        </WidthContainer>
      </FlexContainer>
    </Content>
  );
};

export default LectureDetail;

const Content = styled.div`
  border-radius: 10px;
  margin: 10px 0;
  margin-bottom: 3rem;
  &#top {
    padding: 1rem 2rem;
    border: 1px solid rgb(224, 224, 224);
    @media screen and (max-width: 550px) {
      padding: 1rem 1.5rem;
    }
  }
  &#loading {
    padding: 6rem 2rem;
    border: 1px solid rgb(224, 224, 224);
  }
  @media screen and (max-width: 550px) {
    width: 100%;
  }
`;

const Color = styled.div`
  font-size: 16px;
  &#score {
    width: 60%;
    text-align: right;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
  align-items: flex-end;

  &#top {
    justify-content: space-between;
    align-items: flex-start;
  }
  &#bottom {
    margin-top: 1rem;
  }
`;
const SubWrapper = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
  align-items: flex-start;
  justify-content: flex-start;
`;

const Title = styled.div`
  display: flex;
  font-size: 18px;
  text-align: center;
  &#sub {
    font-size: 1.5rem;
  }
`;

const Professor = styled.div`
  display: flex;
  color: #222;
  font-family: 'Pretendard-Regular';
  font-size: 14px;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
`;

const Option = styled.div`
  border-radius: 12px;
  background-color: #eeeeee;
  text-align: center;
  margin-top: 10px;
  display: flex;
  align-items: center;
  padding: 4.5px 12px;
  font-size: 14px;
  font-family: 'Pretendard-Regular';
  &#type {
    height: 25px;
    margin-top: 0px;
    font-family: 'Pretendard-Medium';
  }
  &#semester {
    margin-right: 8px;
  }
`;

const OptionTitle = styled.div`
  display: flex;
  color: #222222;
  align-items: flex-end;
  margin-left: 5px;
  width: 80px;
  font-size: 14px;
  font-family: 'Pretendard-Regular';
  @media screen and (max-width: 550px) {
    width: 100%;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  color: #a3a3a3;
  width: 45%;
  &#col {
    flex-direction: column;
  }

  @media screen and (max-width: 550px) {
    width: 100%;
  }
`;

const WidthContainer = styled.div`
  align-items: flex-end;
  display: flex;
  margin: 10px;
  margin-left: 0px;
`;

const DataColor = styled.div`
  &#black {
    color: black;
  }
  &#cyan {
    color: #336af8;
  }
  &#purple {
    color: #6200ee;
  }
`;
