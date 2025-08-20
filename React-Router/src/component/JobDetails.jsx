import React from "react";
import { useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const jobDetails = useLoaderData();
  return (
    <div>
      <div className="text-2xl text-center font-bold p-2 mt-auto pt-6">JobDetails:</div>
      <div className="bg-gray-200 border-2 mt-3 pl-10 h-40 w-96 ml-auto mr-auto content-center ">
        <div className="text-2xl"><b>Job Title: </b>{jobDetails.title}</div>
        <div className="text-2xl"><b>Salary: </b>{jobDetails.salary}</div>
        <div className="text-2xl"><b>Location: </b>{jobDetails.location}</div>
        <button className="rounded-2xl bg-gray-700 text-white w-24 h-9 mt-2 hover:bg-gray-500">Apply Now</button>
      </div>
    </div>
  );
};

export default JobDetails;

export const JobDetailsLoader = async ({ params }) => {
  const { id } = params;
  const res = await fetch(`http://localhost:5000/jobs/${id}`);
  if(!res.ok){
    throw Error("Could not found job details")
  }
  return res.json();
};
