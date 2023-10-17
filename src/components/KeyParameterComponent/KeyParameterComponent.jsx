import React, { Component } from 'react';
import KeyParameterService from '../../services/KeyParameterService';

class KeyParameterComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            departments: [],
            deptId: '', //this.props.match.param.deptId,
            desigId: '',
            kppObjective: '',
            kppPerformanceIndi: '',
            kppOverallTarget: '',
            kppTargetPeriod: '',
            kppUoM: '',
            kppOverallWeightage: '',
            kppRating1: '',
            kppRating2: '',
            kppRating3: '',
            kppRating4: '',
            kppRating5: '',
            remark: '',
            statusCd: '',
            employeeId: ''
        }

        //for variable
        this.changeDeptIdHandler = this.changeDeptIdHandler.bind(this);
        this.changeDesigIdHandler = this.changeDesigIdHandler.bind(this);

        this.changeKppObjectiveHandler = this.changeKppObjectiveHandler.bind(this);
        this.changeKppPerformanceIndiHandler = this.changeKppPerformanceIndiHandler.bind(this);
        this.changeKppOverallTargetHandler = this.changeKppOverallTargetHandler.bind(this);
        this.changeKppTargetPeriodHandler = this.changeKppTargetPeriodHandler.bind(this);
        this.changeKppUoMHandler = this.changeKppUoMHandler.bind(this);
        this.changeKppOverallWeightageHandler = this.changeKppOverallWeightageHandler.bind(this);
        this.changeKppRating1Handler = this.changeKppRating1Handler.bind(this);
        this.changeKppRating2Handler = this.changeKppRating2Handler.bind(this);
        this.changeKppRating3Handler = this.changeKppRating3Handler.bind(this);
        this.changeKppRating4Handler = this.changeKppRating4Handler.bind(this);
        this.changeKppRating5Handler = this.changeKppRating5Handler.bind(this);

        this.changeRemarkHandler = this.changeRemarkHandler.bind(this);
        //this.changeEmployeeIdHandler = this.changeEmployeeIdHandler.bind(this);

        this.saveKPP = this.saveKPP.bind(this);
        this.updateKPP = this.updateKPP.bind(this);
        this.deleteKpp = this.deleteKpp.bind(this);

    }
    changeDeptIdHandler = (event) => {
        this.setState({ deptId: event.target.value });
    }

    changeDesigIdHandler = (event) => {
        this.setState({ desigId: event.target.value });
    }

    changeKppObjectiveHandler = (event) => {
        this.setState({ kppObjective: event.target.value });
    }
    changeKppPerformanceIndiHandler = (event) => {
        this.setState({ kppPerformanceIndi: event.target.value });
    }
    changeKppOverallTargetHandler = (event) => {
        this.setState({ kppOverallTarget: event.target.value });
    }
    changeKppTargetPeriodHandler = (event) => {
        this.setState({ kppTargetPeriod: event.target.value });
    }

    changeKppUoMHandler = (event) => {
        this.setState({ kppUoM: event.target.value });
    }
    changeKppOverallWeightageHandler = (event) => {
        this.setState({ kppOverallWeightage: event.target.value });
    }
    changeKppRating1Handler = (event) => {
        this.setState({ kppRating1: event.target.value });
    }

    changeKppRating2Handler = (event) => {
        this.setState({ kppRating2: event.target.value });
    }
    changeKppRating3Handler = (event) => {
        this.setState({ kppRating3: event.target.value });
    }
    changeKppRating4Handler = (event) => {
        this.setState({ kppRating4: event.target.value });
    }
    changeKppRating5Handler = (event) => {
        this.setState({ kppRating5: event.target.value });
    }
    changeRemarkHandler = (event) => {
        this.setState({ remark: event.target.value });
    }

    componentDidMount() {
        KeyParameterService.getDpartmentDetails().then((res) => {
            this.setState({ departments: res.data });
        });



        /*  KeyParameterService.getDepartmentById(this.state.deptId).then((res) => {
              let department = res.data;
              console.log("data", department)
              this.setState({
                  deptName: department.deptName,
                  remark: department.remark
              });
          });*/
    }

    updateKPP = (e) => {
        /*  e.preventDefault();
          let departmentData = { deptId: this.state.deptId, deptName: this.state.deptName, remark: this.state.remark, statusCd: 'A' };
          console.log('employee=>' + JSON.stringify(departmentData));
          KeyParameterService.updateDepartmentDetails(departmentData).then(res => {
              console.log("Department updated");
          }
          );*/
        // window.location.reload(); 
    }

    deleteKpp = (e) => {
        /* let departmentData = { deptId: this.state.deptId, deptName: this.state.deptName, remark: this.state.remark, statusCd: 'I' };
         console.log('employee=>' + JSON.stringify(departmentData));
         KeyParameterService.updateDepartmentDetails(departmentData).then(res => {
             console.log("Department updated");
         }
         );*/
        // window.location.reload(); 
    }

    saveKPP = (e) => {
        e.preventDefault()
        let keyPerformIndicator = {
            deptId: this.state.deptId, desigId: this.state.desigId, kppObjective: this.state.kppObjective, kppPerformanceIndi: this.state.kppPerformanceIndi, kppOverallTarget: this.state.kppOverallTarget,
            kppTargetPeriod: this.state.kppTargetPeriod,
            kppUoM: this.state.kppUoM,
            kppOverallWeightage: this.state.kppOverallWeightage,
            kppRating1: this.state.kppRating1,
            kppRating2: this.state.kppRating2,
            kppRating3: this.state.kppRating3,
            kppRating4: this.state.kppRating4,
            kppRating5: this.state.kppRating5,
            remark: this.state.remark, 
            statusCd: 'A',
            employeeId: 'KPP'
        };
        //console.log('employee=>' + JSON.stringify(department));
        KeyParameterService.saveKPPDetails(keyPerformIndicator).then(res => {
            console.log("keyPerformIndicator added");
        }
        );
        // window.location.reload(); 
    }

    render() {
        return (
            <div className="row">
                <h2 className="text-center">Key Parameter List</h2>
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    <div className="row">
                        <div className="col-sm-8">
                            <form className="form-horizontal" action="">
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
                                        <label className="control-label col-sm-4" htmlFor="desigId">Select Designation Name:</label>
                                        <div className="col-sm-4">
                                            <div className="form-group">
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
                                        <label className="control-label col-sm-4" htmlFor="kppObjective">KPP Objective:</label>
                                        <div className="col-sm-8">
                                            <textarea row="4" className="form-control" id="kppObjective" placeholder="KPP Objective here" value={this.state.kppObjective} onChange={this.changeKppObjectiveHandler} />
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
                                                <input type="text" className="form-control" id="kppTargetPeriod" placeholder="Enter KPP Kpp Target Period here" value={this.state.kppTargetPeriod} onChange={this.changeKppTargetPeriodHandler} />
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
                                                <input type="text" className="form-control" id="kppOverallWeightage" placeholder="Enter KPP Kpp Target Period here" value={this.state.kppOverallWeightage} onChange={this.changeKppOverallWeightageHandler} />
                                            </div>
                                        </div>
                                    </div>



                                    <div className="form-group">
                                        <div className="row">
                                            <label className="control-label col-sm-3 col-sm-offset-1" htmlFor="kppRating1">Rating 1:</label>
                                            <div className="col-sm-2">
                                                <input type="text" className="form-control" id="kppRating1" placeholder="Enter KPP Rating 1 here" value={this.state.kppRating1} onChange={this.changeKppRating1Handler} />
                                            </div>
                                            <label className="control-label col-sm-3" htmlFor="kppRating1">Rating 2:</label>
                                            <div className="col-sm-2">
                                                <input type="text" className="form-control" id="kppRating2" placeholder="Enter KPP Rating 2 here" value={this.state.kppRating2} onChange={this.changeKppRating2Handler} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <div className="row">
                                            <label className="control-label col-sm-3 col-sm-offset-1" htmlFor="kppRating3">Rating 3:</label>
                                            <div className="col-sm-2">
                                                <input type="text" className="form-control" id="kppRating3" placeholder="Enter KPP Rating 3 here" value={this.state.kppRating3} onChange={this.changeKppRating3Handler} />
                                            </div>
                                            <label className="control-label col-sm-3" htmlFor="kppRating1">Rating 4:</label>
                                            <div className="col-sm-2">
                                                <input type="text" className="form-control" id="kppRating4" placeholder="Enter KPP Rating 4 here" value={this.state.kppRating4} onChange={this.changeKppRating4Handler} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <div className="row">
                                            <label className="control-label col-sm-3 col-sm-offset-1" htmlFor="kppRating5">Rating 5:</label>
                                            <div className="col-sm-2">
                                                <input type="text" className="form-control" id="kppRating5" placeholder="Enter KPP Rating 5 here" value={this.state.kppRating5} onChange={this.changeKppRating5Handler} />
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
                                <button type="submit" className="btn btn-success" onClick={this.saveKPP} data-dismiss="modal"> Submit</button>
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