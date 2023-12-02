import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import Header from '../Header/Header';

function Feeling() {
    const [feelingInput, setFeelingInput] = useState('');

    const dispatch = useDispatch()

    const history = useHistory()

    const submitFeelings = (e) => {
        e.preventDefault()

        dispatch({
            type: 'SET_FEELING',
            payload: feelingInput
        })
        history.push("/understanding")
    }

    return (
        <div>
            <Header />

            <h1>How are you feeling today?</h1>


            <p>Feeling?</p>

            <form onSubmit={submitFeelings}>

                <input
                    data-testid="input"
                    onChange={(e) => setFeelingInput(e.target.value)}
                    value={feelingInput}
                    type='text'
                    placeholder='1-5' />


                <button data-testid="next" >Next</button>


            </form>


        </div>
    );
}

export default Feeling;