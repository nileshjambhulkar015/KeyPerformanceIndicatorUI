import axios from "axios";

const BASE_URL="http://localhost:9091/department";

const DEPARTMENT_GET_URL=BASE_URL+"";

class LocationService{

    getDpartmentDetails(){
        return axios.get(BASE_URL)
    }

    saveDpartmentDetails(department){
        return axios.post(BASE_URL,department)
    }

    getDepartmentById(deptId){
        console.log("grt call")
        return axios.get(BASE_URL+'/'+deptId)
    }

    updateDepartmentDetails(department){

        return axios.put(BASE_URL, department)
    }

}

export default new LocationService()