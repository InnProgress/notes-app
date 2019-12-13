import React from 'react'

import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../store';

import InputBlock from '../styled_components/InputBlock';
import StyledButton from '../styled_components/StyledButton';

const Form = ({ note, addNoteAsync, updateNoteAsync, removeNoteAsync }) => {

    let titleInput, bodyInput;

    const onSubmit = e => {
        e.preventDefault();
        
        if(!note) {
            addNoteAsync({
                title: titleInput.value,
                body: bodyInput.value
            });
        } else {
            updateNoteAsync({
                _id: note._id,
                title: titleInput.value,
                body: bodyInput.value
            });
        }
    };

    return (
        <div key={note && note._id}>
            {note && 
                <p>Created at: {new Date(note.date).toLocaleString('lt-LT')}</p>
            }
            
            <form onSubmit={onSubmit}>
                <InputBlock>
                    <label htmlFor="title">Title:</label> 
                    <input type = "text"
                    defaultValue = {
                        note && note.title
                    }
                    ref={input => titleInput = input}
                    required />
                </InputBlock>

                <InputBlock>
                    <label htmlFor="body">Body:</label>
                    <textarea name = "body"
                    defaultValue = {
                        note && note.body
                    }
                    ref={input => bodyInput = input}
                    required></textarea>
                </InputBlock>

                <InputBlock>
                    <StyledButton special small>{note ? 'Update' : 'Create'}</StyledButton>
                </InputBlock>
            </form>

            {note && <StyledButton onClick={() => removeNoteAsync(note._id)} danger small>Delete</StyledButton>}
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)
