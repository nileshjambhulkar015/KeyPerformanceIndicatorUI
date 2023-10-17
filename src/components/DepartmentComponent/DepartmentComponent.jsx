import React, {useState, useEffect, Component } from 'react';
import DepartmentService from '../../services/DepartmentService';

class DepartmentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            departments: [],
            deptId: '', //this.props.match.param.deptId,
            deptName: '',
            remark: '',
            statusCd: '',
            employeeId:'',
            searchString:''
        }

        this.saveDepartment = this.saveDepartment.bind(this);
        this.changeDeptNameHandler = this.changeDeptNameHandler.bind(this);
        this.changeRemarkHandler = this.changeRemarkHandler.bind(this);
        this.changeSearchStringHandler = this.changeSearchStringHandler.bind(this);
        this.showDepartment = this.showDepartment.bind(this);
        this.updateDepartment = this.updateDepartment.bind(this);
        this.deleteDepartment = this.deleteDepartment.bind(this);
        this.searchStringData=this.searchStringData.bind(this);


    }
searchStringData = (e) => {
    
    DepartmentService.getDpartmentDetailsByPagingByDate(e).then((res) => {
        this.setState({ departments: res.data.responseData.content });
    });
    console.log(this.state);
}

    componentDidMount() {
       /* DepartmentService.getDpartmentDetails().then((res) => {
            this.setState({ departments: res.data });
        });*/

         DepartmentService.getDpartmentDetailsByPaging().then((res) => {
            this.setState({ departments: res.data.responseData.content });
        });   
       
    }
    showDepartment = (e) => {
        DepartmentService.getDepartmentById(e).then((res) => {
            let department = res.data;
            console.log("data", department)
            this.setState({
                deptName: department.deptName,
                remark: department.remark
            });
        });
        console.log(this.state);
    }


    updateDepartment = (e) => {
        e.preventDefault();
        let departmentData = { deptId: this.state.deptId, deptName: this.state.deptName, remark: this.state.remark, statusCd: 'A' };
        console.log('employee=>' + JSON.stringify(departmentData));
        DepartmentService.updateDepartmentDetails(departmentData).then(res => {
            console.log("Department updated");
        }
        );
        // window.location.reload(); 
    }
    
    deleteDepartment = (e) => {
        let department = null;
        DepartmentService.getDepartmentById(e).then((res) => {
            department = res.data;
            console.log("data", department)
            this.setState({
                deptId: department.deptId,
                deptName: department.deptName,
                remark: department.remark
            });
        });
    
        let departmentData = {...this.state, statusCd: 'I' };
        console.log("departmentData", departmentData)
        console.log("state", this.state);
        DepartmentService.updateDepartmentDetails({... department, statusCd: 'I'}).then(res => {
            DepartmentService.getDpartmentDetails().then((res) => {
                this.setState({ departments: res.data });
            });
            console.log("Department deleted");
        }
        );
        // window.location.reload(); 
    }

    saveDepartment = (e) => {
        e.preventDefault()
        let department = { deptName: this.state.deptName, remark: this.state.remark, statusCd: 'A' };
        
        DepartmentService.saveDpartmentDetails(department).then(res => {
            DepartmentService.getDpartmentDetails().then((res) => {
                this.setState({ departments: res.data });
            });
            console.log("Department added");
        }
        );
        // window.location.reload(); 
    }

    changeDeptNameHandler = (event) => {
        this.setState({ deptName: event.target.value });
    }
    changeRemarkHandler = (event) => {
        this.setState({ remark: event.target.value });
    }
    changeSearchStringHandler = (event) => {
        this.setState({ searchString: event.target.value });
    }
    render() {
        return (

            <div>
                <div className="row">
                    <h2 className="text-center">Department List</h2>
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-sm-8">
                              
                                    <div className="form-group">
                                        <label className="control-label col-sm-3" htmlFor="email">Department Search:</label>
                                        <div className="col-sm-4">
                                            <input type="text" className="form-control" id="searchString" placeholder="Enter Department Name" onChange={this.changeSearchStringHandler} />
                                        </div>
                                        <button type="submit" className="btn btn-primary" onClick={()=>this.searchStringData(this.state.searchString)}>Search</button>
                                    </div>
                              
                            </div>
                            <div className="col-sm-4"><button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">Add Department</button></div>
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
                                          (  department,index) =>   //index is inbuilt variable of map started with 0
                                                <tr key={department.deptId}>
                                                    <td>{index+1}</td>
                                                    <td>{department.deptName}</td>
                                                    <td> <button type="submit" className="btn btn-info" data-toggle="modal" data-target="#myModal"
                                                        onClick={() => this.updateDepartment(department.deptId)}>Update</button>
                                                        <button type="submit" className="btn col-sm-offset-1 btn-info" onClick={() => this.deleteDepartment(department.deptId)}>Delete</button>
                                                        <button type="submit" className="btn col-sm-offset-1 btn-danger" data-toggle="modal" data-target="#showData" onClick={() => this.showDepartment(department.deptId)}>View</button></td>

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
                                <h4 className="modal-title">Add Department</h4>
                            </div>
                            <div className="modal-body">
                                <form className="form-horizontal" action="/action_page.php">
                                    <div className="form-group">
                                        <label className="control-label col-sm-4" htmlFor="deptName">Enter Department Name:</label>
                                        <div className="col-sm-8">
                                            <input type="text" className="form-control" id="deptName" placeholder="Enter Department Name here" value={this.state.deptName} onChange={this.changeDeptNameHandler} />
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
                                <button type="submit" className="btn btn-success" onClick={this.saveDepartment} data-dismiss="modal"> Submit</button>
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                            </div>
                        </div>

                    </div>
                </div>

                
                <div className="modal fade" id="showData" role="dialog">
                    <div className="modal-dialog">


                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                <h4 className="modal-title">Department Details</h4>
                            </div>
                            <div className="modal-body">
                                <form className="form-horizontal">
                                    <div className="form-group">
                                        <label className="control-label col-sm-4" htmlFor="deptName">Department Name: {this.state.deptName}</label>
                                        
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label col-sm-4" htmlFor="reamrk">Remark: {this.state.remark}</label>
                                       
                                    </div>

                                </form>
                            </div>
                            <div className="modal-footer">
                                
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default DepartmentComponent;