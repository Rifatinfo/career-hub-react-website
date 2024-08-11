
const Banner = () => {
    return (
        <div className="flex items-center justify-between">
            <div>
                <h1 className="text-7xl font-extrabold ">One Step<br/> Closer To Your<br/><span className="text-blue-600/100"> Dream Job</span></h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <a className="btn bg-gradient-to-r from-indigo-500 to-blue-500 font-semibold text-xl text-white">Get Started</a>
            </div>
            <div>
                <span>
                    <img src="src\assets\images\user.png" alt="" />
                </span>
            </div>
        </div>
    );
};

export default Banner;