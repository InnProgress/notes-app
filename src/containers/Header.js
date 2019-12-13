import React from 'react'
import styled from 'styled-components';

const StyledHeader = styled.header`
    position: relative;
    z-index: 1;
    background-color: black;
    padding: 15px;
    border-bottom: 1px solid white;
    h1 {
        margin: 0;
        font-size: 1.15em;
    }
`;

const Header = () => {
    return (
        <StyledHeader>
            <h1>Notes</h1>
        </StyledHeader>
    )
}

export default Header
