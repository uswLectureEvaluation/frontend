import React from 'react';
import * as Styled from './styled';
import { Positioner } from '../../components/Wrapper/styled'
import MyEvaluation from '../../components/MyEvaluation'


const Search = () => {
    const detail = ['정렬', '만족도', '꿀강', '배움', '날짜', '종합'];
    return (
        <Positioner>
            <Styled.GlobalStyle />
            <Styled.Wrapper>
                <div>
                    <Styled.Title>검색 결과</Styled.Title>
                    <Styled.Input />
                </div>
                <Styled.SearchResultWrapper>
                    { detail.map((name, index)=>
                        <Styled.SearchResultMenu detail={detail} index={index}>
                            {name}
                        </Styled.SearchResultMenu>
                    )}
                </Styled.SearchResultWrapper>

                <Styled.MyEvaluationWrapper>
                    <MyEvaluation />
                </Styled.MyEvaluationWrapper>
            </Styled.Wrapper>
        </Positioner>
    )
};


export default Search;