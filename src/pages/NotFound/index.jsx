import { useNavigate } from 'react-router-dom';
import * as Styled from '../SignUp/styled';
import styled from 'styled-components';
import Meta from '../../components/Meta';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Styled.Container>
      <Meta title="SUWIKI : 404" />
      <Styled.Img src="images/signup.svg" width={400} />
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

  font-weight: 600;

  &#top {
    padding-top: 2rem;
  }
`;
