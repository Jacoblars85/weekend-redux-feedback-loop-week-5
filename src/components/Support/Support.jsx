import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Support() {
    const [supportInput, setSupportInput] = useState('');

    return (
        <div>
            <h1>How well are you being supported?</h1>


            <p>Support?</p>

            <input data-testid="input"
            onChange={(e) => setNameInput(e.target.value)}
            value={nameInput}
            type='text'
            placeholder=''/>

            <Link to="/comments">
                <button data-testid="next" >Next</button>
            </Link>


        </div>
    );
}

export default Support;