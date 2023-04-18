import React, { Component } from 'react'
import UserInput from './UserInput'

class UserCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
    };

    handleFormSubmit = (id,name, surname, salary) => {
        this.setState(prevState => ({
            users: [...prevState.users, {id : id+1, name: name, surname: surname, salary:salary}]
        }));
    }

    render() {
        return (
            <div >
                <UserInput onSubmit={this.handleFormSubmit} />
                {this.state.users.map((user, index) => (
                    <div style={{width: "40%", margin: "0 auto"}} className='card d-flex align-items-center justify-content-center" style={{ height: "40vh" }' key={index}>
                        <div className='card-body'>
                            <h5 className='card-title'>User Informations</h5>
                            <p className='card-text' >Name: {user.name}</p>
                            <p className='card-text'>Surname: {user.surname}</p>
                            <p className='card-text'>Salary: {user.salary}</p>
                            <p className='card-text'>id: {user.id}</p>


                        </div>
                    </div>
                ))}
            </div>
        )
    }
}
export default UserCard