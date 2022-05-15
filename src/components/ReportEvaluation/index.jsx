import { useState } from "react"
import { evaluateReportApi } from "../../api/Api"

const ReportEvaluation = (props) => {
    const [content, setContent] = useState();
    const onReport = () => {
        evaluateReportApi(props.evaluateIdx, content)
    }
    console.log(content)
    return(
        <div>
            <div>신고</div>
            <textarea name="report" id="report" cols="30" rows="10" onChange={(e)=>{setContent(e.target.value)}}></textarea>
            <button onClick={onReport}>전송</button>
        </div>
    )
}

export default ReportEvaluation