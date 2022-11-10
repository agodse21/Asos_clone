import React from 'react'
import american from "../Brands/american.png"
import mastercard from "../Brands/mastercard.png"
import paypal from "../Brands/paypal.png"
import visaelectron from "../Brands/visaelectron.png"
import visa from "../Brands/visa.png"
import insta from "../Images/insta.png"
import fb from "../Images/fb.png"
import snapchat from "../Images/snapchat.png"

const Footer = () => {
  return (
    <div>

<div style={{"display":"flex","gap":"10px"}}> 
<img style={{"width":"2%","borderRadius":"40%"}} src={fb} alt="fb"/>
<img style={{"width":"3%","borderRadius":"40%"}} src={insta} alt="insta"/>
<img style={{"width":"2.5%","borderRadius":"40%"}} onmouseenter="bigImg(this)" src={snapchat} alt="snapchat"/>

<img style={{"width":"3%"}} src={visa} alt="visa"/>
<img style={{"width":"3%"}} src={mastercard} alt="mastercard"/>
<img style={{"width":"3%"}} src={paypal} alt="paypal"/>
<img style={{"width":"3%"}} src={american} alt="american"/>
<img style={{"width":"3%","height":"2%"}} src={visaelectron} alt="visaelectron"/>
</div>
<br />
<br />
{/* <img onmouseenter="bigImg(this)" src="smiley.gif" alt="Smiley"></img> */}
<br />
{/* footer info page */}
<div style={{"display":"flex"}}>
<div style={{"width":"23%"}}>
    <p>HELP & INFORMATION</p>
    <p>Help</p>
    <p>Track Order</p>
    <p>Delivery & Returns</p>
    <p>Sitemap</p>
</div>
<div style={{"width":"23%"}}>

    <p>ABOUT ASOS</p>
    <p>About asos</p>
    <p>Career at ASOS</p>
    <p>Corporate responsibilty</p>
    <p>Investor's site</p>
</div>
<div style={{"width":"23%","justifyContent":"left"}}>

    <p>MORE FROM ASOS</p>
    <p>Mobile and asos apps</p>
    <p>ASOS Marketplace</p>
    <p>Gift vouchers</p>
    <p>Black Friday</p>
    <p>ASOS x Thrift+</p>

</div>
<div style={{"width":"23%"}}>

    <p>SHOPPING FROM</p>
    <p>You're in <span></span> | CHANGE</p>
    
</div>


</div>
<br />
<br />
<br />
<br />

    </div>
  )
}

export default Footer