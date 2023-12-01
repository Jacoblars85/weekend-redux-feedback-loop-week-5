import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';

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
            <h1>How are you feeling today?</h1>


            <p>Feeling?</p>

            <form onSubmit={submitFeelings}>

            <input
                data-testid="input"
                onChange={(e) => setFeelingInput(e.target.value)}
                value={feelingInput}
                type='text'
                placeholder='' />

            
                <button data-testid="next" >Next</button>
            

            </form>


        </div>
    );
}

export default Feeling;