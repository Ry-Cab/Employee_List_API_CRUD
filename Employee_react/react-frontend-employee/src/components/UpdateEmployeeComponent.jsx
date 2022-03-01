import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class UpdateEmployeeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            fisrtName:'',
            lastName:'',
            emailid:''
        }
        this.changeFisrtNameHandler = this.changeFisrtNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.updateEmployee = this.updateEmployee.bind(this);
    }

    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then((res) => {
            let employee = res.data;
            this.setState({fisrtName:  employee.fisrtName, lastName: employee.lastName, emailid: employee.emailid})
        })
    }

    updateEmployee = (e) => {
        e.preventDefault();
        let employee = {fisrtName: this.state.fisrtName, lastName: this.state.lastName, emailid: this.state.emailid};
        console.log("employee => " + JSON.stringify(employee));

        EmployeeService.updateEmployee(employee, this.state.id).then( res => {
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
                <h1>Employee Form</h1>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3">
                         <h1 className="text-center">Update Employee</h1> 
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
                           <button className="btn btn-success" onClick={this.updateEmployee}>Update</button>
                           <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                            </form>    
                        </div>  
                        </div>

                    </div>
                </div>
            </div>
        );
    }
};

export default UpdateEmployeeComponent;