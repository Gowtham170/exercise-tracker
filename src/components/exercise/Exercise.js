import React from 'react';
import { Link } from 'react-router-dom'; 

export default function Exercise(props) {
    return (
        <tr>
            <td>{props.exercise.userName}</td>
            <td>{props.exercise.description}</td>
            <td>{props.exercise.duration}</td>
            <td>{props.exercise.date.substring(0, 10)}</td>
            <td>
                <Link to={"/edit/"+props.exercise._id}  className='btn btn-sm'> <i className="bi bi-pencil text-primary"></i></Link>|<a className='btn btn-sm' href="#" onClick={() => { props.deleteExercise(props.exercise._id) }}> <i className="bi bi-trash text-danger"></i></a>
            </td>
        </tr>
    );
}
