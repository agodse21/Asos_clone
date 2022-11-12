import React from "react";
import offer from "../Images/offer.png"
import selfcare from "../Images/selfcare.png"
import gofor from "../Images/gofor.png"
import label from "../Images/label.png"
import inhouse from "../Images/inhouse.png"
import treat from "../Images/treat.png"
import collussion from "../Images/collussion.png"
import monkl from "../Brands/monkl.png"
import never from "../Brands/never.png"
import collusionlogo from "../Brands/collusionlogo.png"
import reclaimed from "../Brands/reclaimed.png"
import topshop from "../Brands/topshop.png"
import weekday from "../Brands/weekday.png"
import getgift from "../Brands/getgift.png"
import "../style/LandingPage.css";



const WomenPage = () => {
  return (
    <div>
      <div className="maindiv" >
      <a href="https://www.asos.com/customer-care/"   >
     <img style={{"width":"100%"}} src={offer}alt="offer"/>
     </a>
      </div>
      <br />
      <br />
      {/* 2nd div */}
      <div className="seconddiv">
        <div style={{ width: "24%"}}>
          <img src={selfcare} alt="selfcare"/>
          <p  className="secondheading">SELF CARE MOMENT </p>
          <p>It's treats Yourself Time</p>
        </div>

        <div style={{ width: "24%"}}>
        <img src={label} alt="label"/>
          <h3 className="secondheading"> LABEL LOVE </h3>
          <p>It's treats Yourself Time</p>
        </div>

        <div style={{ width: "24%"}}>
          <img src={inhouse} alt="inhouse"/>
          <h3 className="secondheading"> IN-HOUSE BRNDS</h3>
          <p>It's treats Yourself Time</p>
        </div>

        <div style={{ width: "24%"}}>
          <img src={gofor} alt="gofor"/>
          <h3 className="secondheading"> GO FOR GLAM </h3>
          <p>It's treats Yourself Time</p>
        </div>
      </div>
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
      <div className="afteroffer">
        <div style={{ width: "40%"}}>
          <img src={treat}alt="treat"/>
          <div style={{"textAlign":"center"}}>
          <h3 className="h3">TREAT YO,SELF BRANDS </h3>
          <p>Cos deserve the best</p>
          <br />
          <button className="btn"> SHOP NOW</button>
          </div>
        </div>

        <div style={{ width: "40%"}}>
          <img src={collussion} alt="collussion"/>
          <div style={{"textAlign":"center"}}>
          <h3 className="h3"> COLLUSIONS </h3>
          <p>POV:the club in 2062</p>
          <br />
          <button className="btn"> SHOP THE BRAND</button>
        </div>
        </div>

      </div>
      
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
<div className="brands"> 
<img className="bimg"  src={monkl} alt="monkl"/>
<img className="bimg" src={never} alt="never"/>
<img className="bimg" src={topshop} alt="topshop"/>
<img className="bimg" src={reclaimed} alt="reclaimed"/>
<img className="bimg" src={collusionlogo} alt="collusionlogo"/>
<img className="bimg" src={weekday} alt="weekday"/>
</div>    
<br />
<br />
<hr />
<br />
    </div>
  )
}

export default WomenPage

