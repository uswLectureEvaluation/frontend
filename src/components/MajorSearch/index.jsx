import { useEffect, useState } from 'react'
import { majorTypeApi } from '../../api/Api'
import * as Styled from './styled'

const MajorSearch = () => {
    const [db, setData] = useState({
        data: [],
      })

    useEffect(()=>{
        majorTypeApi().then((data)=>{setData(data); console.log(data)});
    },[setData])

    return(
        <Styled.ModalWrapper>
            <Styled.TitleWrapper>
                <Styled.Title>
                    개설학과 검색
                </Styled.Title>
                <Styled.Title>
                    X
                </Styled.Title>
            </Styled.TitleWrapper>
            <Styled.TitleLine />
            <Styled.InputWrapper>
                <Styled.CssTextField placeholder='개설학과를 검색하세요.'/>
            </Styled.InputWrapper>
            <Styled.TabWrapper>
                <Styled.TabMenu>전체</Styled.TabMenu>
                <Styled.TabMenu>즐겨찾기</Styled.TabMenu>
            </Styled.TabWrapper>
            <Styled.MajorBox>
                {db.data.map((v,i)=>{
                    return(
                        <Styled.MajorSelect><Styled.SearchIcon src='img/icon-emptystar-24.svg' width={20}/>{v}</Styled.MajorSelect>
                    )
                })}
            </Styled.MajorBox>
            <Styled.SubmitButton>확인</Styled.SubmitButton>
        </Styled.ModalWrapper>
    )
}

export default MajorSearch