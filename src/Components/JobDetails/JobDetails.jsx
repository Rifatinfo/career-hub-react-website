import { useLoaderData, useParams } from "react-router-dom";
import { CiDollar } from "react-icons/ci";
import { CiCalendarDate } from "react-icons/ci";
import { MdCall } from "react-icons/md";
import { TbMessageCog } from "react-icons/tb";
import { CiLocationOn } from "react-icons/ci";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../utility/localStorage";



const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    console.log(id, jobs);
    const job = jobs.find(job => job.id === parseInt(id));


    const handleAppliedJob = () => {
       saveJobApplication(id);
       toast('You have applied successfully');
    }
    return (
        <div>
            <div className="flex justify-between items-center">
                <img src="https://i.postimg.cc/LhKt7r3t/bg1.png" alt="" />
                <h2 className="text-center text-4xl font-bold">Job Details</h2>
                <img src="https://i.postimg.cc/Y9xjkT7N/bg2.png" alt="" />
            </div>



            <div className="grid md:grid-cols-4 gap-4 mt-14">
                <div className="md:col-span-3 space-y-5 ">
                    <h2><span className="font-bold">Job Description: </span>{job.job_description}</h2>
                    <h2><span className="font-bold">Job Description: </span>{job.job_responsibility}</h2>
                    <p className="font-bold">Educational Requirements:</p>
                    <p>{job.educational_requirements}</p>
                    <p className="font-bold">Experiences:</p>
                    <p>{job.experiences}</p>

                </div>
                <div className=" rounded">
                    <h2 className="text-xl font-bold">Job Details</h2>
                    <hr className="mt-5 mb-5 border-b-1" />
                    <div>
                        <p className="flex gap-1"><CiDollar className="text-[#3b82f6] text-2xl" /><span className="font-bold">Salary :</span>{job.salary}</p>
                    </div>
                    <div>
                        <p className="flex gap-1"><CiCalendarDate className="text-[#3b82f6] text-2xl" /><span className="font-bold">Job Title </span><span className="font-bold">:</span>{job.job_title}</p>
                    </div>
                    <p className="mt-7 text-xl font-bold">Contact Information</p>
                    <hr className="mt-5 mb-5 border-b-1" />
                    <div className="">
                        <p className="flex gap-1 items-center"><MdCall className="text-[#3b82f6] text-2xl" /><span className="font-bold">Phone :</span>{job.contact_information.phone}</p>
                    </div>
                    <div className="mt-4">
                        <p className="flex gap-1 items-center"><TbMessageCog className="text-[#3b82f6] text-2xl" /><span className="font-bold">Email :</span> {job.contact_information.email}</p>
                    </div>
                    <div className="mt-4">
                        <p className="flex"><CiLocationOn className="text-[#3b82f6] text-4xl" /><span className="font-bold">Address  </span> <span className="font-bold"> :</span> {job.contact_information.address}</p>
                    </div>
                    <div>
                        <button onClick={handleAppliedJob} className="btn bg-gradient-to-r from-indigo-500 to-blue-500 font-semibold text-xl text-white w-full mt-9">Apply Now</button>
                    </div>
                </div>

            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;