import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';

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
            <h1>How well are you being supported?</h1>


            <p>Support?</p>

            <form onSubmit={submitSupport}>

            <input data-testid="input"
            onChange={(e) => setSupportInput(e.target.value)}
            value={supportInput}
            type='text'
            placeholder=''/>

     
                <button data-testid="next" >Next</button>
            

            </form>


        </div>
    );
}

export default Support;