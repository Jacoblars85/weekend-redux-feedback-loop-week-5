import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Feeling() {

    return (
        <div>
            <h1>How are you feeling today?</h1>


            <p>Feeling?</p>
            <input />

            <Link to="/understanding">
                <button>Next</button>
            </Link>


        </div>
    );
}

export default Feeling;