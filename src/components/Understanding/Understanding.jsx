import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import Header from '../Header/Header';

function Understanding() {
    const [understandingInput, setUnderstandingInput] = useState('');

    const dispatch = useDispatch()

    const history = useHistory()

    const submitUnderstanding = (e) => {
        e.preventDefault()

        dispatch({
            type: 'SET_UNDERSTANDING',
            payload: understandingInput
        })

        history.push("/support")

    }

    return (
        <div>
            <Header />
            
            <h1>How well are you understanding the content?</h1>

            <p>Understanding?</p>

            <form onSubmit={submitUnderstanding}>

                <input
                    data-testid="input"
                    onChange={(e) => setUnderstandingInput(e.target.value)}
                    value={understandingInput}
                    type='text'
                    placeholder='1-5' />


                <button data-testid="next" >Next</button>

            </form>
        </div>
    );
}

export default Understanding;