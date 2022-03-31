import React, { useState, useEffect } from "react"
import * as Styled from "./styled"
import { useSelector } from "react-redux"
import { noticeDetailApi } from "../../api/Api"

const NoticeDetail = () => {
    const notice = useSelector((state) => state.notice.value)

    const [db, setData] = useState({ data: {} })

    useEffect(() => {
        noticeDetailApi(notice).then((data) => setData(data))
    }, [notice])

    console.log(db.data)

    return (
        <Styled.AppContainer>
            <Styled.AppTitle>공지사항</Styled.AppTitle>

            <Styled.Content>
                <Styled.Title>{db.data.title}</Styled.Title>
                <Styled.Date>
                    {/* {db.data.modifiedDate.slice(0, 10)}{" "}
                    {db.data.modifiedDate.slice(11)} */}
                </Styled.Date>
                {db.data.content}
            </Styled.Content>
        </Styled.AppContainer>
    )
}

export default NoticeDetail
