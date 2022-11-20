import styled, { keyframes } from 'styled-components';

const Spinner = ({ id }) => {
  return (
    <Container id={id}>
      <Loader />
    </Container>
  );
};

export default Spinner;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  &#nextPage {
    height: 10vh;
  }
  &#notice {
    height: 50vh;
  }
`;

const Loader = styled.div`
  border: 5px solid #f3f3f3;
  border-top: 5px solid #346cfd;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: ${spin} 1s linear infinite;
`;
