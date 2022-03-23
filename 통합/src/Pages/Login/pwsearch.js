import React, {useState, useEffect} from 'react'
import { Box, CssBaseline } from '@material-ui/core'
import { WrapperBox, BoldText, NormalText, SmallText, SearchButton, Logo, IdInput, EmailInput } from './pwsearch.element'
import { findPwApi } from '../../Api/Api';

const Pwsearch = () => {
    // 비밀번호 찾기 버튼 이벤트
    const onSubmit = (event) => {
        event.preventDefault();   
        };
    const [username, setUserName] = useState();
    const [email, setEmail] = useState();
    const [db, setData] = useState({
        data: []
        })

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
        }
    const onChangeID = (e) => {
        setUserName(e.target.value);
        }
    const handleSubmit = () => {
        findPwApi(setData, username, email);
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
                    <BoldText>비밀번호 찾기</BoldText>
                    <Box component="form" onSubmit={onSubmit} noValidate sx={{ mt: 1 }}>
                        <NormalText>SUWIKI 아이디/이메일 입력</NormalText>
                        <IdInput propsfunction={onChangeID}/>
                        <EmailInput propsfunction={onChangeEmail}/>
                        <Box />
                        <SearchButton onClick={handleSubmit} type="submit">비밀번호 찾기</SearchButton>
                    </Box>
                    <SmallText>아이디에 해당하는 학교메일로 임시 비밀번호를 전송합니다.</SmallText>
                </WrapperBox>
            </Box>
        </div>
    )
}

export default Pwsearch