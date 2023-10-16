import React, { Component } from 'react';
import KeyParameterService from '../../services/KeyParameterService';

class KeyParameterComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            departments: [],
            deptId: 1, //this.props.match.param.deptId,
            deptName: '',
            remark: '',
            statusCd: ''
        }

        this.saveDepartment = this.saveDepartment.bind(this);
        this.changeDeptNameHandler = this.changeDeptNameHandler.bind(this);
        this.changeRemarkHandler = this.changeRemarkHandler.bind(this);
        this.saveDepartmen = this.saveDepartment.bind(this);
        this.updateDepartment = this.updateDepartment.bind(this);
        this.deleteDepartment = this.deleteDepartment.bind(this);

    }


    componentDidMount() {
        KeyParameterService.getDpartmentDetails().then((res) => {
            this.setState({ departments: res.data });
        });

        KeyParameterService.getDepartmentById(this.state.deptId).then((res) => {
            let department = res.data;
            console.log("data", department)
            this.setState({
                deptName: department.deptName,
                remark: department.remark
            });
        });
    }

    updateDepartment = (e) => {
        e.preventDefault();
        let departmentData = { deptId: this.state.deptId, deptName: this.state.deptName, remark: this.state.remark, statusCd: 'A' };
        console.log('employee=>' + JSON.stringify(departmentData));
        KeyParameterService.updateDepartmentDetails(departmentData).then(res => {
            console.log("Department updated");
        }
        );
        // window.location.reload(); 
    }

    deleteDepartment = (e) => {
        let departmentData = { deptId: this.state.deptId, deptName: this.state.deptName, remark: this.state.remark, statusCd: 'I' };
        console.log('employee=>' + JSON.stringify(departmentData));
        KeyParameterService.updateDepartmentDetails(departmentData).then(res => {
            console.log("Department updated");
        }
        );
        // window.location.reload(); 
    }

    saveDepartment = (e) => {
        e.preventDefault()
        let department = { deptName: this.state.deptName, remark: this.state.remark, statusCd: 'A' };
        console.log('employee=>' + JSON.stringify(department));
        KeyParameterService.saveDpartmentDetails(department).then(res => {
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
    render() {
        return (
                <div className="row">
                    <h2 className="text-center">Key Parameter List</h2>
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-sm-8">
                                <form className="form-horizontal" action="/action_page.php">
                                    <div className="form-group">
                                        <label className="control-label col-sm-3" htmlFor="email">Department Search:</label>
                                        <div className="col-sm-4">
                                            <input type="text" className="form-control" id="deptName" placeholder="Enter Department Name" />
                                        </div>
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </div>
                                </form>
                            </div>
                            <div className="col-sm-4"><button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">Add Key Parameter</button></div>
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
                                    <h4 className="modal-title">Add Key Parameter</h4>
                                </div>
                                <div className="modal-body">
                                    <form className="form-horizontal" action="/action_page.php">
                                        <div className="form-group">
                                            <label className="control-label col-sm-4" htmlFor="deptId">Select Department Name:</label>
                                            <div className="col-sm-4">
                                                <div className="form-group">
                                                    <select className="form-control" id="sel1">
                                                        <option>Human Rrsource</option>
                                                        <option>Information Tech</option>

                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label className="control-label col-sm-4" htmlFor="desigId">Select Designation Name:</label>
                                            <div className="col-sm-4">
                                                <div className="form-group">
                                                    <select className="form-control" id="sel1">
                                                        <option>Software Engineer</option>
                                                        <option>Head Of Department</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label className="control-label col-sm-4" htmlFor="kppObjective">KPP Objective:</label>
                                            <div className="col-sm-8">
                                                <textarea row="4" className="form-control" id="kppObjective" placeholder="KPP Objective here" value={this.state.kppObjective} onChange={this.changeKppObjectivedHandler} />
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label className="control-label col-sm-4" htmlFor="kppPerformanceIndi">Kpp Performance Indicator:</label>
                                            <div className="col-sm-8">
                                                <textarea row="4" className="form-control" id="kppPerformanceIndi" placeholder="Enter KPP Performance Infdicator here" value={this.state.kppPerformanceIndi} onChange={this.changeKppPerformanceIndiHandler} />
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <div className="row">
                                                <label className="control-label col-sm-3 col-sm-offset-1" htmlFor="kppOverallTarget">Overall Target:</label>
                                                <div className="col-sm-2">
                                                    <input type="text" className="form-control" id="kppOverallTarget" placeholder="Enter KPP ObjectiveOverall Target here" value={this.state.kppOverallTarget} onChange={this.changeKppOverallTargetHandler} />
                                                </div>
                                                <label className="control-label col-sm-3" htmlFor="kppTargetPeriod">Target Period:</label>
                                                <div className="col-sm-2">
                                                    <input type="text" className="form-control" id="kppTargetPeriod" placeholder="Enter KPP Kpp Target Period here" value={this.state.kppOverallTarget} onChange={this.changeKppTargetPeriodHandler} />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <div className="row">
                                                <label className="control-label col-sm-3 col-sm-offset-1" htmlFor="kppUoM">Unit of Measurement:</label>
                                                <div className="col-sm-2">
                                                    <input type="text" className="form-control" id="kppUoM" placeholder="Enter KPP Kpp Target Period here" value={this.state.kppUoM} onChange={this.changeKppUoMHandler} />
                                                </div>
                                                <label className="control-label col-sm-3" htmlFor="kppOverallWeightage">Kpp Target Period:</label>
                                                <div className="col-sm-2">
                                                    <input type="text" className="form-control" id="kppOverallWeightage" placeholder="Enter KPP Kpp Target Period here" value={this.state.kppUoM} onChange={this.changeKppUoMHandler} />
                                                </div>
                                            </div>
                                        </div>



                                        <div className="form-group">
                                            <div className="row">
                                                <label className="control-label col-sm-3 col-sm-offset-1" htmlFor="kppRating1">Rating 1:</label>
                                                <div className="col-sm-2">
                                                    <input type="text" className="form-control" id="kppRating1" placeholder="Enter KPP Rating 1 here" value={this.state.kppRating1} onChange={this.changeKppRating1MHandler} />
                                                </div>
                                                <label className="control-label col-sm-3" htmlFor="kppRating1">Rating 2:</label>
                                                <div className="col-sm-2">
                                                    <input type="text" className="form-control" id="kppRating2" placeholder="Enter KPP Rating 2 here" value={this.state.kppRating2} onChange={this.changeKppRating2MHandler} />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <div className="row">
                                                <label className="control-label col-sm-3 col-sm-offset-1" htmlFor="kppRating3">Rating 3:</label>
                                                <div className="col-sm-2">
                                                    <input type="text" className="form-control" id="kppRating3" placeholder="Enter KPP Rating 3 here" value={this.state.kppRating1} onChange={this.changeKppRating3MHandler} />
                                                </div>
                                                <label className="control-label col-sm-3" htmlFor="kppRating1">Rating 4:</label>
                                                <div className="col-sm-2">
                                                    <input type="text" className="form-control" id="kppRating4" placeholder="Enter KPP Rating 4 here" value={this.state.kppRating4} onChange={this.changeKppRating4MHandler} />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <div className="row">
                                                <label className="control-label col-sm-3 col-sm-offset-1" htmlFor="kppRating5">Rating 5:</label>
                                                <div className="col-sm-2">
                                                    <input type="text" className="form-control" id="kppRating5" placeholder="Enter KPP Rating 5 here" value={this.state.kppRating5} onChange={this.changeKppRating5MHandler} />
                                                </div>

                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label className="control-label col-sm-4" htmlFor="reamrk">Enter Remark:</label>
                                            <div className="col-sm-8">
                                                <textarea row="4" className="form-control" id="remark" placeholder="Enter Remark here" value={this.state.remark} onChange={this.changeRemarkHandler} />
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
                </div>
        );
    }
}

export default KeyParameterComponent;