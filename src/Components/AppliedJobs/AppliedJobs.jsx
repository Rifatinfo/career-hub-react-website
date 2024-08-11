import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localStorage";

const AppliedJobs = () => {
    const jobs = useLoaderData();
    useEffect( () => {
        const storedJobIds = getStoredJobApplication();
        if(jobs.length > 0){
           const jobApplied = jobs.filter(job => job.id === storedJobIds);
           console.log(jobApplied);
        }
    },[])
    return (
        <div>
            
        </div>
    );
};

export default AppliedJobs;