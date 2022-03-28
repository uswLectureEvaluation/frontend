import React, { useState } from 'react';
import SearchList from '../../components/SearchList';
import { useNavigate } from 'react-router-dom'
import { useLocation } from "react-router";
import * as Styled from './styled';
import MainList from '../../components/MainList';


const Search = () => {
    const detail = ['날짜',  '꿀강', '만족도', '배움', '종합'];

    const {state} = useLocation();


    let navigate = useNavigate();

    const [search, setSearch] = useState('');

    const onChange = (e) => {
        setSearch(e.currentTarget.value)
    }

    const onKeypress = (e) => {
        if (e.key === 'Enter') {
            navigate(`/search`, {state: search})
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
                    <Styled.SearchResultMenu key={name} id={name} detail={detail} index={index}>
                        {name}
                    </Styled.SearchResultMenu>
                )}
            </Styled.SearchResultWrapper>

            <Styled.HeadSelection>
                {state === 'all' ? <MainList lecture={'lectureHoneyAvg'} /> : <SearchList lecture={state} />}
            </Styled.HeadSelection>
        </Styled.Container>
    )
};


export default Search;