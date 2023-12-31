import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import Header from '../Header/Header';

function Comments() {
    const [commentsInput, setCommentsInput] = useState('');

    const dispatch = useDispatch()

    const history = useHistory()

    const submitComments = (e) => {
        e.preventDefault()

        dispatch({
            type: 'SET_COMMENTS',
            payload: commentsInput
        })

        history.push("/review")

    }

    return (
        <div>
            <Header />
            <h1>Any comments you want to leave?</h1>

            <p>Comments</p>

            <form onSubmit={submitComments}>

                <input
                    data-testid="input"
                    onChange={(e) => setCommentsInput(e.target.value)}
                    value={commentsInput}
                    type='text'
                    placeholder='text' />

                <button data-testid="next" >Next</button>

            </form>
        </div>
    );
}

export default Comments;