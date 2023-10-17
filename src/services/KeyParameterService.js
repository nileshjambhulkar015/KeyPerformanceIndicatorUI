import axios from "axios";

const DEPARTMENT_URL="http://localhost:9091/department/employee";
const KPP_URL_GET="http://localhost:9091/key-perform-parameter";

const BASE_URL="";

class KeyParameterService{

    getDpartmentDetails(){
        return axios.get(DEPARTMENT_URL)
    }

    saveKPPDetails(keyPerformIndicator){
        return axios.post(KPP_URL_GET,keyPerformIndicator)
    }

    getDepartmentById(deptId){
        console.log("grt call")
        return axios.get(BASE_URL+'/'+deptId)
    }

    updateDepartmentDetails(department){

        return axios.put(BASE_URL, department)
    }

}

export default new KeyParameterService()