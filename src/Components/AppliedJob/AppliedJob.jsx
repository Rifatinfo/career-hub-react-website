import { CiLocationOn } from "react-icons/ci";
import { PiCurrencyCircleDollarLight } from "react-icons/pi";


const AppliedJob = ({ job }) => {
  console.log(job);
  const {
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    job_type,
    location,
    salary,
  } = job;
  return (
    <div>
      <div className="flex justify-between items-center mb-7 border p-3 rounded-xl">
        <div className="flex items-center gap-4">
          <div className="w-60 h-60 flex justify-center items-center bg-slate-200 p-2 rounded-xl">
            <img src={logo} alt="" />
          </div>
          <div>
            <h2 className="card-title">{job_title}</h2>
            <p className="text-xl">{company_name}</p>
            <div className="flex item-center gap-4 mt-4">
              <button className="btn btn-outline  font-extrabold border rounded border-[#7E90FE] text-[#7E90FE]">
                {remote_or_onsite}
              </button>
              <button className="btn btn-outline  font-extrabold border rounded border-[#7E90FE] text-[#7E90FE]">
                {job_type}
              </button>
            </div>
            <div className="flex gap-5 mt-4">
              <div className="flex gap-2 text-xl items-center">
                <CiLocationOn />
                {location}
              </div>
              <div className="flex gap-2 text-xl items-center">
                <PiCurrencyCircleDollarLight />
                {salary}
              </div>
            </div>
          </div>
        </div>
        {/* button section */}
        <div>
          <button className="btn  bg-gradient-to-r from-indigo-500 to-blue-500 font-semibold text-xl text-white">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppliedJob;
