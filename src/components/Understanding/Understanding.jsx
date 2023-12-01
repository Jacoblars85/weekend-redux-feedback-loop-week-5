import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Understanding() {

    return (
        <div>
            <h1>How well are you understanding the content?</h1>


            <p>Understanding?</p>

            <input 
            data-testid="input"/>

            <Link to="/support">
                <button data-testid="next" >Next</button>
            </Link>


        </div>
    );
}

export default Understanding;