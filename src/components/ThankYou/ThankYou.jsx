import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ThankYou() {

    return (
        <div>
            <h1>Feedback!</h1>

            <h1>Thank You!</h1>

            <Link to="/">
                <button data-testid="next" >Leave New Feedback</button>
            </Link>


        </div>
    );
}

export default ThankYou;