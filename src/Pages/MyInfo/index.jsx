import React, { useState, useEffect } from 'react'
import * as Styled from './styled';
import { useNavigate } from 'react-router-dom'
import { myInfoApi } from '../../api/Api';

const MyInfo = () => {
    const navigate = useNavigate();

    const [db, setData] = useState({
        data: []
    })

    useEffect(() => {
        myInfoApi(setData)
        }, []
    )

    return (
        <Styled.Container>
            <Styled.Wrapper>
                <Styled.Content>

                </Styled.Content>
            </Styled.Wrapper>

            <Styled.Wrapper>
                <Styled.Content>

                </Styled.Content>
            </Styled.Wrapper>

            <Styled.Wrapper>
                <Styled.Content>

                </Styled.Content>
            </Styled.Wrapper>
        </Styled.Container>
    )
}

export default MyInfo;