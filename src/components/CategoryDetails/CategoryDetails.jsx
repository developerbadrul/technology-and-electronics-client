import { useLoaderData } from "react-router-dom";

const CategoryDetails = () => {
    const singleCategory = useLoaderData()
    console.log(singleCategory);
    return (
        <div>
            CategoryDetails for ID: 
        </div>
    );
};

export default CategoryDetails;