import styled from 'styled-components';

export const Wrapper = styled.div`
    margin: 0;
    padding: 0.9rem 2.2rem;
    color: #F9F9F9;
    background: ${(props) => props.background};
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
    border-radius: 7px;
    cursor: pointer;
    user-select: none;
    transition: .3s all;
    font-family: 'Pretendard-Bold';
    &:hover, &:active {
        transform: scale(1.1);
    }
`;