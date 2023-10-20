import { useLoaderData } from "react-router-dom";
import AdvSlider from "../AdvSlider/AdvSlider";

const ProductDetails = () => {
    const productData = useLoaderData();
    const { productImage, productName, brandName,  productType, productPrice, shortDes, rating} = productData;
    return (
        <div className="m-0">
            <AdvSlider></AdvSlider>
            <div className="py-40 bg-white">
                <div className="max-w-[1340px] mx-auto px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <img className="text-center rounded-lg w-full" src={productImage} alt="Image" />
                        <div className="p-8">
                            <h2 className="card-title text-lg font-semibold text-blue-950">Ratings: <span className="text-sm">{rating}</span></h2>
                            <h2 className="card-title text-lg font-semibold text-blue-950">Name: <span className="text-sm">{productName}</span></h2>
                            <h2 className="card-title text-lg font-semibold text-blue-950">Brand: <span className="text-sm">{brandName}</span></h2>
                            <h2 className="card-title text-lg font-semibold text-blue-950">Type: <span className="text-sm">{productType}</span></h2>
                            <h2 className="card-title text-lg font-semibold text-blue-950">Price: <span className="text-sm">{productPrice}</span></h2>
                            <p className="text-[#0B0B0BB2] text-justify"><span className="text-lg font-semibold text-blue-950">Description:</span><br/> {shortDes}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        

    );
};

export default ProductDetails;