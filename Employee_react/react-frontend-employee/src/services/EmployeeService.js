import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees";

class EmployeeService{
    
    getEmployees(){
        //Retorna o link da API usando método GET
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    createEmployee(employee){
        return axios.post(EMPLOYEE_API_BASE_URL, employee);
    }

    getEmployeeById(employeeid){
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + employeeid); 
    }

    updateEmployee(employee, employeeid){
        return axios.put(EMPLOYEE_API_BASE_URL + '/' + employeeid, employee)
    }
    
    deleteEmployee(employeeid){
        return axios.delete(EMPLOYEE_API_BASE_URL + '/' + employeeid)
    }
}

export default new EmployeeService();