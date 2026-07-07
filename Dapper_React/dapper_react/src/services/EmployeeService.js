import axios from "axios";

const API_URL = "https://localhost:7266/api/Employee";


//  GET ALL

export const getEmployees=()=>{
    return axios.get(API_URL);
}

//  GET BY ID

export const getEmployeeById=(id)=>{
    return axios.get(`${API_URL}/${id}`);
}

//  ADD EMPLOYEE

export const addEmployee = (employee)=>{
    return axios.post(API_URL,employee);
}

//  UPDATE EMPLOYEE

export const updateEmployee = (employee) =>{
    return axios.put(API_URL, employee);
}

//  DELETE EMPLOYEE

export const deleteEmployee = (id) => {
    return axios.delete('${API__URL}?id=${id}');
}

// export {
//     getEmployees,
//     getEmployeeById,
//     addEmployee,
//     updateEmployee,
//     deleteEmployee
// };