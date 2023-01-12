import { useQuery } from 'react-query';
import User from '../api/User';
import UserInfo from '../components/UserInfo/UserInfo';
import { fakeUserInfo } from '../components/placeholderData';
import { isLoginStorage } from '../utils/loginStorage.js';

const MyInfo = () => {
  const user = User();

  const { data, isLoading } = useQuery(['myInfo'], user.info, {
    enabled: isLoginStorage(),
    cacheTime: 1000 * 60 * 30,
    staleTime: 1000 * 60 * 30,
  });

  if (isLoading) return <UserInfo my={fakeUserInfo} />;
  return <UserInfo my={data} />;
};

export default MyInfo;
