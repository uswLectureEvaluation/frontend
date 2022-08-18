import * as Styled from './styled';

const Footer = () => {
  return (
    <div style={{ paddingTop: '12vh' }}>
      <Styled.Foot>
        <Styled.Use
          onClick={() => window.open('https://sites.google.com/view/suwiki-policy-terms/')}
        >
          이용약관
        </Styled.Use>
        <Styled.Privacy
          onClick={() => window.open('https://sites.google.com/view/suwiki-policy-privacy')}
        >
          개인정보처리방침
        </Styled.Privacy>
        <Styled.Contact onClick={() => window.open('mailto:suwikiask@gmail.com')}>
          문의하기
        </Styled.Contact>
      </Styled.Foot>
    </div>
  );
};

export default Footer;
