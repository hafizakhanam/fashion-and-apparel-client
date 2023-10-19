import { Link } from "react-router-dom";

const Product = ({product}) => {
    const { _id, productImage, productName, brandName,  productType, productPrice, shortDes, rating} = product;
    return (
        <Link to={`/product/${_id}`}>
            <div className="card bg-blue-50 border rounded-lg ">
                <img className="rounded-t-lg max-h-48" src={productImage} alt="Image" />
                <div className="card-body bg-blue-950 rounded-b-lg">
                    <h2 className="card-title text-lg font-semibold text-white">Ratings: <span className="text-sm">{rating}</span></h2>
                    <h2 className="card-title text-lg font-semibold text-white">Name: <span className="text-sm">{productName}</span></h2>
                    <h2 className="card-title text-lg font-semibold text-white">Brand: <span className="text-sm">{brandName}</span></h2>
                    <h2 className="card-title text-lg font-semibold text-white">Type: <span className="text-sm">{productType}</span></h2>
                    <h2 className="card-title text-lg font-semibold text-white">Price: <span className="text-sm">{productPrice}</span></h2>
                    <p className="text-white">{shortDes}</p>
                </div>
            </div>
        </Link>
    );
};

export default Product;