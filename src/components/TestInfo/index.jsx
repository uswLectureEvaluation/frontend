import React from 'react';
import * as Styled from './styled';
import Button from '../Button';


const TestInfo = () => (
    <Styled.Wrapper >
        <Styled.Positioner>
            <Styled.Content>
                시험 정보를 보려면<br /><Styled.Color>20 POINT</Styled.Color>가 필요해요
            </Styled.Content>
            <Button>포인트 사용하기</Button>
        </Styled.Positioner>
    </Styled.Wrapper>
);

export default TestInfo;