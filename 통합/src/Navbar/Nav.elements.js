import styled from 'styled-components'
import { FaMagento } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Container } from '../globalStyles'


export const Navbar = styled.nav`
background: #fff;
margin: 0 auto;
height: 80px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1.2rem;
position: sticky;
top: 0;
z-index: 999;
`

export const NavbarContainer = styled(Container)`
display: flex;
//아이템들의 사이에 균일한 간격을 만들어준다
justify-content: space-between;
height: 80px;
border-width: 0px 0px 2px;
    border-style: solid;
    border-color: rgb(51, 51, 51) rgb(51, 51, 51) rgb(224, 224, 224);

${Container}
`

export const NavLogo = styled(Link)`
 justify-self: flex-start;
color: #4B89DC;
//시작과 동일
cursor: pointer;
text-decoration: none;
font-size: 2rem;
display: flex;
align-items: center;
font: 32px impact;

@media screen and (max-width: 960px) {
  
margin: 0 auto;
}

`

export const NavIcon = styled(FaMagento)`
margin-right: 0.5rem;
`


export const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    transform: translate(-50%, 60%);
    font-size: 1.8rem;
    cursor: pointer;

}
`;

export const NavMenu = styled.ul`
 display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: #fff;
  }
`;

export const NavItem = styled.li`

height: 80px;
border-bottom: 2px solid transparent;

&:hover{
    border-bottom: 2px solid #4B89DC;
}

@media screen and (max-width: 960px) {
    width: 100%;

    &:hover {
        border: none;
    }
}
`;

export const NavLinks = styled(Link)`
    color: #000000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
    &:hover {
      color: #4B89DC;
      transition: all 0.3s ease;
    }
  }
`;


export const NavItemBtn = styled.li`

@media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width:100%;
    height:120px;
    color: #4B89DC;
}
`
export const NavBtnLink = styled(Link)`
display: flex;
justify-content: center;
align-items: center;
text-decoration: none;
padding: 8px 16px;
height: 100%;
width: 100%;
border: none;
outline: none;
 color: #4B89DC;
`
