import React from 'react';
import * as Styled from './styled';

const Footer = () => {
  return (
    <Styled.Foot>
      <Styled.Use onClick={() => window.open('https://sites.google.com/view/suwiki-policy-terms/')}>
        이용약관
      </Styled.Use>
      <Styled.Privacy
        onClick={() => window.open('https://sites.google.com/view/suwiki-policy-privacy')}
      >
        개인정보처리방침
      </Styled.Privacy>
    </Styled.Foot>
  );
};

export default Footer;
