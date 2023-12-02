import React from 'react';
import { Link } from 'react-router-dom';

function ThankYou() {

    return (
        <div>
            <h1 className='thankHeader'>Feedback!</h1>

            <div className='thankBody'>
            <h1>Thank You!</h1>

            <Link to="/">
                <button data-testid="next" className='thankButton'>Leave New Feedback</button>
            </Link>
            </div>
        </div>
    );
}

export default ThankYou;