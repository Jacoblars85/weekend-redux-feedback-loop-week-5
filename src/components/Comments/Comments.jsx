import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Comments() {

    return (
        <div>
            <h1>Any comments you want to leave?</h1>


            <p>Comments</p>
            <input />


            <Link to="/">
                <button>Next</button>
            </Link>


        </div>
    );
}

export default Comments;