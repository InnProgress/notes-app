import React from 'react'
import styled from 'styled-components';

import NotesList from './NotesList';
import MainView from './MainView';

const Grid = styled.div`
    display: grid;
    grid-template-columns: 20% 80%;
`;

const MainGrid = () => {
    return (
        <Grid>
            <NotesList />
            <MainView />
        </Grid>
    )
}

export default MainGrid
