import React, { useEffect } from "react";
import offer from "../MenImages/offer.png"
import selfcare from "../MenImages/selfcare.png"
import gofor from "../MenImages/gofor.png"
import label from "../MenImages/label.png"
import inhouse from "../MenImages/inhouse.png"
import treat from "../MenImages/treat.png"
import collussion from "../MenImages/collussion.png"
import tommy from "../MenImages/tommy.png"
import north from "../MenImages/north.png"
import ellesse from "../MenImages/ellesse.png"
import carhartt from "../MenImages/carhartt.png"
import nike from "../MenImages/nike.png"
import marten from "../MenImages/marten.png"
import getgift from "../Brands/getgift.png"
import "../style/LandingPage.css";
import { Link } from "react-router-dom";
import{Box, Grid, GridItem, Image, Text} from "@chakra-ui/react"
import { useDispatch } from "react-redux";
import { getaddcartdata } from "../Redux/Addtocart/action";


const WomenPage = () => {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getaddcartdata())
      },[])
 
  return (
    <div>
      <br />
      <Grid className="maindiv" >
  <Link  to={"/menbrand"}>
     <Image style={{"width":"100%"}} src={offer}alt="offer"/>
     </Link>
      </Grid>
      <br />
      <br />
      {/* 2nd div */}
      {/* <Grid className="seconddiv"> */}
      <Grid gridTemplateColumns={{base:"repeat(1,1fr)",md:"repeat(2,1fr)",
      lg:"repeat(4,1fr)"}} gap={"10px"} width={"95%"} margin="auto" >
        <GridItem textAlign={"center"}>
          <Link to={"/mengifting"}>
          <img src={selfcare} alt="selfcare"/>
          </Link>
          <p  className="secondheading">ASOS EXCLUSIVES</p>
          <p>On your most-wanted list</p>
        </GridItem>

        <GridItem textAlign={"center"} >
        <Link to={"/menmarketplace"}>
        <img src={label} alt="label"/></Link>
          <h3 className="secondheading"> LABEL LOVE </h3>
          <p>Nike, adidas, and more!</p>
        </GridItem>

        <GridItem textAlign={"center"}>
          <Link to={"/menfacebody"}>
          <img src={inhouse} alt="inhouse"/></Link>
          <h3 className="secondheading"> SELF-CARE MOMENTS</h3>
          <p>Gift your BFF (you,obvs)</p>
        </GridItem>

        <GridItem textAlign={"center"} >
          <Link to={"/mengifting"}>
          <img src={gofor} alt="gofor"/></Link>
          <h3 className="secondheading"> GRAND BRANDS</h3>
          <p>Cos you deserve the best</p>
        </GridItem>
      </Grid>
<br />
<br />
      {/* 3rd div */}

      <div className="thirdmaindiv"> 
        <p className="h2">UPTO 50% OFF COSY GEAR! </p>
        <p className="h2">GIVE WINTER THE COLD SHOULDER </p>
        <p style={{"fontSize":"10px"}}>Limited time only.Selected styles marked down as shown</p>
      </div>
       <br />
      <br />

      {/* after offer page 2 div */}
      <Grid gridTemplateColumns={{base:"repeat(1,1fr)",md:"repeat(2,1fr)",
      lg:"repeat(2,1fr)"}} margin={"auto"}
       gap={"30px"} width={"80%"} justifyContent={"space-around"} >
        <GridItem >
          <Link to={"/menshoe"}>
          <Image  src={treat}alt="treat"/></Link>
          <Box style={{"textAlign":"center"}}>
          <Text className="h3">TRUE SOLEMATES </Text>
          <Text>Sure dating is coll but...</Text>
          <br />
          <Link to={"/menshoe"}>
          <button className="btn"> SHOP NOW</button>
          </Link>
          </Box>
        </GridItem>

        <GridItem >
        <Link to={"/mensportwear"}>
          <img src={collussion} alt="collussion"/>
          </Link>
          <div style={{"textAlign":"center"}}>
          <h3 className="h3"> TEAM WORK </h3>
          <p>Big on campus</p>
          <br />
          <Link to={"/mensportwear"}>
          <button className="btn"> SHOP THE BRAND</button>
          </Link>
        </div>
        </GridItem>

      </Grid>
      
<br />
<br />
{/* get gifting div */}
<div style={{"width":"100%","height":"115px"}}>
  <img src={getgift} alt="getgift"/>
</div>
<br />
<br />
<br />
<br />

{/* trending brands */}
<Grid 
gridTemplateColumns={{base:"repeat(2,1fr)",md:"repeat(3,1fr)",
lg:"repeat(6,1fr)"}} margin={"auto"}
 gap={"5px"} width={"100%"} justifyContent={"space-evenly"}> 
 <Link to={"/mengifting"}>
<Image  src={tommy} alt="tommy"/>
</Link>
<Link to={"/menclothing"}>
<Image src={north} alt="north"/>
</Link>
<Link to={"/menshoe"}>
<Image src={nike} alt="nike"/></Link>
<Link to={"/mendresses"}>
<Image src={carhartt} alt="carhartt"/>
</Link>
<Link to={"/mendresses"}>
<Image src={ellesse} alt="ellesse"/>
</Link>
<Link to={"/mendresses"}>
<Image src={marten} alt="marten"/>
</Link>
</Grid>    
<br />
<br />
<hr />
<br />
    </div>
  )
}

export default WomenPage

