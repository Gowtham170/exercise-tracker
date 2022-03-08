import React,{useEffect, useState} from 'react';

import Exercise from './Exercise';

export default function ExerciseList() {

    const GET_EXERCISE_URL = https://exercise-tracker-backend-app.herokuapp.com/exercise/;
    const DELETE_EXERCISE_URL = https://exercise-tracker-backend-app.herokuapp.com/exercise/;

    const [values, setValues] = useState([]);

    useEffect(() => {
        fetch(GET_EXERCISE_URL, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'GET',
            body: JSON.stringify()
        }).then(res => res.json())
            .then(data => {
                console.log(data);
                setValues(data);
            })
            .catch(err => console.log(err));
    }, [])

    const deleteExercise = (id) => {
        fetch((DELETE_EXERCISE_URL+id), {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'DELETE',
            body: JSON.stringify()
        }).then(res => res.json())
          .then(data => console.log(data))
          .catch(err => console.log(err));

          window.location.reload(false);
    };

    return (
        <div className='container-lg'>
            <div className='text-center'>
                <h2 className='text-muted'>Exercise Log</h2>
            </div>
            <div className='row justify-content-center align-items-center'>
                <div className='col-12 col-md-10 col-lg-9 col-sm-12 text-center'>
                    <table className='table table-hover my-3'>
                        <thead>
                            <tr className='table-active'>
                                <th className='text-success' scope='col'>Username</th>
                                <th className='text-success' scope='col'>Description</th>
                                <th className='text-success' scope='col'>Duration</th>
                                <th className='text-success' scope='col'>Date</th>
                                <th className='text-success' scope='col'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {values.map((value) => {
                                return <Exercise exercise = {value} deleteExercise={deleteExercise} key={value._id} />
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
