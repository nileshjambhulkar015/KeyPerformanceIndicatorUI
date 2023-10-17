import axios from "axios";

const DEPARTMENT_URL_GET="http://localhost:9091/department";

const EMPLOYEE_URL_POST="http://localhost:9091/employee";

const BASE_URL="";

class EmployeeService{

    getDpartmentDetails(){
        return axios.get(DEPARTMENT_URL_GET)
    }

    saveEmployeeDetails(employee){
        return axios.post(EMPLOYEE_URL_POST,employee)
    }

    getDepartmentById(deptId){
        console.log("grt call")
        return axios.get(BASE_URL+'/'+deptId)
    }

    updateDepartmentDetails(department){

        return axios.put(BASE_URL, department)
    }

}

export default new EmployeeService()