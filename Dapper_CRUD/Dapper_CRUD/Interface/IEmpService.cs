using Dapper_CRUD.Models;

namespace Dapper_CRUD.Interface
{
    public interface IEmpService
    {
        Task <int> AddEmp(Employee e);

        Task<IEnumerable<Employee>> GetEmployees();

        Task<Employee> GetEmployeeById(int id);

        Task<int> DeleteEmployee(int id);


        Task<int> UpdateEmployee(Employee e);
    }
}
