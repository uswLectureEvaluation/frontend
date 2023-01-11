import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import Meta from '../components/Meta';
import { Button, Container, Img, SignUpWrapper } from '../styles/Common';

const ErrorFrame = ({ status, mainMsg, subMsg }) => {
  const navigate = useNavigate();
  return (
    <Container>
      <Meta title={`SUWIKI : ${status}`} />
      <Img src="images/signup.svg" width={400} />
      <SignUpWrapper>
        <StyledText id="top">{mainMsg}</StyledText>
        <StyledText>{subMsg}</StyledText>
        <Button background="#336af8" onClick={() => navigate('/')}>
          홈으로 돌아가기
        </Button>
      </SignUpWrapper>
    </Container>
  );
};

export default ErrorFrame;

const StyledText = styled.div`
  text-align: center;
  padding-bottom: 2rem;

  font-weight: 600;

  &#top {
    padding-top: 2rem;
  }
`;
