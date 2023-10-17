import React, { Component } from 'react';
import DepartmentService from '../../services/DepartmentService';
import EmployeeKPPService from '../../services/EmployeeKPPService';

class EmployeeKPPComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            kppResponses: []
        }
    }


    componentDidMount() {
        EmployeeKPPService.getKPPDetails().then((res) => {
            this.setState({ kppResponses: res.data.responseData });
        });
    }

    render() {
        return (
            <div className="container-fluid">
                
                <div className="row">
                <form className="form-horizontal">
                    <table className="table table-bordered">
                        <thead>
                            <tr className="text-center">
                                <th>Sr No</th>
                                <th>Objective</th>
                                <th>Key Performance Indicator</th>
                                <th>Overall Target</th>
                                <th>Target Period</th>
                                <th>UOM</th>

                                <th>Achived Weightage</th>
                                <th>Over All Achive</th>
                                <th>Overall Task Completed</th>
                                <th>Overall Weightage</th>
                                <th>Evidence Uplaod</th>
                               
                          
                            </tr>
                        </thead>
                        <tbody>
                       
                            {
                                 
                                this.state.kppResponses.map(
                                    kppResponse =>

                                        <tr key={kppResponse.kppId} className="text-justify">

                                            <td>1</td>
                                            <td>{kppResponse.kppObjective}</td>
                                            <td>{kppResponse.kppPerformanceIndi}</td>
                                            <td>{kppResponse.kppOverallTarget}</td>
                                            <td>{kppResponse.kppTargetPeriod}</td>
                                            <td>{kppResponse.kppUoM}</td>
                                           <td>
                                            <input type="text" className="form-control" id="deptName" placeholder="Enter Department Name here"/>
                                       </td>
                                       <td>
                                            <input type="text" className="form-control" id="deptName" placeholder="Enter Department Name here"/>
                                       </td>
                                       <td>
                                            <input type="text" className="form-control" id="deptName" placeholder="Enter Department Name here"/>
                                       </td>
                                        
                                            <td>{kppResponse.kppOverallWeightage}</td>
                                            <td>
                                            <input type="file" className="form-control" id="deptName"/>
                                       </td>
                                           
                                        </tr>
                                )
                               

                            }
                          
                        </tbody>
                    </table>

                    </form>
                    
                </div>
               <div className="row">
                <div className="col-sm-10"></div>
                <div className="col-sm-2"><button type="submit" className="btn btn-success "> Submit</button>
               
                </div>
               </div>
               <div className="row">
             <h4>  *Note - Please refere the below table for ratings:</h4>
                <div className="col-sm-5">
                               <table className="table table-bordered">
                        <thead>
                            <tr className="text-center">
                                <th>Sr No</th>
                                <th>Rating 1</th>
                                <th>Rating 2</th>
                                <th>Rating 3</th>
                                <th>Rating 4</th>
                                <th>Rating 5</th>
                          
                            </tr>
                        </thead>
                        <tbody>
                       
                            {
                                 
                                this.state.kppResponses.map(
                                    kppResponse =>

                                        <tr className="text-center">

                                            <td>1</td>
                                            <td>{kppResponse.kppRating1}</td>
                                            <td>{kppResponse.kppRating2}</td>
                                            <td>{kppResponse.kppRating3}</td>
                                            <td>{kppResponse.kppRating4}</td>
                                            <td>{kppResponse.kppRating5}</td>
                                        </tr>
                                )
                               

                            }
                          
                        </tbody>
                        
                    </table>
</div></div>
            </div>
            
        );
    }
}

export default EmployeeKPPComponent;