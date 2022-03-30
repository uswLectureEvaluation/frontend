import styled from 'styled-components'

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
    justify-content: space-around;
    border-bottom: 1.5px solid #E0E0E0;
`

export const NavbarContainer = styled.div`
display: flex;
//아이템들의 사이에 균일한 간격을 만들어준다
justify-content: center;

`


export const NavLogo = styled.nav`
    color: #3DD3C4;
    display: flex;
    font-size: 2rem;
    font-weight: bold;
    &:hover {
        cursor: pointer;
    }

    @media screen and (max-width: 960px) {
        margin: 0 auto;
    }
    
`


export const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 960px) {
    display: block;
    font-size: 1.8rem;
    cursor: pointer;
    position: absolute;
    left: 0;
}
`;

export const NavMenu = styled.nav`
    display: flex;

    @media screen and (max-width: 960px) {
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
`


export const NavLinks = styled.div`
    display: flex;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    &:hover {
        cursor: pointer;
    }
    &#signup {
        color:#3DD3C4;
    }

    @media screen and (max-width: 960px) {
        text-align: center;
        padding: 2rem;
        display: table;
        &:hover {
            color: #4B89DC;
            transition: all 0.3s ease;
        }
  }
`

export const Img = styled.img`
`