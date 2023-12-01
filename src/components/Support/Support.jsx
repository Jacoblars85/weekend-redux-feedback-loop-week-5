import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Support() {

    return (
        <div>
            <h1>How well are you being supported?</h1>


            <p>Support?</p>
            <input />

            <Link to="/comments">
                <button>Next</button>
            </Link>


        </div>
    );
}

export default Support;