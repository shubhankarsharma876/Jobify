import React, { useState } from "react";

const JobForm = () => {
  const [companyName, setCompanyName] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [skillsNeeded, setSkillsNeeded] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add code here to upload the form data to the Django backend
    // (we'll cover this in the Django section)
    console.log({
      companyName,
      jobDescription,
      skillsNeeded,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="FormContainer">
      <label>
        Company Name:
        <input
          type="text"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          required
          className="border border-gray-300 p-2"
        />
      </label>
      <br />
      <label>
        Job Description:
        <textarea
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
          required
          className="border border-gray-300 p-2"
        />
      </label>
      <br />
      <label>
        Skills Needed:
        <input
          type="text"
          value={skillsNeeded}
          onChange={(e) => setSkillsNeeded(e.target.value)}
          required
          className="border border-gray-300 p-2"
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default JobForm;
