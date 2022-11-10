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




const LandingPage = () => {
  return (
    <div>
      <div style={{ width: "95%","margin":"auto"}}>
     <img src={offer}alt="offer"/>
      </div>
      <br />
      <br />
      {/* 2nd div */}
      <div style={{ width: "95%", margin: "auto" ,"display":"flex","justifyContent":"space-between"}}>
        <div style={{ width: "24%"}}>
          <img src={selfcare} alt="selfcare"/>
          <h3 style={{"fontWeight":"bold","fontSize":"18px"}}>SELF CARE MOMENT </h3>
          <p>It's treats Yourself Time</p>
        </div>

        <div style={{ width: "24%"}}>
        <img src={label} alt="label"/>
          <h3 style={{"fontWeight":"bold","fontSize":"18px"}}> LABEL LOVE </h3>
          <p>It's treats Yourself Time</p>
        </div>

        <div style={{ width: "24%"}}>
          <img src={inhouse} alt="inhouse"/>
          <h3 style={{"fontWeight":"bold","fontSize":"18px"}}> IN-HOUSE BRNDS</h3>
          <p>It's treats Yourself Time</p>
        </div>

        <div style={{ width: "24%"}}>
          <img src={gofor} alt="gofor"/>
          <h3 style={{"fontWeight":"bold","fontSize":"18px"}}> GO FOR GLAM </h3>
          <p>It's treats Yourself Time</p>
        </div>
      </div>
<br />
<br />
      {/* 3rd div */}

      <div style={{"width":"100%","height":"115px","backgroundColor":"#f799ba"}}> 
        <p style={{"fontWeight":"bold","fontSize":"28px","fontStyle":"italic","color":"darkblack"}}>UPTO 50% OFF COSY GEAR! </p>
        <p style={{"fontWeight":"bold","fontSize":"28px","fontStyle":"italic"}}>GIVE WINTER THE COLD SHOULDER </p>
        <p  style={{"fontSize":"10px"}}>Limited time only.Selected styles marked down as shown</p>
      </div>
       <br />
      <br />

      {/* after offer page 2 div */}
      <div style={{ width: "95%", margin: "auto" ,"display":"flex","justifyContent":"space-evenly"}}>
        <div style={{ width: "40%"}}>
          <img src={treat}alt="treat"/>
          <h3 style={{"fontWeight":"bold","fontSize":"30px"}}>TREAT YO,SELF BRANDS </h3>
          <p>Cos deserve the best</p>
          <br />
          <button style={{"fontSize":"25px","border":"2px solid black","padding":"10px"}}> SHOP NOW</button>

        </div>

        <div style={{ width: "40%"}}>
          <img src={collussion} alt="collussion"/>
          <h3 style={{"fontWeight":"bold","fontSize":"30px"}}> COLLUSIONS </h3>
          <p>POV:the club in 2062</p>
          <br />
          <button style={{"fontSize":"25px","border":"2px solid black","padding":"10px"}}> SHOP THE BRAND</button>
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
<div style={{"display":"flex","margin":"auto","justifyContent":"space-evenly"}}> 
<img style={{"width":"16%"}}  src={monkl} alt="monkl"/>
<img style={{"width":"16%"}} src={never} alt="never"/>
<img style={{"width":"16%"}} src={topshop} alt="topshop"/>
<img style={{"width":"16%"}} src={reclaimed} alt="reclaimed"/>
<img style={{"width":"16%"}} src={collusionlogo} alt="collusionlogo"/>
<img style={{"width":"16%"}} src={weekday} alt="weekday"/>
</div>    
<br />
<br />
<hr />
<br />
<br />

    </div>
  );
};

export default LandingPage;
