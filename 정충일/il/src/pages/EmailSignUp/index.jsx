import React, { useState, useCallback } from 'react';
import Button from '../../components/Button'
import * as Styled from './styled';
import { Positioner } from '../../components/Wrapper/styled'

const EmailSignUp = () => {
    return (
        <Positioner>
            <Styled.Wrapper>
                <Styled.Title>회원가입</Styled.Title>
            </Styled.Wrapper>
        </Positioner>
    );
};