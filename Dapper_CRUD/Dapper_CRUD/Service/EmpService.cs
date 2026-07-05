using Dapper;
using Dapper_CRUD.Data;
using Dapper_CRUD.Interface;
using Dapper_CRUD.Models;
using System.Data;

namespace Dapper_CRUD.Service
{
    public class EmpService : IEmpService
    {
        DapperContext context;

        public EmpService(DapperContext context)
        {
            this.context = context;
        }



        public async Task<int> AddEmp(Employee e)
        {
            var conn = context.GetConnection();
            return await conn.ExecuteAsync(
        "sp_AddEmp",
        e,
        commandType: CommandType.StoredProcedure);
        }

        

        public async Task<IEnumerable<Employee>> GetEmployees()
        {
            var conn = context.GetConnection();
            return await conn.QueryAsync<Employee>("sp_GetEmployee");
        }



        public async Task<Employee?> GetEmployeeById(int id)
        {
            var conn = context.GetConnection();

            return await conn.QueryFirstOrDefaultAsync<Employee>(
                "sp_GetEmployeeById",
                new { EmployeeId = id },
                commandType: CommandType.StoredProcedure);
        }


        public async Task<int> DeleteEmployee(int id)
        {
            var conn = context.GetConnection();

            return await conn.ExecuteAsync("sp_DeleteEmployee", new {EmployeeId = id},
                commandType: CommandType.StoredProcedure);
        }

        public async Task<int> UpdateEmployee(Employee e)
        {
            var conn = context.GetConnection();

            return await conn.ExecuteAsync("sp_UpdateEmployee",e, commandType: CommandType.StoredProcedure);
        }
    }
}

