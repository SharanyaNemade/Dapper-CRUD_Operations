using Microsoft.Data.SqlClient;
using System.Data;

namespace Dapper_CRUD.Data
{
    public class DapperContext
    {

        IConfiguration config;

        public DapperContext(IConfiguration config)
        {
            this.config = config;
        }


        public IDbConnection GetConnection()
        {
            return new SqlConnection(config.GetConnectionString("DbConn"));
        }
    }
}
