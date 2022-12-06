import * as Styled from './styled';
import User from '../../api/User';
import { useQuery } from 'react-query';
import Spinner from '../../components/Spinner';
const HistoryTest = () => {
  const user = User();
  const { data: db, isLoading } = useQuery(['purchasedTestInfo'], user.purchasedTestInfo);
  /*
       "id" : Long, //구매한 시험정보의 인조키
            "lectureName" : String, //과목 이름
            "professor" : String, //교수이름
            "majorType" : String, //개설학과
            "createDate" : LocalDateTime, //작성 날짜
      */
  if (isLoading) return <Spinner id="myInfo" />;
  return (
    <Styled.AppContainer>
      <Styled.AppTitle>구매이력</Styled.AppTitle>

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
    </Styled.AppContainer>
  );
};

export const NoticeItem = (props) => {
  return (
    <Styled.NoticeWrap>
      <Styled.Option>{props.createDate}</Styled.Option>
      <Styled.TitleWrapper>
        <Styled.Title>{props.title}</Styled.Title>
        <Styled.Professor>
          {props.major} | {props.professor}
        </Styled.Professor>
      </Styled.TitleWrapper>
      <Styled.MobileTitleWrapper>
        <Styled.Professor>
          {props.major} | {props.professor}
        </Styled.Professor>
        <Styled.Title>{props.title}</Styled.Title>
      </Styled.MobileTitleWrapper>
    </Styled.NoticeWrap>
  );
};

export default HistoryTest;
