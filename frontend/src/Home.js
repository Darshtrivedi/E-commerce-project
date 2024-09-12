import {React} from 'react'
import Navbar from './components/Navbar'
import Ads from './components/Ad-section'
import Products from './components/Products'
import './Home.css'
import MostLikedProducts from './components/Most-Liked-Products'


export default function Home() {
   
  
    return (
        <div >
            <Navbar />
            <Ads/>
            <Products/>
            <MostLikedProducts/>
          </div>
    )
}
