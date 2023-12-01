import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Understanding() {

    return (
        <div>
            <h1>How well are you understanding the content?</h1>


            <p>Understanding?</p>
            <input />

            <Link to="/support">
                <button>Next</button>
            </Link>


        </div>
    );
}

export default Understanding;