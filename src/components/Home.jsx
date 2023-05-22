import React from 'react'
import Hero from   './Hero'
import Categories from   './Categories'
import Product from   './Product'
import PopularProduct from   './PopularProduct'
import Deals from   './Deals'
import Tranding from   './Tranding'
import Needs from   './Needs'
import Service from   './Service'
import NavTxt from './NavTxt'

export default function Home() {
  return (
    <div>
        <NavTxt />
              <Hero />
              <Categories /> 
              <Product />
              <PopularProduct />
              {/* <productCart /> */}
              <Deals />
              <Tranding />
              <Needs />
              <Service />
            
    </div>
  )
}


