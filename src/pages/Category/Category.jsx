import { Link } from "react-router-dom";

const Category = ({category}) => {
    const {_id, productName, productType} = category;


    return (
        <Link to={`/category/${_id}`}>
            <div className="card" data-aos="fade-up">
                <img className="rounded-t-lg" src="" alt="Image" />
                <div className="card-body bg-blue-50 rounded-b-lg">
                    
                    <h2 className="card-title text-xl font-semibold text-blue-950">{productName}</h2>

                </div>
            </div>
        </Link>
    );
};

export default Category;