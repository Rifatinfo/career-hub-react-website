import { useEffect, useState } from "react";
import Category from "../Category/Category";

const CategoryList = () => {

    const [category, setCategory] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategory(data))
    }, []);

    return (
        <div>
            <div>
                <h1 className="text-5xl font-bold text-center">Job Category List</h1>
                <p className="text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid md:grid-cols-4 gap-3">

                {
                    category.map(category => <Category key={category.id} category={category}></Category>)
                }
            </div>
        </div>

    );
};

export default CategoryList;
