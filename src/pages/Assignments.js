import { useAssignments } from "../hooks/useAssignments";
import Assignment from "../components/Assignment";

export default function Assignments() {

  const { assignments, isLoading } = useAssignments()

  if(isLoading) {
    return <div>Loading...</div>
  }

  if(!assignments) {
    return <div>Something went wrong!</div>
  }

  if (!assignments.length) {
    return <div>No assignments found!</div>
  }

  if (assignments) {
    return (
      <>
        <h1>Assignments</h1>
        <ul>
          {assignments.map((assignment) => (
            <Assignment assignment={assignment} key={assignment.id}></Assignment>
          ))}
        </ul>
      </>
    );
  }
}