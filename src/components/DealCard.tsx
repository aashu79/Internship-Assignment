import "./styles/_dealCard.scss";
import image from "../assets/image.png";

interface propType{
   data:{
    name: string;
    description: string;
    price: number;
    originalPrice: number;
    discount: string;
    dealType: string;
   }

}

const DealCard = ({data}: propType) => {
  return (
    <div className="deal-card">
      <img src={image} alt="image" />
      <div className="offer">
        <p>{data?.discount}</p> <p>{data?.dealType}</p>
      </div>
      <p className="name">{data?.name}</p>
      <p className="description">{data?.description}</p>
      <p className="price">${data?.price}</p>
      <p className="prev-price">${data?.originalPrice}</p>
      <p className="discount">{data?.discount}</p>
      <button>View deals</button>
    </div>
  );
};

export default DealCard;
