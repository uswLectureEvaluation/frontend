import { useState } from "react"
import { examReportApi } from "../../api/Api"

const ReportExam = (props) => {
    const [content, setContent] = useState();
    const onReport = () => {
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