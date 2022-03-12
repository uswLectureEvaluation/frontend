import styled from 'styled-components';

export const Title = styled.div`
    font-size : 4vh;
    font-weight : 1000;
    margin : 2rem 0;
    text-align: center;
    font-family: "Pretendard-Black";
`;

export const Text = styled.div`
    font-size : 2vw;
    margin-bottom : 1.5rem;
    text-align: center;
    font-family: "Pretendard-SemiBold";
`;

export const Checking = styled.div`
    font-size : 1.4vw;
`

export const Label = styled.label`
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items : center;
    padding-top: 15px;
    font-size: 0.8rem;
    input {
    margin: 0 10px 0 0;
    }
    &:first-child {
    padding-bottom: 15px;
    border-bottom: 1px solid #ccc;
    }
    &:last-child {
    padding-top: 8px;
    padding-bottom: 20px;
    }
`;

export const EmailWrapper = styled.div`
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    font-size: 0.8rem;
    font-weight: bold;
`;

export const AgreeButton = styled.button`
    border: 0;
    background: 0 0;
    cursor: pointer;
    text-decoration: underline;
    color: gray;
    line-height: 1.5;
    display: block;
    float: right;
    font-size: 12px
`;