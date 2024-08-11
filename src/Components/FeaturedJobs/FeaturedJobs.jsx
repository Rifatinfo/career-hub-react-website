import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {

    const [jobs, setJobs] = useState([]);
    const [dataLength, setDataLength] = useState(4);

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, []);

    return (
        <div>
            <div>
                <h1 className="text-5xl font-bold text-center">Featured Jobs</h1>
                <p className="text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
                {
                    jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className="text-center mt-4 mb-4">
                <div className={dataLength === jobs.length ? 'hidden' : ''}>
                    <button onClick={() => setDataLength(jobs.length)} className="btn bg-gradient-to-r from-indigo-500 to-blue-500 font-semibold text-xl text-white">See All Jobs</button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedJobs;