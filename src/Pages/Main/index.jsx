import React, { useState, useEffect } from 'react'
import MTable from '../../Table/MTable';
// import Link from '@mui/material/Link';
import modi from '../../img/fire-solid.svg'
import total from '../../img/check-solid.svg'
import faction from '../../img/star-solid.svg'
import honey from '../../img/thumbs-up-solid.svg'
import learning from '../../img/book-solid.svg'
import * as Styled from './styled';
import { useNavigate } from 'react-router-dom'
import { mainApi, searchApi } from '../../Api/Api';
import { CustomSelect, StyledOption } from './selectstyled';

const Main = () => {

    const options = [
        { name: '최근 올라온 강의', lec: 'modifiedDate', imgs: modi },
        { name: '꿀 강의', lec: 'lectureHoneyAvg', imgs: total },
        { name: '만족도가 높은 강의', lec: 'lectureSatisfactionAvg', imgs: faction },
        { name: '배울게 많은 강의', lec: 'lectureLearningAvg', imgs: honey },
        { name: 'BEST 강의', lec: 'lectureTotalAvg', imgs: learning }
    ]

    // const options = [
    //     ['최근 올라온 강의', '꿀 강의',
    //         '만족도가 높은 강의', '배울게 많은 강의'
    //         , 'BEST 강의'],
    //     ['modifiedDate', 'lectureHoneyAvg',
    //         'lectureSatisfactionAvg', 'lectureLearningAvg'
    //         , 'lectureTotalAvg']]

    let navigate = useNavigate();
    const [search, setSearch] = useState('');
    const [lecture, setLecture] = useState('lectureHoneyAvg');


    const [db, setData] = useState({
        data: []
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
        setLecture(e)
        console.log(lecture)
    }


    const onKeypress = (e) => {
        if (e.key === 'Enter') {
            onClick()
        }
    }

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
                    <CustomSelect defaultValue={'lectureHoneyAvg'} onChange={onChangeHandler}>
                        {options.map((index) => (
                            <StyledOption key={index.name} value={index.lec}>
                                <img
                                    loading="lazy"
                                    width="20"
                                    src={index.imgs}
                                />
                                {index.name}
                            </StyledOption>
                        ))}
                    </CustomSelect>
                    {/* <Styled.Select onChange={onChangeHandler}>
                        {
                            options[0].map((v, index) => (
                                <option value={index}> {v} </option>
                            ))
                        }
                    </Styled.Select> */}
                    <Styled.More onClick={() => navigate(`/search`)}>더보기＞</Styled.More>
                </Styled.HeadSelection>
                <Styled.HeadSelection>
                    <MTable lecture={lecture} />
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
