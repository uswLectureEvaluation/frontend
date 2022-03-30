import { memo } from "react"
import * as Styled from "./styled"

const Item = ({ number }) => {
    const onClick = () => {
        alert(number)
    }
    return (
        <Styled.NoticeWrap onClick={onClick}>
            <Styled.Title>{number}</Styled.Title>
            <Styled.Option>{number}</Styled.Option>
        </Styled.NoticeWrap>
    )
}

export default memo(Item)
