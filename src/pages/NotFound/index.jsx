import { useNavigate } from 'react-router-dom';
import * as Styled from '../SignUp/styled';
import styled from 'styled-components';

const NotFound = () => {
  let navigate = useNavigate();
  return (
    <Styled.Container>
      <Styled.Img src="img/signup.svg" width={400} />
      <Styled.SignUpWrapper>
        <StyledText id="top">요청하신 페이지를 찾을 수 없어요.</StyledText>
        <StyledText>올바른 주소로 접속하셨나요?</StyledText>
        <Styled.Button background="#336af8" onClick={() => navigate('/')}>
          홈으로 돌아가기
        </Styled.Button>
      </Styled.SignUpWrapper>
    </Styled.Container>
  );
};

export default NotFound;

const StyledText = styled.div`
  text-align: center;
  padding-bottom: 2rem;
  font-family: 'Pretendard-SemiBold';

  &#top {
    padding-top: 2rem;
  }
`;
