import React from 'react';
import styled from 'styled-components';

const StyleButton = styled.button`
        padding: 1rem 2rem;
        background-color: ${props => props.theme.primaryColor};
        color: ${props => props.theme.whiteColor};
        font-size: 1.3rem;
        font-weight: 500;
        border: none;
        border-radius: 20px;
        cursor: pointer;
        @media screen and (max-width: 767px) {
            padding: 1rem 1rem;
        }
        @media screen and (max-width: 479px) {
            padding: 1rem 1rem;
            font-size: 1rem;
        }
`
const Button = ({children}) => {
    return (
        <StyleButton >
            {children}
        </StyleButton>
    );
};

export default Button;