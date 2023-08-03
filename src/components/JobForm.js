import React, { useState } from "react";

const JobForm = () => {
  const [companyName, setCompanyName] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [skillsNeeded, setSkillsNeeded] = useState("");
  const [location, setLocation] = useState("");
  const [jobTitle, setJobTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add code here to upload the form data to the Django backend
    // (we'll cover this in the Django section)
    console.log({
      companyName,
      jobDescription,
      skillsNeeded,
      location,
      jobTitle,
    });
  };

  return (
    <section class="FormContainer " id="Form">
      <h2 className="text-4xl font-bold mb-5 my-14 border-b-[5px] w-[250px] mx-auto border-indigo-600 pb-2 text-white ">
          Let's Register
        </h2>
      <div class="FormInner my-10">
        <div class="column1">
          <label>
            Company Name:
            <input
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              required
              class="inputGp border border-gray-300 p-2"
            />
          </label>
          <br />
          
          <label>
            Job Description:
            <textarea
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              required
              class="inputGp border border-gray-300 p-2"
            ></textarea>
          </label>
          <br/>
          <label>
            Location:
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
              class="inputGp border border-gray-300 p-2"
            >
              <option value="">Select Location</option>
              <option value="bengaluru">Bengaluru</option>
              <option value="chennai">Chennai</option>
              <option value="noida">Noida</option>
              <option value="hyderabad">Hyderabad</option>
            </select>
          </label>
          <br />
        </div>
        <div class="column2">
        <label>
            Job Title:
            <input
              type="text"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              required
              class="inputGp border border-gray-300 p-2"
            />
          </label>
          <br />
          <label>
            Skills Needed:
            <textarea
              type="text"
              value={skillsNeeded}
              onChange={(e) => setSkillsNeeded(e.target.value)}
              required
              class="inputGp border border-gray-300 p-2"
            ></textarea>
          </label>
          <br />
          
          <button type="submit" onClick={handleSubmit} className="bg-slate-500 hover:bg-slate-600">
            Submit
          </button>
        </div>
      </div>
    </section>
  );
};

export default JobForm;
