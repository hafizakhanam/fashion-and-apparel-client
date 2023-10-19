import { useLoaderData, useParams } from "react-router-dom";

const ProductDetails = () => {
    const cardsData = useLoaderData();
    const {id} = useParams();
    console.log(id, cardsData)
    const idInt = parseInt(id);
    const cardData =  cardsData.find(cardData => cardData.id === idInt);
    const {cover_img, title, details, price} = cardData;
    return (
        <div className="py-20 bg-white">
            <div className="max-w-[1340px] mx-auto px-4">
                <div className="flex justify-center relative card-details-banner">
                    <img className="text-center max-h-[600px] rounded-lg mb-16" src={cover_img} alt="Image" />
                </div>
                <div className="text-blue-950 text-2xl font-medium"><span>Price: </span> {price}</div>
                <h2 className="card-title text-4xl font-bold text-[#0B0B0B] mb-6 mt-6">{title}</h2>
                <p className="text-[#0B0B0BB2] text-justify">{details}</p>
            </div>
        </div>

    );
};

export default ProductDetails;