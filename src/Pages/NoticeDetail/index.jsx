import React, { useState, useEffect } from "react"
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
        <div>
            {
                db.data.id
            }
            {
                db.data.title
            }
            {
                db.data.content
            }
            {
                db.data.modifiedDate
            }
        </div>
    )
}

export default NoticeDetail