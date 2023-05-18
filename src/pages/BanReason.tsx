import styled from '@emotion/styled';
import { User } from 'api';
import { BanFrame } from 'components';
import { useQuery } from 'react-query';
import { AppContainer } from 'styles/common';

const BanReason = () => {
  const user = User();
  const { data: banList } = useQuery(['myInfo', 'banList'], user.banList, {
    suspense: true,
  });
  const { data: resList } = useQuery(['myInfo', 'resList'], user.resList, {
    suspense: true,
  });

  return (
    <AppContainer>
      <AppTitle>블랙리스트 내역조회</AppTitle>
      <BanFrame banType="ban" list={banList} />

      <AppTitle>이용제한 내역조회</AppTitle>
      <BanFrame banType="res" list={resList} />
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
