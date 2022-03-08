import React, {useEffect, useState} from 'react';

export default function CreateUser() {

    const CREATE_USER_URL = https://exercise-tracker-backend-app.herokuapp.com/user/add;

    const [userName, setUserName] = useState('');
    const [status, setStatus] = useState('');

    useEffect(() => {
        if(status === 'Success') {
            setTimeout(() => {
                setStatus('');
            }, 3000)
        }
    });

    const handleChange = (e) => {
        setUserName(e.target.value);
    }

    const formHandler = (e) => {
        e.preventDefault();

        const user = {userName};
        console.log(user);

        fetch(CREATE_USER_URL, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(user)
        }).then(res => res.json())
          .then(data => console.log(data))
          .catch(err => console.log(err));

        setUserName('');
        setStatus('Success');
    }

    return (
        <div className='container-lg'>
            <div className='text-center'>
                <h2 className='text-muted'>Create User</h2>
            </div>
            <div className='row justify-content-center align-items-center'>
                <div className='col-md-8 col-lg-6 col-sm-10'>
                {status && <div className='mx-auto px-3 mb-3 mt-3 py-1 text-light bg-success text-center rounded'>
                                <p>user created </p>
                            </div>}
                    <form onSubmit={formHandler}>
                        <label htmlFor='username' className='form-label text-muted'>Username:</label>
                        <input className='form-control' value={userName} onChange={handleChange} required type='text' placeholder='e.g John'></input>
                        <div className='mt-4 text-center'>
                            <button type='submit' className='btn btn-primary' style={{width:'100px'}}>Create</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
