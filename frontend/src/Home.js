import {React} from 'react'
import Ads from './components/Ad-section'
import Products from './components/Products'
import './Home.css'
import MostLikedProducts from './components/Most-Liked-Products'


export default function Home() {
   
  
    return (
        <div >
            <Ads/>
            <Products/>
            <MostLikedProducts/>
          </div>
    )
}
