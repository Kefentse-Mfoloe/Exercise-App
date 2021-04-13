import React, { Component } from 'react';
import ExerciseRow from './ExerciseRow';
import axios from 'axios';

export default class ExerciseList extends Component {
    state = {
        exercises: []
    }
    
    componentDidMount = () => {
        axios.get('http://localhost:5000/exercises/')
                .then(res => {
                    this.setState({exercises: res.data})
                })
                .catch(err => console.log(err.data));
    }

    onDeleteExercise = (id) => {
        axios.delete('http://localhost:5000/exercises/' + id)
                .then(res => {
                    console.log(res.data);
                    this.setState({
                        exercises: this.state.exercises.filter(exercise => exercise._id !== id)
                    });
                })
                .catch(err => console.log(err));
    }

    populateExerciseList = () => {
        return (
            this.state.exercises.map(currentExercise => {
                return <ExerciseRow exercise={currentExercise} 
                                    onDeleteExercise={this.onDeleteExercise}
                                    key={currentExercise._id} />
            })
        )
    }

    render() {
        return (
            <div>
                <h3>Logged Exercise</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Username</th>
                            <th>Description</th>
                            <th>Duration</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.populateExerciseList() }
                    </tbody>
                </table>
            </div>
        )
    }
}