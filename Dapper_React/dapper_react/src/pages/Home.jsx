import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Loader from "../components/Loader";
import EmployeeTable from "../components/EmployeeTable";

import { getEmployees, deleteEmployee } from "../services/EmployeeService";

function Home() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadEmployees();
  }, []);

  async function loadEmployees() {
    try {
      const response = await getEmployees();
      setEmployees(response.data);
    } catch (error) {
      console.error("Error loading employees:", error);
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete(id) {
    // Confirmation dialog
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this employee?",
    );

    if (!isConfirmed) {
      return;
    }

    try {
      await deleteEmployee(id);

      alert("Employee deleted successfully.");

      // Refresh employee list
      loadEmployees();
    } catch (error) {
      console.error("Delete failed:", error);

      alert("Unable to delete employee.");
    }
  }

  return (
    <>
      <Navbar />

      <div className="container mt-4">
        <div className="d-flex justify-content-between align-items-center">
          <h2>Employee List</h2>

          <Link to="/add" className="btn btn-primary">
            Add Employee
          </Link>
        </div>

        {loading ? (
          <Loader />
        ) : (
          <EmployeeTable employees={employees} onDelete={handleDelete} />
        )}
      </div>
    </>
  );
}

export default Home;

// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// import Navbar from "../components/Navbar";
// import Loader from "../components/Loader";
// import EmployeeTable from "../components/EmployeeTable";

// import { getEmployees, deleteEmployee } from "../services/EmployeeService";

// function Home() {
//   const [employees, setEmployees] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     loadEmployees();
//   }, []);

//   async function loadEmployees() {
//     try {
//       const response = await getEmployees();

//       setEmployees(response.data);
//     }

//     catch (error) {
//       console.log(error);
//     }

//     finally {
//       setLoading(false);
//     }
//   }

//   async function handleDelete(id) {
//     if (!window.confirm("Delete this employee?")) return;

//     try {
//       await deleteEmployee(id);

//       loadEmployees();
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   return (
//     <>
//       <Navbar />

//       <div className="container mt-4">
//         <div className="d-flex justify-content-between">
//           <h2>Employee List</h2>

//           <Link to="/add" className="btn btn-primary">
//             Add Employee
//           </Link>
//         </div>

//         {loading ? (
//           <Loader />
//         ) : (
//           <EmployeeTable employees={employees} onDelete={handleDelete} />
//         )}
//       </div>
//     </>
//   );
// }

// export default Home;
