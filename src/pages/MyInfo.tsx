import { useQuery } from 'react-query';
import { User } from 'api';
import { UserInfo } from 'components';
import { fakeUserInfo } from 'constants/placeholderData';
import { isLoginStorage } from 'utils/loginStorage';

const MyInfo = () => {
  const user = User();

  const { data, isLoading } = useQuery(['myInfo'], user.info, {
    enabled: isLoginStorage(),
    cacheTime: 1000 * 60 * 30,
    staleTime: 1000 * 60 * 30,
  });

  if (isLoading || !data) return <UserInfo my={fakeUserInfo} />;

  return <UserInfo my={data.data} />;
};

export default MyInfo;
