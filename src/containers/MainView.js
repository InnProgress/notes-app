import React from 'react';

import { connect } from 'react-redux';

import { mapStateToProps } from '../store';
import Form from '../components/Form';

const MainView = ({ activeNote }) => {
    return (
        <div className="main">
            {activeNote ? <Form id={activeNote} /> : 
                <div>
                    <h2>You should select a note or create new one</h2>
                </div>}
        </div>
    )
}

export default connect(mapStateToProps)(MainView)
