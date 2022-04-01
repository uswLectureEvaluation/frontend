import { memo } from "react"
import * as Styled from "./styled"
import { useNavigate } from "react-router-dom"

const NoticeItem = ({ id, title, modifiedDate }) => {

    const navigate = useNavigate()

    const onClick = () => {
        navigate("/noticedetail", { state: { id: id } })
    }
    return (
        <Styled.NoticeWrap onClick={onClick}>
            <Styled.Title>{title}</Styled.Title>
            <Styled.Option>{modifiedDate.slice(0, 10)}</Styled.Option>
        </Styled.NoticeWrap>
    )
}

export default memo(NoticeItem)
