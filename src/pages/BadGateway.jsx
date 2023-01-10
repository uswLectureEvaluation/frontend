import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { Button, Container, Img, SignUpWrapper } from './SignUp';

const BadGateway = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Img src="images/signup.svg" width={400} />
      <SignUpWrapper>
        <StyledText id="top">502 Bad Gateway</StyledText>
        <StyledText>문제를 해결하고 있어요. 다시 한번 시도해주세요.</StyledText>
        <Button background="#336af8" onClick={() => navigate('/')}>
          홈으로 돌아가기
        </Button>
      </SignUpWrapper>
    </Container>
  );
};

export default BadGateway;

const StyledText = styled.div`
  text-align: center;
  padding-bottom: 2rem;

  font-weight: 600;

  &#top {
    padding-top: 2rem;
  }
`;
