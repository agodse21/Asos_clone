import React from "react";
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
<img className="bimg"  src={tommy} alt="tommy"/>
<img className="bimg" src={north} alt="north"/>
<img className="bimg" src={nike} alt="nike"/>
<img className="bimg" src={carhartt} alt="carhartt"/>
<img className="bimg" src={ellesse} alt="ellesse"/>
<img className="bimg" src={marten} alt="marten"/>
</div>    
<br />
<br />
<hr />
<br />
    </div>
  )
}

export default WomenPage

