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
    font-size : 1.2vh;
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
    &#last {
        padding-top: 8px;
        padding-bottom: 3vh;
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
    font-size: 12px;
`; 

export const InputWrapper = styled.div`
    display: flex;
    align-items: center;
`

export const Wrapper = styled.div`
    /* PC (해상도 1024px)*/ 
    @media all and (min-width:1024px) { 
        width: 500px;
    } /* 테블릿 가로, 테블릿 세로 (해상도 768px ~ 1023px)*/

    @media all and (min-width:768px) and (max-width:1023px) {
        width: 400px;
    } /* 모바일 가로, 모바일 세로 (해상도 480px ~ 767px)*/ 

    @media all and (max-width:767px) {
        width: 300px;
    }
`;