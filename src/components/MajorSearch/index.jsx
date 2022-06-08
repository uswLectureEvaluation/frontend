import * as Styled from './styled'

const MajorSearch = () => {

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
            <Styled.MajorBox></Styled.MajorBox>
            <Styled.SubmitButton>확인</Styled.SubmitButton>
        </Styled.ModalWrapper>
    )
}

export default MajorSearch