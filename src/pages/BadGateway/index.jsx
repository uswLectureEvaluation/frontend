import { useNavigate } from 'react-router-dom';
import * as Styled from '../SignUp/styled';
import styled from 'styled-components';

const BadGateway = () => {
  const navigate = useNavigate();
  return (
    <Styled.Container>
      <Styled.Img src="images/signup.svg" width={400} />
      <Styled.SignUpWrapper>
        <StyledText id="top">502 Bad Gateway</StyledText>
        <StyledText>문제를 해결하고 있어요. 다시 한번 시도해주세요.</StyledText>
        <Styled.Button background="#336af8" onClick={() => navigate('/')}>
          홈으로 돌아가기
        </Styled.Button>
      </Styled.SignUpWrapper>
    </Styled.Container>
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
