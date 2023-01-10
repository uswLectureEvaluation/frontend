import styled from '@emotion/styled';
import User from '../api/User';
import { useQuery } from 'react-query';
import Spinner from '../components/Etc/Spinner';
const HistoryTest = () => {
  const user = User();
  const { data: db, isLoading } = useQuery(['myInfo', 'purchasedTestInfo'], user.purchasedTestInfo);
  /*
       "id" : Long, //구매한 시험정보의 인조키
            "lectureName" : String, //과목 이름
            "professor" : String, //교수이름
            "majorType" : String, //개설학과
            "createDate" : LocalDateTime, //작성 날짜
      */
  if (isLoading) return <Spinner id="myInfo" />;
  return (
    <AppContainer>
      <AppTitle>구매이력</AppTitle>

      {db.data.map((i) => {
        return (
          <NoticeItem
            id={i.id}
            title={i.lectureName}
            professor={i.professor}
            major={i.majorType}
            createDate={i.createDate.slice(0, 10)}
            key={i.id}
          />
        );
      })}
    </AppContainer>
  );
};

export const NoticeItem = (props) => {
  return (
    <NoticeWrap>
      <Option>{props.createDate}</Option>
      <TitleWrapper>
        <Title>{props.title}</Title>
        <Professor>
          {props.major} | {props.professor}
        </Professor>
      </TitleWrapper>
      <MobileTitleWrapper>
        <Professor>
          {props.major} | {props.professor}
        </Professor>
        <Title>{props.title}</Title>
      </MobileTitleWrapper>
    </NoticeWrap>
  );
};

export default HistoryTest;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  margin: 0 auto;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    margin: 0 auto;
  }
`;

const AppTitle = styled.div`
  display: flex;
  width: 100%;
  font-size: 1.5rem;

  font-weight: 600;
  padding-top: 5rem;
  padding-bottom: 1rem;
`;

const Title = styled.div`
  display: flex;
  font-size: 1rem;
  margin-right: 0.7rem;
`;

const Option = styled.div`
  border-radius: 10px;
  padding: 0.5rem 0;
  margin-right: 1rem;
  font-size: 14px;
  color: #a3a3a3;

  font-weight: 400;
`;

const NoticeWrap = styled.div`
  width: 100%;
  border: 1.5px solid #f1f1f1;
  padding: 1.5rem 1.5rem;
  border-radius: 10px;
  margin-top: 2vh;
  display: flex;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Professor = styled.div`
  display: flex;
  color: #222;

  font-weight: 400;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  margin-left: 10px;
  @media screen and (max-width: 550px) {
    margin-left: 0px;
    margin-bottom: 10px;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  @media screen and (max-width: 550px) {
    display: none;
  }
`;

const MobileTitleWrapper = styled.div`
  display: none;
  @media screen and (max-width: 550px) {
    display: flex;
    flex-direction: column;
  }
`;
