import './styles/style.scss'
import Header from "../sections/Header"

import Navbar from "../sections/Navbar"
import CardSection from '../sections/CardSection'
import DealsSection from '../sections/DealsSection'
import SignUpSection from '../sections/SignUpSection'
import Footer from '../sections/Footer'


const LandingPage = () => {
  return (
    <div className='landing-page'>
        <Navbar/>
        <div className="body">
          <Header/>
          <CardSection/>
          <DealsSection/>
          <SignUpSection/>
         
        </div>
        <Footer/>
    </div>
  )
}

export default LandingPage