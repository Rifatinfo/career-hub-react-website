import { CiLocationOn } from "react-icons/ci";
import { PiCurrencyCircleDollarLight } from "react-icons/pi";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
    const { id,logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
    return (
        <div className="card card-compact bg-base-100 p-7 shadow-xl items-start">

            <figure className="ml-4">
                <img
                    src={logo}
                    alt="" />
            </figure>

            <div className="card-body mt-5">
                <h2 className="card-title">{job_title}</h2>
                <p className="text-xl">{company_name}</p>
                <div className="flex item-center gap-4 mt-4">
                    <button className="btn btn-outline  font-extrabold border rounded border-[#7E90FE] text-[#7E90FE]">{remote_or_onsite}</button>
                    <button className="btn btn-outline  font-extrabold border rounded border-[#7E90FE] text-[#7E90FE]">{job_type}</button>
                </div>
                <div className="flex gap-5">
                    <div className="flex gap-2 text-xl items-center"><CiLocationOn />{location}</div>
                    <div className="flex gap-2 text-xl items-center"><PiCurrencyCircleDollarLight />{salary}</div>
                </div>
                <div className="card-actions mt-4">
                    <Link to={`/job/${id}`}>
                        <button className="btn  bg-gradient-to-r from-indigo-500 to-blue-500 font-semibold text-xl text-white">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Job;