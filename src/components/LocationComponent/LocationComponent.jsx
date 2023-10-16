import React, { Component } from 'react';
import LocationService from '../../services/LocationService';

class LocationComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            departments: [],
            deptId : 1, //this.props.match.param.deptId,
            deptName : '',
            remark :'',
            statusCd:''
        }

        this.saveDepartment = this.saveDepartment.bind(this); 
        this.changeDeptNameHandler = this.changeDeptNameHandler.bind(this);
        this.changeRemarkHandler = this.changeRemarkHandler.bind(this);
        this.saveDepartmen=this.saveDepartment.bind(this);
        this.updateDepartment=this.updateDepartment.bind(this);
        this.deleteDepartment=this.deleteDepartment.bind(this);

    }
   

    componentDidMount() {
        LocationService.getDpartmentDetails().then((res) => {
            this.setState({ departments: res.data });
        });

        LocationService.getDepartmentById(this.state.deptId).then((res) => {
            let department = res.data;
            console.log("data", department)
            this.setState({ deptName:department.deptName,
                remark : department.remark
             });
        });
    }

    updateDepartment=(e)=>{
        e.preventDefault();
        let departmentData = {deptId:this.state.deptId, deptName: this.state.deptName,remark: this.state.remark, statusCd:'A'};
        console.log('employee=>'+JSON.stringify(departmentData));
        LocationService.updateDepartmentDetails(departmentData).then(res=>{
          console.log("Department updated");
        }
        );
       // window.location.reload(); 
    }

    deleteDepartment=(e)=>{
        let departmentData = {deptId:this.state.deptId, deptName: this.state.deptName,remark: this.state.remark, statusCd:'I'};
        console.log('employee=>'+JSON.stringify(departmentData));
        LocationService.updateDepartmentDetails(departmentData).then(res=>{
          console.log("Department updated");
        }
        );
       // window.location.reload(); 
    }

    saveDepartment=(e)=>{
        e.preventDefault()
        let department = {deptName: this.state.deptName,remark: this.state.remark, statusCd:'A'};
        console.log('employee=>'+JSON.stringify(department));
        LocationService.saveDpartmentDetails(department).then(res=>{
          console.log("Department added");
        }
        );
       // window.location.reload(); 
    }

    changeDeptNameHandler=(event)=>{
        this.setState({deptName:event.target.value});
    }
    changeRemarkHandler=(event)=>{
        this.setState({remark:event.target.value});
    }
    render() {
        return (
           <div>
                <div className="row">
                <h2 className="text-center">Location List</h2>
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                    <div className="row">
                            <div className="col-sm-8">
                                <form className="form-horizontal" action="/action_page.php">
                                    <div className="form-group">
                                        <label className="control-label col-sm-3" for="email">Location Search:</label>
                                        <div className="col-sm-4">
                                            <input type="text" className="form-control" id="deptName" placeholder="Enter Location Name" />
                                        </div>
                                        <button type="submit" className="btn btn-primary">Search</button>
                                    </div>
                                </form>
                            </div>
                            <div className="col-sm-4"><button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">Add Location</button></div>
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
                                               <td> <button type="submit" className="btn btn-info"  data-toggle="modal" data-target="#myModal" 
                                               onClick={()=>this.updateDepartment(department.deptId)}>Update</button>
                                              <button type="submit" className="btn col-sm-offset-1 btn-info" onClick={()=>this.deleteDepartment(department.deptId)}>Delete</button>
                                              <button type="submit" className="btn col-sm-offset-1 btn-danger" onClick={()=>this.deleteDepartment(department.deptId)}>View</button></td>
                                            
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
                                            <h4 className="modal-title">Add Location</h4>
                                        </div>
                                        <div className="modal-body">
                                            <form className="form-horizontal" action="/action_page.php">
                                                <div className="form-group">
                                                    <label className="control-label col-sm-4" for="deptName">Select Region Name:</label>
                                                    <div className="col-sm-8">
                                                    <select className="form-control" id="sel1">
                                                        <option>East</option>
                                                        <option>West Tech</option>

                                                    </select>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label className="control-label col-sm-4" htmlFor="reamrk">Location Name:</label>
                                                    <div className="col-sm-8">
                                                        <input type="text"   className="form-control"  id="remark" placeholder="Enter Location Name here" value={this.state.remark} onChange={this.changeRemarkHandler} />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label className="control-label col-sm-4" for="reamrk">Enter Remark:</label>
                                                    <div className="col-sm-8">
                                                        <textarea row="5"   className="form-control"  id="remark" placeholder="Enter Remark here" value={this.state.remark} onChange={this.changeRemarkHandler} />
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

export default LocationComponent;