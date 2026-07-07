import { useState, useEffect } from "react";

function EmployeeForm({

    initialData,
    onSubmit,
    buttonText

}) {

    const [employeeName, setEmployeeName] = useState("");
    const [age, setAge] = useState("");
    const [salary, setSalary] = useState("");
    const [managerId, setManagerId] = useState("");

    useEffect(() => {

        if (initialData) {

            setEmployeeName(initialData.employeeName || "");
            setAge(initialData.age || "");
            setSalary(initialData.salary || "");
            setManagerId(initialData.managerId || "");

        }

    }, [initialData]);

    function handleSubmit(e) {

        e.preventDefault();

        const employee = {

            employeeId: initialData?.employeeId,

            employeeName,

            age: Number(age),

            salary: Number(salary),

            managerId: Number(managerId)

        };

        onSubmit(employee);

    }

    return (

        <form onSubmit={handleSubmit}>

            <div className="mb-3">

                <label className="form-label">

                    Employee Name

                </label>

                <input

                    className="form-control"

                    value={employeeName}

                    onChange={(e) =>
                        setEmployeeName(e.target.value)}

                    required

                />

            </div>

            <div className="mb-3">

                <label className="form-label">

                    Age

                </label>

                <input

                    type="number"

                    className="form-control"

                    value={age}

                    onChange={(e) =>
                        setAge(e.target.value)}

                    required

                />

            </div>

            <div className="mb-3">

                <label className="form-label">

                    Salary

                </label>

                <input

                    type="number"

                    className="form-control"

                    value={salary}

                    onChange={(e) =>
                        setSalary(e.target.value)}

                    required

                />

            </div>

            <div className="mb-3">

                <label className="form-label">

                    Manager Id

                </label>

                <input

                    type="number"

                    className="form-control"

                    value={managerId}

                    onChange={(e) =>
                        setManagerId(e.target.value)}

                    required

                />

            </div>

            <button
                className="btn btn-success">

                {buttonText}

            </button>

        </form>

    );

}

export default EmployeeForm;