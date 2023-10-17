import React, { Component } from 'react';
import EmployeeService from '../../services/EmployeeService';
class EmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            departments: [],
            deptId: '', //this.props.match.param.deptId,
            desigId: '',
            roleId: '',
            empFirstName: '',
            empMiddleName: '',
            empLastName: '',
            empDob: '',
            empPhoto: '',
            empMobileNo: '',
            empEmerMobileNo: '',

            emailId: '',
            tempAddress: '',
            permAddress: '',
            empGender: '',
            empBloodgroup: '',
            remark: '',
            statusCd: '',
            employeeId: ''
        }

        this.changeDeptIdHandler = this.changeDeptIdHandler.bind(this);
        this.changeDesigIdHandler = this.changeDesigIdHandler.bind(this);
        this.changeRoleIdHandler = this.changeRoleIdHandler.bind(this);
        this.changeEmpFirstNameHandler = this.changeEmpFirstNameHandler.bind(this);
        this.changeEmpMiddleNameHandler = this.changeEmpMiddleNameHandler.bind(this);
        this.changeEmpLastNameHandler = this.changeEmpLastNameHandler.bind(this);
        this.changeEmpDobHandler = this.changeEmpDobHandler.bind(this);
        this.changeEmpPhotoHandler = this.changeEmpPhotoHandler.bind(this);
        this.changeEmpMobileNoHandler = this.changeEmpMobileNoHandler.bind(this);
        this.changeEmpEmerMobileNoHandler = this.changeEmpEmerMobileNoHandler.bind(this);

        this.changeEmailIdHandler = this.changeEmailIdHandler.bind(this);
        this.changeTempAddressHandler = this.changeTempAddressHandler.bind(this);
        this.changePermAddressHandler = this.changePermAddressHandler.bind(this);
        this.changeEmpGenderHandler = this.changeEmpGenderHandler.bind(this);
        this.changeEmpBloodgroupHandler = this.changeEmpBloodgroupHandler.bind(this);
        this.changeRemarkHandler = this.changeRemarkHandler.bind(this);



        this.saveEmployeeDetails = this.saveEmployeeDetails.bind(this);
        this.updateDepartment = this.updateDepartment.bind(this);
        this.deleteDepartment = this.deleteDepartment.bind(this);

    }

    changeDeptIdHandler = (event) => {
        this.setState({ deptId: event.target.value });
    }
    changeDesigIdHandler = (event) => {
        this.setState({ desigId: event.target.value });
    }
    changeRoleIdHandler = (event) => {
        this.setState({ roleId: event.target.value });
    }
    changeEmpFirstNameHandler = (event) => {
        this.setState({ empFirstName: event.target.value });
    }
    changeEmpMiddleNameHandler = (event) => {
        this.setState({ empMiddleName: event.target.value });
    }
    changeEmpLastNameHandler = (event) => {
        this.setState({ empLastName: event.target.value });
    }
    changeEmpDobHandler = (event) => {
        this.setState({ empDob: event.target.value });
    }

    changeEmpPhotoHandler = (event) => {
        this.setState({ empPhoto: event.target.value });
    }
    changeEmpMobileNoHandler = (event) => {
        this.setState({ empMobileNo: event.target.value });
    }

    changeEmpEmerMobileNoHandler = (event) => {
        this.setState({ empEmerMobileNo: event.target.value });
    }
    
    changeEmailIdHandler = (event) => {
        this.setState({ emailId: event.target.value });
    }

    changeTempAddressHandler = (event) => {
        this.setState({ tempAddress: event.target.value });
    }
    changePermAddressHandler = (event) => {
        this.setState({ permAddress: event.target.value });
    }
    changeEmpGenderHandler = (event) => {
        this.setState({ empGender: event.target.value });
    }
    changeEmpBloodgroupHandler = (event) => {
        this.setState({ empBloodgroup: event.target.value });
    }

    changeRemarkHandler = (event) => {
        this.setState({ remark: event.target.value });
    }
    componentDidMount() {
        EmployeeService.getDpartmentDetails().then((res) => {
            this.setState({ departments: res.data });
        });

        /*  EmployeeService.getDepartmentById(this.state.deptId).then((res) => {
              let department = res.data;
              console.log("data", department)
              this.setState({
                  deptName: department.deptName,
                  remark: department.remark
              });
          });*/
    }

    updateDepartment = (e) => {
        e.preventDefault();
        let departmentData = { deptId: this.state.deptId, deptName: this.state.deptName, remark: this.state.remark, statusCd: 'A' };
        console.log('employee=>' + JSON.stringify(departmentData));
        EmployeeService.updateDepartmentDetails(departmentData).then(res => {
            console.log("Department updated");
        }
        );
        // window.location.reload(); 
    }

    deleteDepartment = (e) => {
        let departmentData = { deptId: this.state.deptId, deptName: this.state.deptName, remark: this.state.remark, statusCd: 'I' };
        console.log('employee=>' + JSON.stringify(departmentData));
        EmployeeService.updateDepartmentDetails(departmentData).then(res => {
            console.log("Department updated");
        }
        );
        // window.location.reload(); 
    }

    saveEmployeeDetails = (e) => {
        e.preventDefault()
        let employee = {
            deptName: this.state.deptName,
            deptId: this.state.deptId,
            desigId: this.state.desigId,
            // roleId: this.state.roleId, 
            empFirstName: this.state.empFirstName,
            empMiddleName: this.state.empMiddleName,
            empLastName: this.state.empLastName,
            empDob: this.state.empDob,
            empPhoto: this.state.empPhoto,
            empMobileNo: this.state.empMobileNo,
            empEmerMobileNo: this.state.empEmerMobileNo,

            emailId: this.state.emailId,
            tempAddress: this.state.tempAddress,
            permAddress: this.state.permAddress,
            empGender: this.state.empGender,
            empBloodgroup: this.state.empBloodgroup,
            remark: this.state.remark,
            statusCd: 'A',
            employeeId: 'kpp-admin'
        };


        EmployeeService.saveEmployeeDetails(employee).then(res => {
            console.log("Employee added");
        }
        );
        // window.location.reload(); 
    }


    render() {
        return (

            <div className="row">
                <h2 className="text-center">Employee List</h2>
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    <div className="row">
                        <div className="col-sm-8">
                            <form className="form-horizontal" action="/action_page.php">
                                <div className="form-group">
                                    <label className="control-label col-sm-3" htmlFor="email">Department Search:</label>
                                    <div className="col-sm-4">
                                        <input type="text" className="form-control" id="deptName" placeholder="Enter Employee Name" />
                                    </div>
                                    <button type="submit" className="btn btn-primary">Search</button>
                                </div>
                            </form>
                        </div>
                        <div className="col-sm-4"><button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">Add New Employee</button></div>
                    </div>
                    <div className="row">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Sr No</th>
                                    <th>Department Name</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.departments.map(
                                        department =>
                                            <tr key={department.deptId}>
                                                <td>1</td>
                                                <td>{department.deptName}</td>
                                                <td> <button type="submit" className="btn btn-info" data-toggle="modal" data-target="#myModal"
                                                    onClick={() => this.updateDepartment(department.deptId)}>Update</button>
                                                    <button type="submit" className="btn col-sm-offset-1 btn-info" onClick={() => this.deleteDepartment(department.deptId)}>Delete</button>
                                                    <button type="submit" className="btn col-sm-offset-1 btn-danger" onClick={() => this.deleteDepartment(department.deptId)}>View</button></td>

                                            </tr>
                                    )

                                }
                            </tbody>
                        </table>
                    </div>

                </div>
                <div className="col-md-2"></div>

                <div className="modal fade" id="myModal" role="dialog">
                    <div className="modal-dialog modal-lg">


                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                <h4 className="modal-title">Add Employee</h4>
                            </div>
                            <div className="modal-body">
                                <form className="form-horizontal" action="/action_page.php">
                                    <div className="form-group">
                                        <div className="row">
                                            <label className="control-label col-sm-2 col-sm-offset-1" htmlFor="empFirstName">Employee Name:</label>
                                            <div className="col-sm-3">
                                                <input type="text" className="form-control" id="empFirstName" placeholder="Enter First Name here" value={this.state.empFirstName} onChange={this.changeEmpFirstNameHandler} />
                                            </div>

                                            <div className="col-sm-3">
                                                <input type="text" className="form-control" id="empMiddleName" placeholder="Enter Middle Name here" value={this.state.empMiddleName} onChange={this.changeEmpMiddleNameHandler} />
                                            </div>

                                            <div className="col-sm-3">
                                                <input type="text" className="form-control" id="empLastName" placeholder="Enter Last Name here" value={this.state.empLastName} onChange={this.changeEmpLastNameHandler} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <div className="row">
                                            <label className="control-label col-sm-2 col-sm-offset-1" htmlFor="empDob">Date Of Birth:</label>
                                            <div className="col-sm-3">
                                            <input type="text" className="form-control" id="empDob" value={this.state.empDob} onChange={this.changeEmpDobHandler} />
                                               
                                            </div>

                                            <label className="control-label col-sm-2" htmlFor="empPhoto">Upload Photo:</label>

                                            <div className="col-sm-3">
                                                <input type="text"  className="form-control" id="empPhoto" value={this.state.empPhoto} onChange={this.changeEmpPhotoHandler} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <div className="row">
                                            <label className="control-label col-sm-3" htmlFor="deptId">Department Name:</label>
                                            <div className="col-sm-3">

                                                <select className="form-control" id="deptId" onChange={this.changeDeptIdHandler}>

                                                    <option>--Select Department--</option>
                                                    {
                                                        this.state.departments.map(
                                                            department =>
                                                                <option key={department.deptId} value={department.deptId}>{department.deptName}</option>
                                                        )
                                                    };

                                                </select>



                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <div className="row">
                                            <label className="control-label col-sm-3" htmlFor="desigId"> Designation Name:</label>
                                            <div className="col-sm-3">

                                                <select className="form-control" id="desigId" onChange={this.changeDesigIdHandler}>
                                                    <option>--Select Department--</option>
                                                    {
                                                        this.state.departments.map(
                                                            department =>
                                                                <option key={department.deptId} value={department.deptId}>{department.deptName}</option>
                                                        )
                                                    };
                                                </select>

                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <div className="row">
                                            <label className="control-label col-sm-2 col-sm-offset-1" htmlFor="empMobileNo">Mobile No 1:</label>
                                            <div className="col-sm-3">
                                                <input type="text" className="form-control" id="empMobileNo" placeholder="Enter First Name here" value={this.state.empMobileNo} onChange={this.changeEmpMobileNoHandler} />
                                            </div>

                                            <label className="control-label col-sm-2" htmlFor="empEmerMobileNo">Mobile No 2:</label>

                                            <div className="col-sm-3">
                                                <input type="text" className="form-control" id="empEmerMobileNo" placeholder="Enter Last Name here" value={this.state.empEmerMobileNo} onChange={this.changeEmpEmerMobileNoHandler} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <div className="row">
                                            <label className="control-label col-sm-2 col-sm-offset-1" htmlFor="tempAddress">Temporary Address:</label>
                                            <div className="col-sm-3">
                                                <textarea row="6" className="form-control" id="tempAddress" placeholder="Enter First Name here" value={this.state.tempAddress} onChange={this.changeTempAddressHandler} />
                                            </div>

                                            <label className="control-label col-sm-2" htmlFor="permAddress">Permenent Address:</label>

                                            <div className="col-sm-3">
                                                <textarea row="6" className="form-control" id="permAddress" placeholder="Enter Last Name here" value={this.state.permAddress} onChange={this.changePermAddressHandler} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="row">
                                            <label className="control-label col-sm-2 col-sm-offset-1" htmlFor="emailId"> Email Id:</label>
                                            <div className="col-sm-4">

                                                <input type="text" className="form-control" id="emailId" placeholder="Enter Email Id here" value={this.state.emailId} onChange={this.changeEmailIdHandler} />

                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <div className="row">
                                            <label className="control-label col-sm-2 col-sm-offset-1" htmlFor="empGender">Gender:</label>
                                            <div className="col-sm-3">
                                                <select className="form-control" id="empGender" onChange={this.changeEmpGenderHandler}>
                                                    <option value={'Male'}>Male</option>
                                                    <option value={'Female'}>Female</option>
                                                </select>
                                            </div>

                                            <label className="control-label col-sm-2" htmlFor="kppObjective" onChange={this.changeEmpBloodgroupHandler}>Blood Group:</label>

                                            <div className="col-sm-3">
                                                <select className="form-control" id="sel1">
                                                    <option value={"A+"}>A+ve</option>
                                                    <option value={"B+"}>B+ve</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <div className="row">
                                            <label className="control-label col-sm-2 col-sm-offset-1" htmlFor="reamrk">Enter Remark:</label>
                                            <div className="col-sm-8">
                                                <textarea row="4" className="form-control" id="remark" placeholder="Enter Remark here" value={this.state.remark} onChange={this.changeRemarkHandler} />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="submit" className="btn btn-success" onClick={this.saveEmployeeDetails} data-dismiss="modal"> Submit</button>
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default EmployeeComponent;