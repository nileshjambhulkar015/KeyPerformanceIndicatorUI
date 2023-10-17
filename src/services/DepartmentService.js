import axios from "axios";
import {Row, Pagination,PaginationItem, PaginationLink} from 'reactstrap';
const BASE_URL="http://localhost:9091/department";

const DEPARTMENT_GET_URL=BASE_URL+"";

class DepartmentService{

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
    getDpartmentDetailsByPaging(){
        return axios.get("http://localhost:9091/department/search?searchEnum=ALL&statusCdEnum=A&page=0&size=20&sort=deptName")
    }

    getDpartmentDetailsByPagingByDate(e){
        return axios.get(`http://localhost:9091/department/search?searchEnum=BY_NAME&searchString=${e}&statusCdEnum=A&page=0&size=20&sort=deptName`)
    }
   
}


export default new DepartmentService()