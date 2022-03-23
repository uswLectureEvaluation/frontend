import React, {useState, useEffect} from 'react'
import { Box, CssBaseline } from '@material-ui/core'
import { SearchButton, WrapperBox, Logo, BoldText, NormalText, AccountInput } from "./idsearch.element"
import { findIdApi } from '../../Api/Api'


const Idsearch = () => {

    const [email, setEmail] = useState();
    const [db, setData] = useState({
        data: []
      })

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
      }
    // 아이디 찾기 버튼 이벤트
    const onSubmit = (event) => {
        event.preventDefault();
    };

    const emailSubmit = () => {
        findIdApi(setData, email);
      }
    
    
      useEffect(() => {
        console.log(db.data)
      }, [db.data])
    
    return (
        <div style={{marginTop:"20px"}}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
                <CssBaseline/>
                <WrapperBox>
                    <BoldText>아이디 찾기</BoldText>
                    <Box component="form" onSubmit={onSubmit} noValidate sx={{ mt: 1 }}>
                        <NormalText>학교 계정 입력</NormalText>
                        <AccountInput propsFunction={onChangeEmail} />
                        <Box />
                        <SearchButton 
                        onClick={emailSubmit}
                        type="submit"
                        >
                            아이디 찾기
                            </SearchButton>
                    </Box>
                </WrapperBox>
            </Box>
        </div>
    )
}
export default Idsearch