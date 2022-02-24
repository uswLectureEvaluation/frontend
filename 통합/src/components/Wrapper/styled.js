import styled from 'styled-components';

export const Positioner = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const Contents = styled.div`
    background: rgba(0,0,0,0.1);
    padding: 5vh 12vw;
    width: 42vw;
    border-radius: 12px;
    border : 0.001rem solid black;
`;

export const Content = styled.div`
    margin-bottom: 2rem;
    font-size : 1.5rem;
    font-weight : 1000;
    margin-bottom : 3rem;
    text-align: center;
`;

export const Title = styled.div`
    font-size : 2rem;
    font-weight : 1000;
    margin-bottom : 1rem;
    text-align: center;
`;