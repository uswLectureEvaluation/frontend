import React from 'react';
import * as Styled from './styled';
import MyEvaluation from '../../components/MyEvaluation'
import { Container } from "@material-ui/core";


const Search = () => {
    const detail = ['정렬', '만족도', '꿀강', '배움', '날짜', '종합'];
    return (
        <Container>
            <Styled.GlobalStyle />
            <Styled.Wrapper>
                <Styled.Title>검색 결과</Styled.Title>
                <Styled.Input />

                <Styled.SearchResultWrapper>
                    {detail.map((name, index) =>
                        <Styled.SearchResultMenu detail={detail} index={index}>
                            {name}
                        </Styled.SearchResultMenu>
                    )}
                </Styled.SearchResultWrapper>

                <Styled.MyEvaluationWrapper>
                    <MyEvaluation />
                </Styled.MyEvaluationWrapper>
            </Styled.Wrapper>
        </Container>
    )
};


export default Search;