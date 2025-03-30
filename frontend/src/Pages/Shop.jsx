import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
import NewCollection from '../Components/New Collection/NewCollection'
import NewsLetter from '../Components/NewsLetter/NewsLetter';

import ShopCategory from './ShopCategory'
import LoginSignup from './LoginSignup'
import Breadcrum from '../Components/Breadcrum/Breadcrum'

const shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewCollection />
      <NewsLetter />
      <ShopCategory/>
    
      <Popular/>
      
      
      
     
     
    </div>
  )
}

export default shop