import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux'

function Admin() {
    const dispatch = useDispatch()

    const feedback = useSelector((store) => store.feedback)

    useEffect(() => {
        console.log('in useEffect');
        getFeedback();
    }, []);

    const getFeedback = () => {
        axios({
            method: 'GET',
            url: '/feedback'
        })
            .then((response) => {
                const feedbackArray = response.data
                dispatch({
                    type: 'SET_FEEDBACK',
                    payload: feedbackArray
                })
            })
            .catch((error) => {
                console.log('error on GET', error);
            });
    }

    return (
        <div>
            <h1>Feedback Results!</h1>
            
            <table>
                <thead>
                    <tr>
                        <th>Feeling</th>
                        <th>Comprehension</th>
                        <th>Support</th>
                        <th>Comments</th>
                        <th>Delete</th>
                    </tr>
                </thead>

                <tbody>
                    {feedback.map((feed) => {
                        return (
                            <tr key={feed.id}>
                                <td>{feed.feeling}</td>
                                <td>{feed.understanding}</td>
                                <td>{feed.support}</td>
                                <td>"{feed.comments}"</td>
                                <td>
                                    <button>delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

        </div>
    )
}

export default Admin;