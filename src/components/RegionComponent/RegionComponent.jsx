import React, { Component } from 'react';
import RegionService from '../../services/RegionService';

class RegionComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            regions: [],
            regionId: 1, //this.props.match.param.deptId,
            regionName: '',
            remark: '',
            statusCd: ''
        }

        this.saveRegion = this.saveRegion.bind(this);

        this.updateRegion = this.updateRegion.bind(this);
        this.deleteRegion = this.deleteRegion.bind(this);

        this.changeRegionNameHandler = this.changeRegionNameHandler.bind(this);
        this.changeRemarkHandler = this.changeRemarkHandler.bind(this);

    }


    componentDidMount() {
      /*  RegionService.getRegionDetails().then((res) => {
            this.setState({ regions: res.data });
        });*/

        /*   RegionService.getDepartmentById(this.state.deptId).then((res) => {
               let department = res.data;
               console.log("data", department)
               this.setState({
                   deptName: department.deptName,
                   remark: department.remark
               });
           }); */
    }

    updateRegion = (e) => {
        /*e.preventDefault();
        let departmentData = { regionId: this.state.regionId, regionName: this.state.regionName, remark: this.state.remark, statusCd: 'A' };
        console.log('employee=>' + JSON.stringify(departmentData));
        RegionService.updateRegionDetails(departmentData).then(res => {
            console.log("Department updated");
        }
        );*/
        // window.location.reload(); 
    }

    deleteRegion = (e) => {
       /* let departmentData = { regionId: this.state.regionId, regionName: this.state.regionName, remark: this.state.remark, statusCd: 'I' };
        console.log('employee=>' + JSON.stringify(departmentData));
        RegionService.updateDepartmentDetails(departmentData).then(res => {
            console.log("Department updated");
        }
        );*/
        // window.location.reload(); 
    }

    saveRegion = (e) => {
        console.log("inside Region Save");
        e.preventDefault()
        let region = { regionName: this.state.regionName, remark: this.state.remark, statusCd: 'A' };

        RegionService.saveRegionDetails(region).then(res => {
            console.log("region added");
        }
        );
        // window.location.reload(); 
    }

    changeRegionNameHandler = (event) => {
        this.setState({ regionName: event.target.value });
    }
    changeRemarkHandler = (event) => {
        this.setState({ remark: event.target.value });
    }

    render() {
        return (
            <div>


                <div className="row">
                    <h2 className="text-center">Region List</h2>
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-sm-8">
                                <form className="form-horizontal" action="/action_page.php">
                                    <div className="form-group">
                                        <label className="control-label col-sm-3" htmlFor="email">Region Search:</label>
                                        <div className="col-sm-4">
                                            <input type="text" className="form-control" id="regionNameSearch" placeholder="Enter Region Name" />
                                        </div>
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </div>
                                </form>
                            </div>
                            <div className="col-sm-4"><button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">Add Region</button></div>
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
                                        this.state.regions.map(
                                            region =>
                                                <tr key={region.regionId}>
                                                    <td>1</td>
                                                    <td>{region.regionName}</td>
                                                    <td> <button type="submit" className="btn btn-info" data-toggle="modal" data-target="#myModal"
                                                        onClick={() => this.updateDepartment(region.regionId)}>Update</button>
                                                        <button type="submit" className="btn col-sm-offset-1 btn-info" onClick={() => this.deleteRegion(region.regionId)}>Delete</button>
                                                        <button type="submit" className="btn col-sm-offset-1 btn-danger" onClick={() => this.deleteRegion(region.regionId)}>View</button></td>

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
                                <h4 className="modal-title">Add Region</h4>
                            </div>
                            <div className="modal-body">
                                <form className="form-horizontal" action="/action_page.php">
                                    <div className="form-group">
                                        <label className="control-label col-sm-4" htmlFor="regionName">Enter Region Name:</label>
                                        <div className="col-sm-8">
                                            <input type="text" className="form-control" id="regionName" placeholder="Enter Region Name here" value={this.state.regionName} onChange={this.changeRegionNameHandler} />
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
                                <button type="submit" className="btn btn-success" onClick={this.saveRegion} data-dismiss="modal"> Submit</button>
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default RegionComponent;