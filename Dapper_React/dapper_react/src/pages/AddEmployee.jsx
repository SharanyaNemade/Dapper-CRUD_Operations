import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import EmployeeForm from "../components/EmployeeForm";
import { addEmployee } from "../services/EmployeeService";

function AddEmployee() {
  const navigate = useNavigate();

  async function saveEmployee(employee) {
    try {
      await addEmployee(employee);

      alert("Employee Added Successfully");

      navigate("/");
    } catch (error) {
      console.log(error);

      alert("Unable to Add Employee");
    }
  }

  return (
    <>
      <Navbar />

      <div className="container mt-4">
        <h2>Add Employee</h2>

        <button className="btn btn-secondary mb-3" onClick={() => navigate("/")}> ← Back </button>
        
        <EmployeeForm buttonText="Save" onSubmit={saveEmployee} />
      </div>
    </>
  );
}

export default AddEmployee;
