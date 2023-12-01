import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'

function Understanding() {
    const [understandingInput, setUnderstandingInput] = useState('');

    return (
        <div>
            <h1>How well are you understanding the content?</h1>


            <p>Understanding?</p>

            <input
                data-testid="input"
                onChange={(e) => setUnderstandingInput(e.target.value)}
                value={understandingInput}
                type='text'
                placeholder='' />

            <Link to="/support">
                <button data-testid="next" >Next</button>
            </Link>


        </div>
    );
}

export default Understanding;