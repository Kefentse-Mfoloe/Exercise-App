import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';

export default class CreateExercise extends Component {
    state = {
        userName: "",
        description: "",
        duration: 0,
        date: new Date(),
        users: []
    }

    componentDidMount = () => {
        axios.get('http://localhost:5000/users/')
                .then(res => {
                    if(res.data.length > 0) {
                        this.setState({
                            users: res.data.map(user => user.userName),
                            userName: res.data[0].userName
                        });
                    }
                })
                .catch(err => console.log(err.data));
        
    }

    onChangeUserName = (e) => {
        this.setState({userName: e.target.value});
    }

    onChangeDescription = (e) => {
        this.setState({description: e.target.value});
    }

    onChangeDuration = (e) => {
        this.setState({duration: e.target.value});
    }

    onChangeDate = (date) => {
        this.setState({date: date});
    }

    onSubmit = (e) => {
        e.preventDefault();

        const exercise = {
            userName: this.state.userName,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date
        }

        console.log(exercise);
        axios.post('http://localhost:5000/exercises/add', exercise)
                .then(res => console.log(res.data))
                .catch(err => console.log(err.data));
        window.location = '/';
    }
    
    render() {
        let users = this.state.users.map((user) => (
                            <option key={user}
                                value={user}>
                                {user}
                            </option>
                        ))

        return (
            <div>
                <h1>Create Exercise</h1>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username: </label>
                        <select
                            required
                            ref="userInput"
                            className="form-control"
                            value={this.state.userName}
                            onChange={this.onChangeUserName}>
                            { users }
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Description: </label>
                        <input 
                            type="text"
                            className="form-control"
                            value={this.state.description}
                            onChange={this.onChangeDescription}
                        />
                    </div>
                    <div className="form-group">
                        <label>Duration: </label>
                        <input 
                            type="text"
                            className="form-control"
                            value={this.state.duration}
                            onChange={this.onChangeDuration}
                        />
                    </div>
                    <div className="form-group">
                        <label>Date: </label>
                        <DatePicker 
                            selected={this.state.date}
                            onChange={this.onChangeDate}
                        />
                    </div>

                    <div className="form-group">
                        <input type="submit" 
                                value="Create exercise log"
                                className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}