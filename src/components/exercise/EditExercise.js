import React, {useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';

export default function CreateExercise() {

    const {id} = useParams();
 
    const GET_EXERCISE_URL = process.env.REACT_APP_GET_EXERCISE;
    const EDIT_EXERCISE_URL = process.env.REACT_APP_EDIT_EXERCISE;

    const [values, setValues] = useState(() => ({
        userName: "",
        description: "",
        duration: "",
        date: ""
    }));

    useEffect(() => {
            fetch(GET_EXERCISE_URL+id, {
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
              .catch(err => {console.log(err)});
        }, []);

    const handleChange = (e) => {
        setValues((values) => ({
            ...values,
            [e.target.name]: e.target.value
        }));
    }

    const formHandler = (e) => {
        e.preventDefault();

        const exercise = {
            userName: values.userName,
            description: values.description,
            duration: values.duration,
            date: values.date
        }

        console.log(exercise);
        fetch(EDIT_EXERCISE_URL+id, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(exercise)
        }).then(res => res.json())
          .then(data => console.log(data))
          .catch(err => console.log(err));

          window.location = '/';

        // setValues({
        //     userName: "",
        //     description: "",
        //     duration: "",
        //     date: ""
        // });
    }

    return (
        <div className='container-lg'>
            <div className='text-center '>
                <h2 className='text-muted'>CreateExercise</h2>
            </div>
            <div className='row justify-content-center align-items-center'>
                <div className='col-md-8 col-lg-6 col-sm-10'>
                    <form onSubmit={formHandler}>
                        <label htmlFor='username' className='form-label text-muted'>Username:</label>
                        <input id='username' name='userName' value={values.userName} onChange={handleChange} className='form-control mb-2' type='text' required></input>
                        <label htmlFor='description' className='form-label text-muted'>Description:</label>
                        <input id='description' name='description' value={values.description} onChange={handleChange} className='form-control mb-2' type='text' required></input>
                        <label htmlFor='duration' className='form-label text-muted'>Duration (in minutes):</label>
                        <input id='duration' name='duration' value={values.duration} onChange={handleChange} className='form-control mb-2' type='number' required></input>
                        <label htmlFor='date' className='form-label text-muted'>Duration (in minutes):</label>
                        <input id='date' name='date' value={values.date.substring(0,10)} onChange={handleChange} className='form-control mb-2' type='date' required></input>
                        <div className="mt-4 text-center">
                            <button type="submit" className="btn btn-primary" style={{ width: '100px' }}>Edit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}