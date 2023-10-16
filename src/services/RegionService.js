import axios from "axios";

const BASE_URL="http://localhost:9091/region";

const DEPARTMENT_GET_URL=BASE_URL+"";

class RegionService{

    getRegionDetails(){
        return axios.get(BASE_URL)
    }

    saveRegionDetails(region){
        console.log("Inside Service");
        console.log(region)
        return axios.post(BASE_URL,region)
    }

    updateRegionDetails(region){

        return axios.put(BASE_URL, region)
    }

}

export default new RegionService()