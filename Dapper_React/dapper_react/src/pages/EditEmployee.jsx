import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import Loader from "../components/Loader";
import EmployeeForm from "../components/EmployeeForm";

import { getEmployeeById, updateEmployee } from "../services/EmployeeService";

function EditEmployee() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [employee, setEmployee] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadEmployee();
  }, []);

  async function loadEmployee() {
    try {
      const response = await getEmployeeById(id);

      setEmployee(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function updateEmp(updatedEmployee) {
    try {
      await updateEmployee(updatedEmployee);

      alert("Employee Updated Successfully");

      navigate("/");
    } catch (error) {
      console.log(error);

      alert("Unable to Update Employee");
    }
  }

  return (
    <>
      <Navbar />

      <div className="container mt-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2>Edit Employee</h2>

          <button className="btn btn-secondary" onClick={() => navigate("/")}>
            ← Back
          </button>
        </div>

        {loading ? (
          <Loader />
        ) : (
          <EmployeeForm
            initialData={employee}
            buttonText="Update"
            onSubmit={updateEmp}
          />
        )}
      </div>
    </>
  );
}

export default EditEmployee;
