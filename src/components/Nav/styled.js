import styled from 'styled-components';

export const Navbar = styled.nav`
  background: #ffffff;
  margin: 0 auto;
  height: 110px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  top: 0;
  z-index: 999;

  font-family: 'Pretendard-Medium';
  justify-content: space-around;
  border-bottom: 1.5px solid #e0e0e0;

  @media screen and (max-width: 550px) {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    justify-content: space-between;
  }
`;

export const NavLogo = styled.img`
  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 550px) {
    font-size: var(--font-medium);
    font-weight: var(--weight-semi-bold);
  }
`;

export const MobileIcon = styled.div`
  font-size: 2rem;
  align-items: center;
  color: #336af8;
  display: none;

  @media screen and (max-width: 550px) {
    display: block;
  }
`;

export const NavMenu = styled.nav`
  display: flex;
  gap: 2rem;

  @media screen and (max-width: 550px) {
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 120px;
    left: ${({ click }) => (click ? 0 : '-100%')};
    transition: all 0.5s ease;
    background: #ffffff;
    z-index: 999;
  }
`;

export const NavLinks = styled.a`
  font-size: 1rem;
  &:hover {
    cursor: pointer;
  }
  &#signup {
    color: #336af8;
  }

  @media screen and (max-width: 550px) {
    text-align: center;
    padding: 2rem;
    display: table;
    &:hover {
      color: #4b89dc;
      transition: all 0.3s ease;
    }
  }
`;
