import { ErrorFrame } from 'components';

const NotFound = () => {
  return (
    <ErrorFrame
      status="404"
      mainMsg="요청하신 페이지를 찾을 수 없어요."
      subMsg="올바른 주소로 접속하셨나요?"
    />
  );
};

export default NotFound;
