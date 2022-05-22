import {React, useState} from 'react'
import { resetPasswordApi } from '../../api/Api'
import * as Styled from './styled'

const ResetPassword = () => {
    const [password, setPassword] = useState()
    const handleChange = () => {
        resetPasswordApi(password)
    }
    return(
        <Styled.FlexContainer>
            <Styled.FlexBox>비밀번호 변경</Styled.FlexBox>
            <input placeholder='새 비밀번호 입력' onChange={(e)=>{setPassword(e.target.value)}}/>
            <button onClick={handleChange}>전송</button>
        </Styled.FlexContainer>

    )
}

export default ResetPassword