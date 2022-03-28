import React, { useState } from 'react';
import MainList from '../../components/MainList';
import * as Styled from './styled';
import { searchApi } from '../../api/Api';


const Search = () => {
    const detail = ['만족도', '꿀강', '배움', '날짜', '종합'];

    let setData;

    const [search, setSearch] = useState('');

    const onChange = (e) => {
        setSearch(e.currentTarget.value)
    }

    const onClick = () => {
        searchApi(setData, search)
        alert(search + ' 검색하겠습니다');
        //navigate(`/search`)
    }

    const onKeypress = (e) => {
        if (e.key === 'Enter') {
            onClick()
        }
    }

    return (
        <Styled.Container>
            <Styled.SearchWrapper>
                <Styled.SearchTitle>검색 결과 (N)</Styled.SearchTitle>
                <Styled.SearchInput
                    onChange={onChange}
                    placeholder="강의명, 교수명으로 원하는 강의평가를 찾아보세요"
                    onKeyPress={onKeypress}
                />
            </Styled.SearchWrapper>

            <Styled.SearchResultWrapper>
                <Styled.SearchResultMenu id='sort'>
                    정렬
                    <Styled.Img loading="lazy" width="22" src="img/icon_sort_solid_mint_24.svg" />
                </Styled.SearchResultMenu>
                {detail.map((name, index) =>
                    <Styled.SearchResultMenu id={name} detail={detail} index={index}>
                        {name}
                    </Styled.SearchResultMenu>
                )}
            </Styled.SearchResultWrapper>

            <Styled.HeadSelection>
                <MainList lecture='lectureHoneyAvg' />
            </Styled.HeadSelection>
        </Styled.Container>
    )
};


export default Search;