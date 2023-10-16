import axios from "axios";

const DEPARTMENT_URL="http://localhost:9091/department";
const DESIGNATION_URL="http://localhost:9091/designation";

const BASE_URL="";

class DesignationService{

    getDpartmentDetails(){
        return axios.get(DEPARTMENT_URL)
    }


    getDesignationDetails(){
        return axios.get("http://localhost:9091/designation/search?page=0&size=10&sort=desig.desig_name")
    }


    saveDesignationDetails(designation){
        return axios.post(DESIGNATION_URL,designation)
    }

    getDepartmentById(deptId){
        return axios.get(BASE_URL+'/'+deptId)
    }

    updateDepartmentDetails(department){

        return axios.put(BASE_URL, department)
    }

}

export default new DesignationService()