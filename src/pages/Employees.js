import { useEmployees } from "../hooks/useEmployees";

export default function Employees() {

  const { employees, isLoading } = useEmployees()

  if(isLoading) {
    return <div>Loading...</div>
  }

  if(!employees) {
    return <div>Something went wrong!</div>
  }

  if (!employees.length) {
    return <div>No employees found!</div>
  }

  if (employees) {
    return (
      <>
        <h1>Employees</h1>
        <ul>
          <div className="employee">
            <div className="employee-detail">
              NAME
            </div>
            <div className="employee-detail">
              SALARY
            </div>
            <div className="employee-detail">
              TOTAL
            </div>
          </div>

          {employees.map((employee) => (
            <div className="employee" key={employee.id}>
              <div className="employee-detail">
                <a href={`/employees/${employee.id}`}>{employee.attributes.name}</a>
              </div>
              <div className="employee-detail">
                <a href={`/employees/${employee.id}`}>{employee.attributes.salary}</a>
              </div>
              <div className="employee-detail">
                <a href={`/employees/${employee.id}`}>{employee.attributes.total}</a>
              </div>
            </div>
          ))}
        </ul>
      </>
    );
  }
}
