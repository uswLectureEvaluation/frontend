import {React, useState} from 'react'
import { resetPasswordApi } from '../../api/Api'
import * as Styled from './styled'

const ResetPassword = () => {
    const [newPassword, setNewPassword] = useState();
    const [prePassword, setPrePassword] = useState();
    const handleChange = () => {
        resetPasswordApi(prePassword, newPassword);
    }
    
    return(
        <Styled.FlexContainer>
            <Styled.FlexBox>비밀번호 변경</Styled.FlexBox>
            <input placeholder='기존 비밀번호 입력' onChange={(e)=>{setPrePassword(e.target.value)}}/>
            <input placeholder='새 비밀번호 입력' onChange={(e)=>{setNewPassword(e.target.value)}}/>
            <button onClick={handleChange}>전송</button>
        </Styled.FlexContainer>

    )
}

export default ResetPassword