import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const ExerciseRow = (props) => {
    return(
        <tr>
            <td>{ props.exercise.userName }</td>
            <td>{ props.exercise.description }</td>
            <td>{ props.exercise.duration }</td>
            <td>{ props.exercise.date.substring(0, 10) }</td>
            <td>
                <Link to={"/editExercise/" + props.exercise._id}>Edit</Link>
                | <a href="#" onClick={() => props.onDeleteExercise(props.exercise._id)}>Delete</a>
            </td>
        </tr>
    )
}

export default ExerciseRow;