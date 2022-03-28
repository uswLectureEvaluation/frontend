import React, { useState } from 'react'
import MainList from '../../components/MainList';
import * as Styled from './styled';
import { useNavigate } from 'react-router-dom'
import { CustomSelect, StyledOption } from './selectstyled';

const Main = () => {
    const options = [
        { name: '최근 올라온 강의', lec: 'modifiedDate', imgs: 'img/icon_color_fire_36.svg' },
        { name: '꿀 강의', lec: 'lectureHoneyAvg', imgs: 'img/icon_color_bee_36.svg' },
        { name: '만족도가 높은 강의', lec: 'lectureSatisfactionAvg', imgs: 'img/icon_color_thumbs_36.svg' },
        { name: '배울게 많은 강의', lec: 'lectureLearningAvg', imgs: 'img/icon_color_book_36.svg' },
        { name: 'BEST 강의', lec: 'lectureTotalAvg', imgs: 'img/icon_color_best_36.svg' }
    ]

    let navigate = useNavigate();
    const [search, setSearch] = useState('');
    const [lecture, setLecture] = useState('lectureHoneyAvg');



    const onChange = (e) => {
        setSearch(e.currentTarget.value)
    }

    const onChangeHandler = (e) => {
        setLecture(e)
        //console.log(lecture)
    }


    const onKeypress = (e) => {
        if (e.key === 'Enter') {
            navigate(`/search`, {state: search})
        }
    }

    return (
        <Styled.Container>
            <Styled.SearchWrapper>
                <Styled.SearchTitle>강의 평가 검색</Styled.SearchTitle>
                <Styled.SearchInput
                    onChange={onChange}
                    placeholder="강의명, 교수명으로 원하는 강의평가를 찾아보세요"
                    onKeyPress={onKeypress}
                />
            </Styled.SearchWrapper>
            <Styled.SearchWrapper>
                <Styled.HeadSelection>
                    <CustomSelect defaultValue={'lectureHoneyAvg'} onChange={onChangeHandler}>
                        {options.map((index) => (
                            <StyledOption key={index.name} value={index.lec}>
                                <Styled.Soption><Styled.Img loading="lazy" width="22" src={index.imgs} /> {index.name}</Styled.Soption>
                            </StyledOption>
                        ))}
                    </CustomSelect>
                    <Styled.More onClick={() => navigate(`/search`, {state: 'all'})}>더보기＞</Styled.More>
                </Styled.HeadSelection>
                <Styled.HeadSelection>
                    <MainList lecture={lecture} />
                </Styled.HeadSelection>
            </Styled.SearchWrapper>
        </Styled.Container>
    )
}

export default Main
