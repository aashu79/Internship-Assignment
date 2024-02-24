import "./styles/style.scss"
import HorizontolCard from "../components/HorizontolCard"
import horizontalData from "../data/data1"


const CardSection = () => {
  return (
    <div className="cards-container">
        {
          horizontalData?.map((item, index)=>{
          
          return(<HorizontolCard data={item} key={index}/>)
          })
        }
    </div>
  )
}

export default CardSection