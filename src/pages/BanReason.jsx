import styled from '@emotion/styled';
import User from '../api/User';
import { useQuery } from 'react-query';
import Spinner from '../components/Etc/Spinner';
import BanFrame from '../components/BanFrame';
import { AppContainer } from '../styles/Common';

const BanReason = () => {
  const user = User();
  const { data: banList, isLoading: banLoad } = useQuery(['myInfo', 'banList'], user.banList);
  const { data: resList, isLoading: resLoad } = useQuery(['myInfo', 'resList'], user.resList);

  if (banLoad) return <Spinner id="myInfo" />;
  if (resLoad) return null;

  return (
    <AppContainer>
      <AppTitle>블랙리스트 내역조회</AppTitle>
      <BanFrame type="ban" list={banList} />

      <AppTitle>이용제한 내역조회</AppTitle>
      <BanFrame type="res" list={resList} />
    </AppContainer>
  );
};

export default BanReason;

const AppTitle = styled.div`
  display: flex;
  width: 100%;
  font-size: 1.5rem;

  font-weight: 600;
  padding-top: 5rem;
  padding-bottom: 1rem;
`;
