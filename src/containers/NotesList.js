import React from 'react'
import styled from 'styled-components';

import StyledButton from '../styled_components/StyledButton';


import { connect } from 'react-redux';
import { mapDispatchToProps, mapStateToProps } from '../store';

const Menu = styled.div`
  position: relative;

  background-color: black;
  border-right: 1px solid black;
  height: 92vh;

  transition: 0.4s ease-in-out;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    box-shadow: 0 30px 100px black;
  }
`;

const ListContainer = styled.div`
  overflow-y: auto;
`;

const NotesList = props => {
    return (
        <Menu>
          <ListContainer>
            {props.notes.map((note, i) => 
              <StyledButton onClick={() => props.selectNote(note._id)} active={note._id === props.activeNote} key={i}>{note.title}</StyledButton>
            )}
          </ListContainer>

          <StyledButton special mb="3px" onClick={() => props.selectNote(true)}>New note</StyledButton>
        </Menu>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(NotesList);