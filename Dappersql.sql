create DATABASE Dapper;


use Dapper;


Create table Managers
(
	ManagerId int identity(1,1) primary key,
	ManagerName varchar(100) not null,
	Department varchar(100),
	Email varchar(100) unique
);



Create table Employees
(
	EmployeeId int identity(1,1) primary key,
	EmployeeName varchar(100) not null,
	age int,
	salary decimal(10,2),
	managerid int,

	CONSTRAINT FK_Employee_Manager
	FOREIGN KEY(ManagerId)
	References Managers(ManagerId)
);




insert into Managers
values
('Rahul Sharma','IT','rahul@gmail.com'),
('Sam Manekshaw','Admin','sam@gmail.com');



insert into Employees
values
('Amit',25,45000,1),
('Rohit',35,50000,1),
('Neha',28,55000,2),
('Ram',48,65000,2);

select * from Managers;

select * from Employees;






/*	Get Employee  */

create procedure sp_GetEmployee
as
begin
	select * from Employees
END







/* Get Employee By Id  */

Create Procedure sp_GetEmployeeById
@EmployeeId int
AS
BEGIN
    select * from Employees
    where EmployeeId = @EmployeeId
END;



    

/* Delete Employee By Id */



create procedure sp_DeleteEmployee
    @EmployeeId int
AS
BEGIN
    delete from Employees
    where  EmployeeId = @EmployeeId
END;




/*	Add Emp	 */

CREATE PROCEDURE sp_AddEmp
    @EmployeeId int,
    @EmployeeName VARCHAR(100),
    @Age INT,
    @Salary DECIMAL(10,2),
    @ManagerId INT
AS
BEGIN
    INSERT INTO Employees
    (
        EmployeeName,
        Age,
        Salary,
        ManagerId
    )
    VALUES
    (
        @EmployeeName,
        @Age,
        @Salary,
        @ManagerId
    );
END;






/*  Update Employee  */

create procedure sp_UpdateEmployee
    @EmployeeId INT,
    @EmployeeName Varchar(100),
    @Age INT,
    @Salary decimal(10,2),
    @ManagerId INT
    
AS
BEGIN
    update Employees
    set 
        EmployeeName = @EmployeeName,
        Age = @Age,
        Salary = @Salary,
        ManagerId = @ManagerId
    WHERE EmployeeId = @EmployeeId;
END;









/*	GET MANAGERS  */

Create procedure sp_GetManagers
as
begin
Select * from Managers
END



/*	Get  Manager By Id  */


CREATE PROCEDURE sp_GetManagerById
@ManagerId INT
AS
BEGIN
SELECT * FROM Managers
WHERE ManagerId=@ManagerId
END


/*	Add Manager	*/


CREATE PROCEDURE sp_AddManager
    @ManagerName VARCHAR(100),
    @Department VARCHAR(100),
    @Email VARCHAR(100)
AS
BEGIN
    INSERT INTO Managers
    (
        ManagerName,
        Department,
        Email
    )
    VALUES
    (
        @ManagerName,
        @Department,
        @Email
    );
END;


/*	Update Managers	 */


CREATE PROCEDURE sp_UpdatEmployees
@ManagerId int,
@ManagerName varchar(100),
@Department varchar(100),
@Email varchar(100)
as
begin

update Managers
set
ManagerName = @ManagerName,
Department = @Department,
Email  = @Email

where ManagerId = @ManagerId
end


/*	Delete Employee  */


CREATE PROCEDURE sp_DeleteEmployee
@EmployeeId int
as
begin
delete from employees
where EmployeeId = @EmployeeId
end