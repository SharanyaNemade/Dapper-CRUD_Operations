namespace Dapper_CRUD.Models
{
    public class Employee
    {
        public int EmployeeId { get; set; }

        public string? EmployeeName { get; set; }

        public int? Age { get; set; }

        public decimal? Salary { get; set; }

        public int? ManagerId { get; set; }

    }
}
