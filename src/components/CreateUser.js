import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component {
    state = {
        userName: ""
    }

    onChangeUsername = (e) => {
        this.setState({ userName: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();
        
        const user = {
            userName: this.state.userName
        }

        console.log(user);
        axios.post('http://localhost:5000/users/add', user)
                .then(res => console.log(res.data))
                .catch(err => console.log(err.data));
        this.setState({ userName: "" });
    } 
    
    render() {
        return (
            <div>
                <h1>Create User</h1>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                    <label>Username: </label>
                        <input 
                            type="text"
                            className="form-control"
                            value={this.state.userName}
                            onChange={this.onChangeUsername}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" 
                                value="Create user"
                                className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}