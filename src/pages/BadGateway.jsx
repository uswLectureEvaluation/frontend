import ErrorFrame from '../components/ErrorFrame';

const BadGateway = () => {
  return (
    <ErrorFrame
      status="502"
      mainMsg="502 Bad Gateway"
      subMsg="문제를 해결하고 있어요. 다시 한번 시도해주세요."
    />
  );
};

export default BadGateway;
