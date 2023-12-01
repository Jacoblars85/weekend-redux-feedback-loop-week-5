import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'

function Feeling() {
    const [feelingInput, setFeelingInput] = useState('');


    return (
        <div>
            <h1>How are you feeling today?</h1>


            <p>Feeling?</p>

            <input
                data-testid="input"
                onChange={(e) => setFeelingInput(e.target.value)}
                value={feelingInput}
                type='text'
                placeholder='' />

            <Link to="/understanding">
                <button data-testid="next" >Next</button>
            </Link>


        </div>
    );
}

export default Feeling;