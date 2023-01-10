import styled from '@emotion/styled';
import { FlexWrap } from '../components/Lecture/LectureContainer';
import User from '../api/User';
import { useQuery } from 'react-query';
import Spinner from '../components/Etc/Spinner';
const BanReason = () => {
  const user = User();
  const { data: db, isLoading: banLoad } = useQuery(['myInfo', 'banList'], user.banList);
  const { data: wow, isLoading: resLoad } = useQuery(['myInfo', 'resList'], user.resList);

  if (banLoad) return <Spinner id="myInfo" />;
  if (resLoad) return null;

  return (
    <AppContainer>
      <AppTitle>블랙리스트 내역조회</AppTitle>

      {db.length !== 0 ? (
        db.map((i) => {
          return (
            <Reason
              key={Math.random()}
              id={i.id}
              title={i.blackListReason}
              judge={i.judgement}
              cdate={i.createdAt}
              edate={i.expiredAt}
            />
          );
        })
      ) : (
        <FlexWrap id="none">블랙리스트 대상이 아닙니다</FlexWrap>
      )}

      <AppTitle>이용제한 내역조회</AppTitle>

      {wow.length !== 0 ? (
        wow.map((i) => {
          return (
            <Reason
              key={Math.random()}
              id={i.id}
              title={i.restrictedReason}
              judge={i.judgement}
              cdate={i.createdAt}
              edate={i.restrictingDate}
            />
          );
        })
      ) : (
        <FlexWrap id="none">이용제한 내역이 없습니다</FlexWrap>
      )}
    </AppContainer>
  );
};

export const Reason = (props) => {
  return (
    <NoticeWrap>
      <Title>정지사유: {props.title}</Title>
      <Option>제한일시: {props.cdate}</Option>
      <Option>제한기간: {props.edate}</Option>
      <Option>조치사항: {props.judge}</Option>
    </NoticeWrap>
  );
};

export default BanReason;

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
  font-size: 0.8rem;
  color: #a3a3a3;

  font-weight: 300;
`;

const NoticeWrap = styled.div`
  width: 100%;
  border: 1.5px solid #f1f1f1;
  padding: 1.5rem 1.5rem;
  border-radius: 10px;
  margin-top: 2vh;

  &:hover {
    cursor: pointer;
  }
`;
