import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'

function Comments() {
    const [commentsInput, setCommentsInput] = useState('');



    return (
        <div>
            <h1>Any comments you want to leave?</h1>


            <p>Comments</p>

            <input
                data-testid="input"
                onChange={(e) => setCommentsInput(e.target.value)}
                value={commentsInput}
                type='text'
                placeholder='' />


            <Link to="/review">
                <button data-testid="next" >Next</button>
            </Link>


        </div>
    );
}

export default Comments;