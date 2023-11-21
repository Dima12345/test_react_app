import React, { useState } from "react";
import { setter } from "../api";

export default function Assignment({ assignment }) {
  // Destructure the assignment attributes for easier access
  const { id, attributes } = assignment;
  const [body, setBody] = useState(attributes);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submit action
    const url = 'http://0.0.0.0:3000/v1/assignments';
    setter(`${url}/${id}`, {assignment: body});
  }

  const handleChange = (e, fieldName) => {
    setBody({ ...body, [fieldName]: e.target.value });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="employee">
          <div className="employee-detail">
            month: <input type="text" value={body.month || ''} onChange={(e) => handleChange(e, "month")} />
          </div>
          <div className="employee-detail">
            rnd_percentage: <input type="text" value={body.rnd_percentage || ''} onChange={(e) => handleChange(e, "rnd_percentage")} />
          </div>
          <div className="employee-detail">
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
    </>
  );
}