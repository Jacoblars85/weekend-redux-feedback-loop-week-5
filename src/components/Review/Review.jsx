import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'

function Review() {
    const feeling = useSelector((store) => store.feeling)
    const understanding = useSelector((store) => store.understanding)
    const support = useSelector((store) => store.support)
    const comments = useSelector((store) => store.comments)

    return (
        <div>
            <h1>Review Your Feedback</h1>

            <p>feelings:</p>
            <p>understanding:</p>
            <p>support:</p>
            <p>Comments:</p>

            <Link to="/thankyou">
                <button data-testid="next" >Submit</button>
            </Link>

        </div>
    );
}

export default Review;