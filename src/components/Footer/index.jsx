import * as Styled from './styled';

const Footer = () => {
  return (
    <footer style={{ paddingTop: '12vh' }}>
      <Styled.Foot>
        <Styled.FooterContent
          right="1rem"
          onClick={() => window.open('https://sites.google.com/view/suwiki-policy-terms/')}
        >
          이용약관
        </Styled.FooterContent>
        <Styled.FooterContent
          onClick={() => window.open('https://sites.google.com/view/suwiki-policy-privacy')}
        >
          개인정보처리방침
        </Styled.FooterContent>
        <Styled.FooterContent left="2rem" onClick={() => window.open('mailto:suwikiask@gmail.com')}>
          문의하기
        </Styled.FooterContent>
      </Styled.Foot>
    </footer>
  );
};

export default Footer;
