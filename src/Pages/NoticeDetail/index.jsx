import React, { useState, useEffect } from "react"
import * as Styled from "./styled"
import { useLocation } from "react-router"
import { noticeDetailApi } from "../../api/Api"

const NoticeDetail = () => {

    const location = useLocation()
    const { id } = location.state

    const [db, setData] = useState({ data: {} })

    useEffect(() => {
        noticeDetailApi(id).then((data) => setData(data))
    }, [id])


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
