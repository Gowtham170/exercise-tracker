import React, {useState, useEffect} from 'react';

export default function CreateExercise() {

    const GET_USER_URL = https://exercise-tracker-backend-app.herokuapp.com/user/;
    const CREATE_EXERCISE_URL = https://exercise-tracker-backend-app.herokuapp.com/exercise/add;

    const [users, setUsers] = useState([]);

    const [values, setValues] = useState(() => ({
        userName: "",
        description: "",
        duration: "",
        date: ""
    }));

    const [status, setStatus] = useState('');

    useEffect(() => {
        fetch(GET_USER_URL, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'GET',
            body: JSON.stringify()
        }).then(res => res.json())
          .then(data => {
            console.log(data);
            setUsers(data);
          })
          .catch(err => {console.log(err)});
    }, [])

    useEffect(() => {

        if(status === 'Success') {
            setTimeout(() => {
                setStatus('');
            }, 3000)
        }
    }, [status])

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

        fetch(CREATE_EXERCISE_URL, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(exercise)
        }).then(res => res.json())
          .then(data => console.log(data))
          .catch(err => console.log(err));


        setValues({
            userName: "",
            description: "",
            duration: "",
            date: ""
        });
        setStatus('Success');
    }

    return (
        <div className='container-lg'>
            <div className='text-center '>
                <h2 className='text-muted'>CreateExercise</h2>
            </div>
            <div className='row justify-content-center align-items-center'>
                <div className='col-md-8 col-lg-6 col-sm-10'>
                    {status &&  <div className='mx-auto px-3 mb-3 mt-3 py-1 text-light bg-success text-center rounded'>
                                    <p>exercise log created </p>
                                </div>}
                    <form onSubmit={formHandler}>
                        <label htmlFor='username' className='form-label text-muted'>Username:</label>
                        <select id='username' name='userName' value={values.userName} onChange={handleChange} className='form-select mb-2'>
                            {users.map((user) => {
                                return <option key={user.userName}
                                               value={user.userName}
                                               >
                                            {user.userName}
                                        </option>
                            })}
                        </select>
                        <label htmlFor='description' className='form-label text-muted'>Description:</label>
                        <input id='description' name='description' value={values.description} onChange={handleChange} className='form-control mb-2' type='text' required placeholder='e.g running'></input>
                        <label htmlFor='duration' className='form-label text-muted'>Duration (in minutes):</label>
                        <input id='duration' name='duration' value={values.duration} onChange={handleChange} className='form-control mb-2' type='number' required placeholder='e.g 30'></input>
                        <label htmlFor='date' className='form-label text-muted'>Duration (in minutes):</label>
                        <input id='date' name='date' value={values.date} onChange={handleChange} className='form-control mb-2' type='date' required></input>
                        <div className="mt-4 text-center">
                            <button type="submit" className="btn btn-primary" style={{ width: '100px' }}>Create</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
