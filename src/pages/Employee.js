import { useEmployee } from "../hooks/useEmployee";
import { useParams } from "react-router-dom";

export default function Employee() {
  const params = useParams()
  const { employee, isLoading } = useEmployee(params.id)

  if(isLoading) {
    return <div>Loading...</div>
  }

  if(!employee) {
    return <div>Something went wrong!</div>
  }

  if (!employee.data.id.length) {
    return <div>Employee not found!</div>
  }

  if (employee.data.id.length) {
    return (
      <>
        <h3>Employee #{employee.data.id}</h3>
        <ul>
          <div className="employee">
            NAME: {employee.data.attributes.name}
          </div>
          <div className="employee">
            SALARY: {employee.data.attributes.salary}
          </div>
          <div className="employee">
            TOTAL: {employee.data.attributes.total}
          </div>
        </ul>
      </>
    );
  }
}