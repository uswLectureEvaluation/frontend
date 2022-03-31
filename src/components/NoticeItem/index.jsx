import { memo } from "react"
import * as Styled from "./styled"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { noticeState } from "../../features/noticeSlice"


const NoticeItem = ({ id, title, modifiedDate }) => {

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const onClick = () => {
        dispatch(noticeState(id))
        navigate('/noticedetail')
    }
    return (
        <Styled.NoticeWrap onClick={onClick}>
            <Styled.Title>{title}</Styled.Title>
            <Styled.Option>{modifiedDate}</Styled.Option>
        </Styled.NoticeWrap>
    )
}

export default memo(NoticeItem)
