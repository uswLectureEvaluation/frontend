import React from "react"
import * as Styled from "./styled"
import Button from "../Button"

const TestInfo = () => (
    <Styled.Wrapper>
        <Styled.Content>
            시험 정보를 보려면<Styled.Color> 20 포인트</Styled.Color>가 필요해요
        </Styled.Content>
        <Styled.BtWidth>
            <Button color="#3DD3C4">포인트 사용하기</Button>
        </Styled.BtWidth>
    </Styled.Wrapper>
)

export default TestInfo
