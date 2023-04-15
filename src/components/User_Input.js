import React, { Component } from 'react'

 class User_Input extends Component {
    constructor(props){
        super(props);
        this.state ={
            name:"",
            surname:""
        };
    };
  render() {
    return (
<div className="d-flex align-items-center justify-content-center" style={{ height: "100vh" }}>
        <form className="col-5">
          <div className="form-group">
            <input type="text" className="form-control className" placeholder="Name" value={this.state.name} onChange={(event)=>this.setState({name:event.target.value})} />
          </div>
          <div className="form-group">
            <input type="text" className="form-control classSurname" placeholder="Surname" value={this.state.surname} onChange={(event=>this.setState({surname:event.target.value}))}  />
          </div>
          <div className=" d-flex justify-content-center col-11">
            <button type="submit" className="btn btn-primary" onClick={()=>alert(`Name: ${this.state.name}, Surname: ${this.state.surname}`)}>Submit</button>
          </div>
        </form>
      </div>    )
  }
}
export default User_Input