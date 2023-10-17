import axios from "axios";

const BASE_URL="http://localhost:9091/key-perform-parameter?deptId=1&desigId=1&statusCdEnum=A";

class EmployeeKPPService{

    getKPPDetails(){
        return axios.get(BASE_URL)
    }

   

}

export default new EmployeeKPPService()