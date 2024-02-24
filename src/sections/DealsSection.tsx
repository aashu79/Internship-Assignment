import "./styles/style.scss"
import DealCard from '../components/DealCard'
import dealData from '../data/data2'

const DealsSection = () => {
  return (
    <div className='main-container'>
        <h4>Realted deals you might like</h4>
        <div className='card-container'>
            {
              dealData?.map((item, index)=>{
              return  <DealCard data={item} key={index}/>
              })
            }
        </div>
    </div>
  )
}

export default DealsSection