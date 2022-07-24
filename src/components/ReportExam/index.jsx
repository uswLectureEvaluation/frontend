import { useState } from "react"
import { examReportApi } from "../../api/Api"

const ReportExam = (props) => {
    const [content, setContent] = useState();
    const onReport = () => {
        if (window.confirm('정말 신고하시겠어요? \n*허위 신고 시 제재가 가해질 수 있습니다!'))
            examReportApi(props.examIdx, content)
    }
    return(
        <div>
            <div>신고</div>
            <textarea name="report" id="report" cols="30" rows="10" onChange={(e)=>{setContent(e.target.value)}}></textarea>
            <button onClick={onReport}>전송</button>
        </div>
    )
}

export default ReportExam