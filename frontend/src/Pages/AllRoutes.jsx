
import Maincartpage from "../components/Addtocart/Maincartpage";

import { Box } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "../components/Navbar/Navbar";

import Footer from "./Footer";

import { CheckOut } from "./CheckOut";

import { MenAccessoris } from "./Menproduct/MenAcceseoris";
import { MenAutumn } from "./Menproduct/MenAutumn";
import { MenBrand } from "./Menproduct/MenBrand";
import { MenCloathing } from "./Menproduct/MenClothing";
import { MenDresses } from "./Menproduct/MenDresses";
import { MenFaceBody } from "./Menproduct/MenFaceBody";
import { MenGifting } from "./Menproduct/MenGifting";
import { MenMarketPlace } from "./Menproduct/MenMarket";
import { MenNewIn } from "./Menproduct/MenNewIn";
import { MenOulet } from "./Menproduct/MenOutLet";
import { MenSale } from "./Menproduct/MenSale";
import { MenShoes } from "./Menproduct/MenShoes";
import { MenSportWear } from "./Menproduct/MenSportwear";
import { MenTopShop } from "./Menproduct/MenTopShop";
import SigninandSignup from "./Signin&Signup";

import WomenPage from "./WomenPage";
import MenPage from "./MenPage";

import SinglePageProduct from "./SinglePageProduct";

import { WomenAccessoris } from "./womenProduct/WomenAcceseoris";
import { WomenAutumn } from "./womenProduct/WomenAutumn";
import { WomenBrand } from "./womenProduct/WomenBrand";
import { WomenCloathing } from "./womenProduct/WomenClothing";
import { WomenDresses } from "./womenProduct/WomenDresses";
import { WomenFaceBody } from "./womenProduct/WomenFaceBody";
import { WomenGifting } from "./womenProduct/WomenGifting";
import { WomenMarketPlace } from "./womenProduct/WomenMarket";
import { WomenNewIn } from "./womenProduct/WomenNewIn";
import { WomenOulet } from "./womenProduct/WomenOutLet";
import { WomenSale } from "./womenProduct/WomenSale";
import { WomenShoes } from "./womenProduct/WomenShoes";
import { WomenSportWear } from "./womenProduct/WomenSportwear";
import { WomenTopShop } from "./womenProduct/WomenTopShop";
import { SearchPage } from "./SearchPage";
import { RequireAuth } from "../components/RequiredAuth";
import { WishList } from "./WishList";

export const AllRoutes = () => {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path="/signup" element={<SigninandSignup />} />
        <Route path="/signin" element={<SigninandSignup />} />

        <Route path="/womenhome" element={<WomenPage />} />
        <Route path="/" element={<WomenPage />} />
        <Route path="/checkout" element={<RequireAuth><CheckOut /></RequireAuth>} />
        <Route path="/wishlist" element={<RequireAuth><WishList /></RequireAuth>} />
        <Route path="/womentopshop" element={<RequireAuth><WomenTopShop /></RequireAuth>} />
        <Route path="/womensale" element={<RequireAuth><WomenSale /></RequireAuth>} />
        <Route path="/womenbrand" element={<RequireAuth><WomenBrand /></RequireAuth>} />
        <Route path="/womenoutlet" element={<RequireAuth><WomenOulet /></RequireAuth>} />
        <Route path="/womenmarketplace" element={<RequireAuth><WomenMarketPlace /></RequireAuth>} />
        <Route path="/womenfacebody" element={<RequireAuth><WomenFaceBody /></RequireAuth>} />
        <Route path="/womennewin" element={<RequireAuth><WomenNewIn /></RequireAuth>} />
        <Route path="/womenclothing" element={<RequireAuth><WomenCloathing /></RequireAuth>} />
        <Route path="/womendresses" element={<RequireAuth><WomenDresses /></RequireAuth>} />
        <Route path="/womenshoe" element={<RequireAuth><WomenShoes /></RequireAuth>} />
        <Route path="/womensportwear" element={<RequireAuth><WomenSportWear /></RequireAuth>} />
        <Route path="/womenaccessories" element={<RequireAuth><WomenAccessoris /></RequireAuth>} />
        <Route path="/womenautumn" element={<RequireAuth><WomenAutumn /></RequireAuth>} />
        <Route path="/womengifting" element={<RequireAuth><WomenGifting /></RequireAuth>} />
        <Route path="/menhome" element={<MenPage />} />

        <Route path="/mensale" element={<RequireAuth><MenSale /></RequireAuth>} />
        <Route path="/mentopshop" element={<RequireAuth><MenTopShop /></RequireAuth>} />
        <Route path="/menbrand" element={<RequireAuth><MenBrand /></RequireAuth>} />
        <Route path="/menoutlet" element={<RequireAuth><MenOulet /></RequireAuth>} />
        <Route path="/menmarketplace" element={<RequireAuth><MenMarketPlace /></RequireAuth>} />
        <Route path="/menfacebody" element={<RequireAuth><MenFaceBody /></RequireAuth>} />
        <Route path="/mennewin" element={<RequireAuth><MenNewIn /></RequireAuth>} />
        <Route path="/menclothing" element={<RequireAuth><MenCloathing /></RequireAuth>} />
        <Route path="/mendresses" element={<RequireAuth><MenDresses /></RequireAuth>} />
        <Route path="/menshoe" element={<RequireAuth><MenShoes /></RequireAuth>} />
        <Route path="/mensportwear" element={<RequireAuth><MenSportWear /></RequireAuth>} />
        <Route path="/menaccessories" element={<RequireAuth><MenAccessoris /></RequireAuth>} />
        <Route path="/menautumn" element={<RequireAuth><MenAutumn /></RequireAuth>} />
        <Route path="/mengifting" element={<RequireAuth><MenGifting /></RequireAuth>} />
        <Route path="/productdetails/:id" element={<RequireAuth><SinglePageProduct /></RequireAuth>} />
           <Route path="/cart" element={<RequireAuth><Maincartpage/></RequireAuth>}></Route>
           <Route path="/searchproduct" element={<RequireAuth><SearchPage /></RequireAuth>}></Route>
           
      </Routes>
<Footer />

      
    </Box>

  );
};