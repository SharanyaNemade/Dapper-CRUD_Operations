using Dapper_CRUD.Interface;
using Dapper_CRUD.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Dapper_CRUD.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {

        IEmpService service;

        public EmployeeController(IEmpService service)
        {
            this.service = service;
        }

        [HttpPost]
        public async Task<IActionResult> AddNewEmp(Employee e)
        {
            await service.AddEmp(e);
            return Ok(new {message= "Emp added Successfully"});
        }


        [HttpGet]
        public async Task<IActionResult> GetEmployees()
        {
            var data = await service.GetEmployees();
            return Ok(data);
        }


        [HttpGet("{id}")]
        public async Task<IActionResult> GetEmployeeById(int id)
        {
            var employee = await service.GetEmployeeById(id);

            if(employee == null)
            {
                return NotFound("Employee Not Found");
            }

            return Ok(employee);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEmployee(int id)
        {
            var result = await service.DeleteEmployee(id);

            if(result == 0)
            {
                return NotFound("Employee not found");
            }

            return Ok(new { message = "Employee deleted successfully" });
        }


        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateEmployee(int id, Employee e)
        {
            e.EmployeeId = id;

            var result = await service.UpdateEmployee(e);

            if(result == 0)
            {
                return NotFound("Employee not found");
            }

            return Ok(new { message = "Employee Updated Successfully" });
        }
    }
}
