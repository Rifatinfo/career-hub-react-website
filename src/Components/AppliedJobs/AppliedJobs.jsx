import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localStorage";
import AppliedJob from "../AppliedJob/appliedJob";
import { IoMdArrowDropdown } from "react-icons/io";

const AppliedJobs = () => {
  const jobs = useLoaderData();

  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJob] = useState([]);

  const handleJobFilter = filter => {
    if(filter === 'All'){
        setDisplayJob(appliedJobs);
    }
    else if(filter === 'Remote'){
        const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote');
        setDisplayJob(remoteJobs);
    }
    else if(filter === 'Onsite'){
       const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite');
       setDisplayJob(onsiteJobs);
    }
  }

  useEffect(() => {
    const storedJobIds = getStoredJobApplication();
    if (jobs.length > 0) {
      const jobApplied = jobs.filter((job) => storedJobIds.includes(job.id));
      //    const jobApplied = jobs.filter(job => job.id === storedJobIds);
      console.log(jobApplied, jobs, storedJobIds);
      setAppliedJobs(jobApplied);
      setDisplayJob(appliedJobs);
    }
  }, [jobs]);
  return (
    <div>
      {/* fix section */}
      <div className="flex justify-between items-center">
        <img src="https://i.postimg.cc/LhKt7r3t/bg1.png" alt="" />
        <h2 className="text-center text-4xl font-bold">Applied Jobs</h2>
        <img src="https://i.postimg.cc/Y9xjkT7N/bg2.png" alt="" />
      </div>

      <div className="mb-4 flex justify-end items-center mt-7">
        {/* dropDown-menu */}
        <details className="dropdown">
          <summary className="btn m-1">
            Filter By <IoMdArrowDropdown className="text-2xl" />
          </summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            <li onClick={() => handleJobFilter('All')}>
              <a>All</a>
            </li>
            <li onClick={() => handleJobFilter('Remote')}>
              <a>Remote</a>
            </li>
            <li onClick={() => handleJobFilter('Onside')}>
              <a>Onside</a>
            </li>
          </ul>
        </details>
      </div>
      <div>
        {displayJobs.map((job) => (
          <AppliedJob key={job.id} job={job}></AppliedJob>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
