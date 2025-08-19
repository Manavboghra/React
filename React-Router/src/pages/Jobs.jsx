import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Jobs = () => {
  const jobData = useLoaderData();
  return <div>
    <div className="flex gap-5 items-center justify-center m-5 ">
      {jobData.map((job)=>{
        return <Link >
          <div className="bg-gray-200 m-4 p-4 items-center text-center">
        <h3 className="text-xl font-medium">{job.title}</h3>
        <p>{job.location} </p>
        </div>
        </Link>
      })}
    </div>
  </div>;
};

export default Jobs;

export const jobsLoader = async ({params}) => {
  {params} 
  const res = await fetch("http://localhost:5000/jobs");
  return res.json();
};
