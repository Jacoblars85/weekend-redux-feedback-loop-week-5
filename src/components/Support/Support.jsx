import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import Header from '../Header/Header';

function Support() {
    const [supportInput, setSupportInput] = useState('');

    const dispatch = useDispatch()

    const history = useHistory()

    const submitSupport = (e) => {
        e.preventDefault()

        dispatch({
            type: 'SET_SUPPORT',
            payload: supportInput
        })

        history.push("/comments")

    }

    return (
        <div>
            <Header />
            
            <h1>How well are you being supported?</h1>

            <p>Support?</p>

            <form onSubmit={submitSupport}>

                <input data-testid="input"
                    onChange={(e) => setSupportInput(e.target.value)}
                    value={supportInput}
                    type='text'
                    placeholder='1-5' />

                <button data-testid="next" >Next</button>

            </form>
        </div>
    );
}

export default Support;