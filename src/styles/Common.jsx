import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 60%;
  margin: 0 auto;
  padding: 8rem 0;
  justify-content: space-between;
  @media only screen and (max-width: 960px) {
    justify-content: center;
  }

  @media only screen and (max-width: 550px) {
    width: 100%;
    padding: 20px;
  }
`;

export const SignUpWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 405px;
  @media only screen and (max-width: 960px) {
    width: 350px;
  }
`;

export const Img = styled.img`
  @media only screen and (max-width: 960px) {
    display: none;
  }
`;

export const Button = styled.button`
  margin: 0;
  padding: 0 1rem;
  padding-top: 1rem;
  margin: 8px 0;
  border: none;
  padding-bottom: 1rem;
  background: ${(props) => props.background};
  color: white;
  font-size: 1rem;
  border-radius: 12px;

  font-weight: 600;
  cursor: pointer;
  user-select: none;
  transition: 0.3s all;

  &:disabled {
    background-color: rgba(170, 170, 170);
    cursor: auto;
  }

  &#check {
    position: absolute;
    right: 20%;
    margin-top: 28px;
    font-weight: 100;
    font-size: 0.9rem;
    border-radius: 14px;
    padding: 0.2rem 0.8rem;
    @media only screen and (max-width: 960px) {
      right: 27%;
    }
    @media only screen and (max-width: 550px) {
      right: 5%;
    }
    :disabled {
      background: white;
      color: rgba(170, 170, 170);
      border: 1px solid rgba(170, 170, 170);
    }
  }
`;
