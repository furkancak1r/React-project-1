import React, { Component } from 'react'

class UserInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id:0,
      name: "",
      surname: "",
      salary: ""
    };
  };
  render() {
    return (
      <div className="d-flex align-items-center justify-content-center" style={{ height: "40vh" }}>
        <form className="col-5">
          <div className="form-group">
            <input type="text" className="form-control className" placeholder="Name" value={this.state.name} onChange={(event) => this.setState({ name: event.target.value })} />
          </div>
          <div className="form-group">
            <input type="text" className="form-control classSurname" placeholder="Surname" value={this.state.surname} onChange={(event => this.setState({ surname: event.target.value }))} />
          </div>
          <div className="form-group">
            <input type="number" className="form-control className" placeholder="Salary" value={this.state.salary} onChange={(event) => {
              const value = event.target.value;
              if (!isNaN(value)) {
                this.setState({ salary: value });
              }
            }} />          </div>
          <div className=" d-flex justify-content-center col-11">
            <button type="submit" className="btn btn-primary" onClick={(event) => {
              event.preventDefault();
              this.props.onSubmit(this.state.id,this.state.name, this.state.surname, this.state.salary);
            }}>Submit</button>
          </div>
        </form>
      </div>)
  }
}
export default UserInput