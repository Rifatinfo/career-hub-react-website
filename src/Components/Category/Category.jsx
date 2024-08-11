
const Category = ({category}) => {
    console.log(category);
    const {logo,category_name,availability} = category;
    return (
        <div className="bg-gradient-to-r from-indigo-50 to-blue-100 rounded-lg p-6 space-y-5">
            <img src={logo} alt="" />
            <div>
            <h2 className="">{category_name}</h2>
            <p>{availability}</p>
            </div>
        </div>
    );
};

export default Category;