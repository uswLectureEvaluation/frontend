import React, { useState, useEffect } from 'react'
import MTable from '../../Table/MTable';
// import Link from '@mui/material/Link';
// import modifiedDate from '../../img/fire-solid.svg'
// import lectureTotalAvg from '../../img/check-solid.svg'
// import lectureSatisfactionAvg from '../../img/star-solid.svg'
// import lectureHoneyAvg from '../../img/thumbs-up-solid.svg'
// import lectureLearningAvg from '../../img/book-solid.svg'
import * as Styled from './styled';
import { useNavigate } from 'react-router-dom'
import { searchApi } from '../../Api/Api';

const Main = () => {
    const options = [
        ['최근 올라온 강의', '꿀 강의',
            '만족도가 높은 강의', '배울게 많은 강의'
            , 'BEST 강의'],
        ['modifiedDate', 'lectureHoneyAvg',
            'lectureSatisfactionAvg', 'lectureLearningAvg'
            , 'lectureTotalAvg']]
    
    let navigate = useNavigate();
    const [search, setSearch] = useState('');
    const [lecture, setLecture] = useState(options[1][0]);
    

    const [db, setData] = useState({
        data : []
    })
    

    const onChange = (e) => {
        setSearch(e.currentTarget.value)
    }

    const onClick = () => {
        searchApi(setData, search)
        alert(search + ' 검색하겠습니다');
        //navigate(`/search`)
    }

    const onChangeHandler = (e) => {
        setLecture(options[1][e.currentTarget.value])
        console.log(e.currentTarget.value)
        console.log(lecture)
    }


    const onKeypress = (e) => {
        if(e.key === 'Enter'){
            onClick()
        }
    }

    useEffect(() => {
        console.log(db.data)
    }, [db])
    



    return (
        <Styled.Container>
            <Styled.SearchWrapper>
                <Styled.SearchTitle>강의 평가 검색</Styled.SearchTitle>
                <Styled.SearchInput
                    onChange={onChange}
                    placeholder="과목명, 교수명으로 원하는 강의평가를 찾아보세요"
                    onKeyPress={onKeypress}
                    
                />
            </Styled.SearchWrapper>
            <Styled.SearchWrapper>
                <Styled.HeadSelection>
                    <Styled.Select onChange={onChangeHandler}>
                        {
                            options[0].map((v, index) => (
                                <option value={index}> {v} </option>
                            ))
                        }
                    </Styled.Select>
                    <Styled.More>더보기＞</Styled.More>
                </Styled.HeadSelection>
                <Styled.HeadSelection>
                    <MTable lecture='lectureHoneyAvg' />
                </Styled.HeadSelection>
            </Styled.SearchWrapper>
        </Styled.Container>

        // <HeadSelection style={{ marginBottom: '20px' }}>
        //     <CustomSelect value={lecture} onChange={onLecture}>
        //         {countries.map((c) => (
        //             <StyledOption key={c.code} value={c.lec}  >
        //                 <Img loading="lazy"  width="20" src={c.code} />
        //                 {c.label}
        //             </StyledOption>
                // ))}
        //     </CustomSelect>
    )
}

export default Main
