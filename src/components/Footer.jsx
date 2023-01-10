import styled from 'styled-components';

const Footer = () => {
  return (
    <FootWrapper>
      <Foot>
        <FooterContent
          right="1rem"
          onClick={() => window.open('https://sites.google.com/view/suwiki-policy-terms/')}
        >
          이용약관
        </FooterContent>
        <FooterContent
          onClick={() => window.open('https://sites.google.com/view/suwiki-policy-privacy')}
        >
          개인정보처리방침
        </FooterContent>
        <FooterContent left="2rem" onClick={() => window.open('mailto:suwikiask@gmail.com')}>
          문의하기
        </FooterContent>
      </Foot>
    </FootWrapper>
  );
};

export default Footer;

export const FootWrapper = styled.footer`
  padding-top: 100px;
`;

export const Foot = styled.div`
  margin: 0 auto;
  background-color: rgb(237, 237, 237);
  display: flex;
  gap: 1.4rem;
  height: 170px;
  justify-content: center;
  align-items: center;
`;

export const FooterContent = styled.div`
  color: #222222;
  font-size: 1rem;
  &:hover {
    cursor: pointer;
  }
  @media screen and (max-width: 550px) {
    font-size: 0.9rem;
  }
`;
