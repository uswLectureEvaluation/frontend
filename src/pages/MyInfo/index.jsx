import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import User from '../../api/User';
import { Button } from '../../components';
import UserInfo from '../../components/MyInfo/UserInfo';
import { fakeUserInfo } from '../../components/placeholderData';
import { isLoginStorage } from '../../utils/loginStorage.js';
import * as Styled from './styled';

const MyInfo = () => {
  const user = User();
  const navigate = useNavigate();

  const { data, isLoading } = useQuery(['myInfo'], user.info, {
    enabled: isLoginStorage(),
    cacheTime: 1000 * 60 * 30,
    staleTime: 1000 * 60 * 30,
  });
  let my = data;

  if (isLoading) return <UserInfo my={fakeUserInfo} />;
  return !isLoginStorage() ? (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Styled.FlexContainer id="col">
        <Button color="#336af8" onClick={() => navigate('/login')}>
          로그인하기
        </Button>
      </Styled.FlexContainer>
    </div>
  ) : (
    <UserInfo my={my} />
  );
};

export default MyInfo;
