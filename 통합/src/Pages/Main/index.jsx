import React, { useState } from 'react'
import { Img, Wrapper, Display, DContainer, Row, TextCenter, VerticalMiddle, SearchInput, SearchBar, HeadSelection, CustomSelect, StyledOption } from './Header.elemets'
import MTable from '../../Table/MTable';
import Link from '@mui/material/Link';
import modifiedDate from '../../img/fire-solid.svg'
import lectureTotalAvg from '../../img/check-solid.svg'
import lectureSatisfactionAvg from '../../img/star-solid.svg'
import lectureHoneyAvg from '../../img/thumbs-up-solid.svg'
import lectureLearningAvg from '../../img/book-solid.svg'
import * as Styled from './styled';
import { useNavigate } from 'react-router-dom'
import { Container } from "@material-ui/core";

const Main = () => {
    const navigate = useNavigate();
    const [search, setSearch] = useState('');
    const [lecture, setLecture] = useState('lectureHoneyAvg');

    const onChange = (e) => {
        setSearch(e.target.value)
    }

    const onClick = () => {
        alert(search + '검색하겠습니다');
        navigate("/search")
    }


    const onLecture = (e) => {
        setLecture(e)
        console.log(e)
    }

    const countries = [
        { code: modifiedDate, label: '최근 올라온 강의', lec: 'modifiedDate' },
        {
            code: lectureHoneyAvg,
            label: '꿀 강의',
            lec: 'lectureHoneyAvg'
        },
        {
            code: lectureSatisfactionAvg, label: '만족도가 높은 강의',
            lec: 'lectureSatisfactionAvg'
        },
        { code: lectureLearningAvg, label: '배울게 많은 강의', lec: 'lectureLearningAvg' },
        { code: lectureTotalAvg, label: 'Best 강의', lec: 'lectureTotalAvg' }
    ]

    return (
        <Styled.Container>
            <div>
                <Styled.SearchTitle>강의 평가 검색</Styled.SearchTitle>
                <Styled.SearchInput
                    onChange={onChange}
                    placeholder="과목명, 교수명으로 원하는 강의평가를 찾아보세요!"
                    onClick={onClick}
                />
            </div>
            <div>
                <div>
                    <div>셀렉</div>
                    <div>더보기</div>
                </div>
                <div>

                </div>
            </div>
        </Styled.Container>
        // <Container maxWidth="lg">
        //     <Wrapper>
        //         <Display>
        //             <VerticalMiddle>
        //                 <DContainer>
        //                     <Row>
        //                         <TextCenter>강의평가 검색</TextCenter>
        //                         <SearchBar>
        //                             <SearchInput
        //                                 onChange={onChange}
        //                                 placeholder="과목명, 교수명으로 원하는 강의평가를 찾아보세요!"
        //                                 onClick={onClick}
        //                             />
        //                             {/* <SearchButton>
        //                             <HiSearch style={{
        //                                 width: '40px',
        //                                 height: '45px'
        //                             }} />
        //                         </SearchButton> */}
        //                         </SearchBar>
        //                         <HeadSelection style={{ marginBottom: '20px' }}>
        //                             <CustomSelect value={lecture} onChange={onLecture}>
        //                                 {countries.map((c) => (
        //                                     <StyledOption key={c.code} value={c.lec}  >
        //                                         <Img loading="lazy"  width="20" src={c.code} />
        //                                         {c.label}
        //                                     </StyledOption>
        //                                 ))}
        //                             </CustomSelect>
        //                             <Link
        //                                 component="button"
        //                                 variant="body2"
        //                                 onClick={() => {
        //                                     alert("I'm a button.");
        //                                 }}
        //                                 style={{ fontSize: '20px', color: 'rgb(158, 158, 158)' }}
        //                             >
        //                             더보기
        //                             </Link>
        //                         </HeadSelection>
        //                         <MTable lecture={lecture} />
        //                     </Row>
        //                 </DContainer>
        //             </VerticalMiddle>
        //         </Display >
        //     </Wrapper>
        // </Container>
    )
}

export default Main
