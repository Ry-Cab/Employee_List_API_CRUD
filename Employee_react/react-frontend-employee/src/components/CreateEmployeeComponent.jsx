import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EmployeeService from '../services/EmployeeService';

class CreateEmployeeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fisrtName:'',
            lastName:'',
            emailid:''
        }
        this.changeFisrtNameHandler = this.changeFisrtNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailIdHandler = this.changeEmailIdHandler.bind(this);
        this.saveEmployee = this.saveEmployee.bind(this);
    }

    saveEmployee = (e) => {
        e.preventDefault();
        let employee = {fisrtName: this.state.fisrtName, lastName: this.state.lastName, emailid: this.state.emailid};
        console.log("employee => " + JSON.stringify(employee));

        EmployeeService.createEmployee(employee).then(res => {
            this.props.history.push("/employees");
        });
    }

    changeFisrtNameHandler=(event)=>{
        this.setState({fisrtName: event.target.value});
    }
    changeLastNameHandler=(event)=>{
        this.setState({lastName: event.target.value});
    }
    changeEmailIdHandler=(event)=>{
        this.setState({emailid: event.target.value});
    }

    cancel(){
        this.props.history.push("/employees");
    }

    render() {
        return (
            <div>
                <div className="container" style={{marginTop: "30px"}}>
                    <div className="row">
                        <div className="card col-md-6 offset-md-3">
                         <h1 className="text-center">Add Employee</h1> 
                         <div className="card-body">
                            <form>
                            <div className="form-group">
                            <label>First Name</label>  
                            <input type="text" className="form-control" placeholder='first name' name='fisrtName' value={this.state.fisrtName} onChange={this.changeFisrtNameHandler} />
                            </div>
                            <div className="form-group">
                            <label>Last Name</label>  
                            <input type="text" className="form-control" placeholder='last name' name='lastName' value={this.state.lastName} onChange={this.changeLastNameHandler} />
                            </div> 
                            <div className="form-group">
                            <label>E-mail Id</label>  
                            <input type="text" className="form-control" placeholder='e-mail id' name='emailid' value={this.state.emailid} onChange={this.changeEmailIdHandler} />
                            </div>  

                           <div style={{marginTop: "15px"}}>
                               <button className="btn btn-success" onClick={this.saveEmployee}>Save</button>
                               <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                           </div>
                            </form>    
                        </div>  
                        </div>

                    </div>
                </div>
            </div>
        );
    }
};

export default CreateEmployeeComponent;