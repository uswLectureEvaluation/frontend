import styled from 'styled-components'
import { FaMagento } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Container } from '../globalStyles'


export const Navbar = styled.nav`
background: #fff;
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

color: #4B89DC;
//시작과 동일
justify-self: right;
cursor: pointer;
text-decoration: none;
font-size: 2rem;
display: flex;
align-items: center;
font: 32px impact;
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
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;

}
`;

export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style:none;
text-align: center;


@media screen and ( max-width: 960px) {
    display: flex;
    //세로방향으로 정렬
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    right: ${({ click }) => (click ? 0 : '-100%')};
    //불투명도
    opacity: 1;
    //transition-property(원하는 에니메이션 시키 속성을 입력), 
    //transition-duration(애니메이션 효과가 몇초동안 실행될지)
    //transition-timingfunction(애니메이션이 적용되는 속도를 지정)
    //transition-duration(애니메이션 효과가 몇초 지난 후 작동할지 설정) 
    //transition: all: 높이와 너비, 0.5s 총시간 , ease: 느리게 시작했다가 빨라졌다가 다시 느려짐
    transition: all 2s ease;
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
    font: 20px HanSans;

    @media screen and (max-width: 960px) {
        text-align: center;
        padding: 2rem;
        width: 100%;
        display: table;

        &:hover {
            color: #4B89DC;
            transition: all 1s ease;
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
