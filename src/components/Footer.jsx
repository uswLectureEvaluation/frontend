import styled from '@emotion/styled';

const footerMenu = [
  {
    title: '이용약관',
    page: 'https://sites.google.com/view/suwiki-policy-terms',
  },
  {
    title: '개인정보처리방침',
    page: 'https://sites.google.com/view/suwiki-policy-privacy',
  },
  {
    title: '문의하기',
    page: 'https://alike-pump-ae3.notion.site/SUWIKI-2cd58468e90b404fbd3e30b8b2c0b699',
  },
];

const Footer = () => {
  return (
    <FootWrapper>
      <Foot>
        {footerMenu.map(({ title, page }) => (
          <FooterContent key={page} onClick={() => window.open(page)}>
            {title}
          </FooterContent>
        ))}
      </Foot>
    </FootWrapper>
  );
};

export default Footer;

const FootWrapper = styled.footer`
  padding-top: 100px;
`;

const Foot = styled.div`
  margin: 0 auto;
  background-color: rgb(237, 237, 237);
  display: flex;
  gap: 1.4rem;
  height: 170px;
  justify-content: center;
  align-items: center;
`;

const FooterContent = styled.div`
  color: #222222;
  font-size: 1rem;
  &:hover {
    cursor: pointer;
  }
  @media screen and (max-width: 550px) {
    font-size: 0.9rem;
  }
`;
