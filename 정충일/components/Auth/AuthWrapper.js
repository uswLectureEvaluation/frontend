import React from 'react';
import styled from 'styled-components';

const Positioner = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const Contents = styled.div`
    background: white;
    padding: 3rem 10rem;
    height: auto;
    border: 0.01em solid #e0e0e0 ;
    border-radius: 12px;
`;

const AuthWrapper = ({children}) => (
    <Positioner>
        <Contents>
            {children}
        </Contents>
    </Positioner>
);

export default AuthWrapper;
