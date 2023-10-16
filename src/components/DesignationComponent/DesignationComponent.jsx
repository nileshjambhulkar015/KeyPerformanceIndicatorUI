import React, { Component } from 'react';
import DesignationService from '../../services/DesignationService';

class DesignationComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            departments: [],
            designationResult: [],
            deptId: '', //this.props.match.param.deptId,
            deptName:'',
            desigName: '',
            remark: '',
            statusCd: '',
            rowCount: 1
        }

        //for variable
        this.changeDeptIdHandler = this.changeDeptIdHandler.bind(this);
        this.changeDesigNameHandler = this.changeDesigNameHandler.bind(this);
        this.changeRemarkHandler = this.changeRemarkHandler.bind(this);

        //for method



        this.saveDesignation = this.saveDesignation.bind(this);
        this.updateDepartment = this.updateDepartment.bind(this);
        this.deleteDepartment = this.deleteDepartment.bind(this);

    }


    componentDidMount() {
        DesignationService.getDpartmentDetails().then((res) => {
            this.setState({ departments: res.data });
        });

        DesignationService.getDesignationDetails().then((response) => {
            this.setState({ designationResult: response.data });
        });

        /* DesignationService.getDepartmentById(this.state.deptId).then((res) => {
             let department = res.data;
             console.log("data", department)
             this.setState({ deptName:department.deptName,
                 remark : department.remark
              });
         });*/
    }

    updateDepartment = (e) => {
        e.preventDefault();
        let departmentData = { deptId: this.state.deptId, deptName: this.state.deptName, remark: this.state.remark, statusCd: 'A' };
        console.log('employee=>' + JSON.stringify(departmentData));
        DesignationService.updateDepartmentDetails(departmentData).then(res => {
            console.log("Department updated");
        }
        );
        // window.location.reload(); 
    }

    deleteDepartment = (e) => {
        let departmentData = { deptId: this.state.deptId, deptName: this.state.deptName, remark: this.state.remark, statusCd: 'I' };
        console.log('employee=>' + JSON.stringify(departmentData));
        DesignationService.updateDepartmentDetails(departmentData).then(res => {
            console.log("Department updated");
        }
        );
        // window.location.reload(); 
    }

    saveDesignation = (e) => {
        e.preventDefault()
        let department = { deptId: this.state.deptId, desigName: this.state.desigName, remark: this.state.remark, statusCd: 'A' };
        console.log('employee=>' + JSON.stringify(department));
        DesignationService.saveDesignationDetails(department).then(res => {
            console.log("Department added");
        }
        );
        // window.location.reload(); 
    }

    //for variable handler
    changeDesigNameHandler = (event) => {
        this.setState({ desigName: event.target.value });
    }
    changeRemarkHandler = (event) => {
        this.setState({ remark: event.target.value });
    }
    changeDeptIdHandler = (event) => {
        this.setState({ deptId: event.target.value });
    }
    render() {
        return (
            <div>
                <div className="row">
                    <h2 className="text-center">Designation List</h2>
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-sm-8">
                                <form className="form-horizontal" action="/action_page.php">
                                    <div className="form-group">
                                        <label className="control-label col-sm-3" htmlFor="email">Designation Search:</label>
                                        <div className="col-sm-4">
                                            <input type="text" className="form-control" id="deptName" placeholder="Enter Designation Name" />
                                        </div>
                                        <button type="submit" className="btn btn-primary">Search</button>
                                    </div>
                                </form>
                            </div>
                            <div className="col-sm-4"><button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">Add Designation</button></div>
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
                                        this.state.designationResult.map(
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

                </div>

                <div className="modal fade" id="myModal" role="dialog">
                    <div className="modal-dialog">


                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                <h4 className="modal-title">Add Designation</h4>
                            </div>
                            <div className="modal-body">
                                <form className="form-horizontal" action="/action_page.php">
                                    <div className="form-group">
                                        <label className="control-label col-sm-4" htmlFor="deptName">Select Department Name:</label>
                                        <div className="col-sm-8">
                                            <select className="form-control" id="sel1" onChange={this.changeDeptIdHandler}>
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
                                    <div className="form-group">
                                        <label className="control-label col-sm-4" htmlFor="reamrk">Designation Name:</label>
                                        <div className="col-sm-8">
                                            <input type="text" className="form-control" id="desigName" placeholder="Enter Designation Name here" value={this.state.desigName} onChange={this.changeDesigNameHandler} />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label col-sm-4" htmlFor="reamrk">Enter Remark:</label>
                                        <div className="col-sm-8">
                                            <textarea row="5" className="form-control" id="remark" placeholder="Enter Remark here" value={this.state.remark} onChange={this.changeRemarkHandler} />
                                        </div>
                                    </div>

                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="submit" className="btn btn-success" onClick={this.saveDesignation} data-dismiss="modal"> Submit</button>
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default DesignationComponent;