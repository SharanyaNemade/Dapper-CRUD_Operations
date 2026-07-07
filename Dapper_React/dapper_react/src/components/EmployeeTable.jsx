import { Link } from "react-router-dom";

function EmployeeTable({ employees, onDelete }) {

    return (

        <table className="table table-bordered table-striped mt-3">

            <thead className="table-dark">

                <tr>

                    <th>ID</th>

                    <th>Name</th>

                    <th>Age</th>

                    <th>Salary</th>

                    <th>Manager ID</th>

                    <th>Action</th>

                </tr>

            </thead>

            <tbody>

                {

                    employees.map((emp) => (

                        <tr key={emp.employeeId}>

                            <td>{emp.employeeId}</td>

                            <td>{emp.employeeName}</td>

                            <td>{emp.age}</td>

                            <td>{emp.salary}</td>

                            <td>{emp.managerId}</td>

                            <td>

                                <Link
                                    to={`/edit/${emp.employeeId}`}
                                    className="btn btn-warning btn-sm me-2">

                                    Edit

                                </Link>

                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => onDelete(emp.employeeId)}>

                                    Delete

                                </button>

                            </td>

                        </tr>

                    ))

                }

            </tbody>

        </table>

    );

}

export default EmployeeTable;