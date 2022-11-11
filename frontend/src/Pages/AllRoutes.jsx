import { Box } from '@chakra-ui/react'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from '../components/Navbar/Navbar'
import { WomenAccessoris } from './womenProduct/WomenAcceseoris'
import { WomenAutumn } from './womenProduct/WomenAutumn'
import { WomenBrand } from './womenProduct/WomenBrand'
import { WomenCloathing } from './womenProduct/WomenClothing'
import { WomenDresses } from './womenProduct/WomenDresses'
import { WomenFaceBody } from './womenProduct/WomenFaceBody'
import { WomenGifting } from './womenProduct/WomenGifting'
import { WomenMarketPlace } from './womenProduct/WomenMarket'
import { WomenNewIn } from './womenProduct/WomenNewIn'
import { WomenOulet } from './womenProduct/WomenOutLet'
import { WomenSale } from './womenProduct/WomenSale'
import { WomenShoes } from './womenProduct/WomenShoes'
import { WomenSportWear } from './womenProduct/WomenSportwear'
import { WomenTopShop } from './womenProduct/WomenTopShop'

export const AllRoutes = () => {
  return (
    <Box>
        <Navbar />
        <Routes>
            <Route path='/women' element={<h1>women</h1>} />
            <Route path='/womensale' element={<WomenSale />} />
            <Route path='/womentopshop' element={<WomenTopShop />} />
            <Route path='/womenbrand' element={<WomenBrand />} />
            <Route path="/womenoutlet" element={<WomenOulet />} />
            <Route path="/womenmarketplace" element={<WomenMarketPlace />} />
            <Route path='/womenfacebody' element={<WomenFaceBody />} />
            <Route path='/womennewin' element={<WomenNewIn />} />
            <Route path='/womenclothing' element={<WomenCloathing />} />
            <Route path='/womendresses' element={<WomenDresses />} />
            <Route path='/womenshoe' element={<WomenShoes />} />
            <Route path='/womensportwear' element={<WomenSportWear />} />
            <Route path='/womenaccessories' element={<WomenAccessoris />} />
            <Route path='/womenautumn' element={<WomenAutumn />} />
            <Route path='/womengifting' element={<WomenGifting />} />
        </Routes>
    </Box>
  )
}
