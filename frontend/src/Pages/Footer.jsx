import React from 'react'
import american from "../Brands/american.png"
import mastercard from "../Brands/mastercard.png"
import paypal from "../Brands/paypal.png"
import visaelectron from "../Brands/visaelectron.png"
import visa from "../Brands/visa.png"
import insta from "../Images/insta.png"
import fb from "../Images/fb.png"
import snapchat from "../Images/snapchat.png"
import india from "../Brands/india.png"
import "../style/Footer.css";
// style={{"display":"flex","width":"95%"}}
const Footer = () => {
  return (
    <div>
<div >
<div className='footermain' >  
<img className='fb' src={fb} alt="fb"/>
<img className='insta' src={insta} alt="insta"/>

<img  className='snapchat' src={snapchat} alt="snapchat"/>

<img className='visa' src={visa} alt="visa"/>
<img className='master' src={mastercard} alt="mastercard"/>
<img className='paypal' src={paypal} alt="paypal"/>
<img className='american' src={american} alt="american"/>
<img className='electron' src={visaelectron} alt="visaelectron"/>
</div>
</div>
<br />

{/* footer info page */}
<div className='lastfooter' >
<div className='helpdiv' >
    <p className='head' >HELP & INFORMATION</p>
    <a href="https://www.asos.com/customer-care/" target="_blank" > <p>Help </p>
     <p>Track Order</p> </a>
     <a href="https://www.asos.com/payments-and-deliveries/delivery/" target="_blank" > <p>Delivery & Returns</p></a>
    <p>Sitemap</p>
</div>
<div className='helpdiv'>
    <p className='head'>ABOUT ASOS</p>
    <a href="https://www.asos.com/about/" target="_blank" >  <p>About asos</p></a>
    <a href="https://asoscareers.asos.com/" target="_blank" > <p>Career at ASOS</p></a>
    <p>Corporate responsibilty</p>
    <p>Investor's site</p>
</div>
<div className='helpdiv'>
    <p className='head'>MORE FROM ASOS</p>
    <a href="https://www.asos.com/discover/our-apps/" target="_blank" > <p>Mobile and asos apps</p></a>
    <a href="https://marketplace.asos.com/?ctaref=Global+footer" target="_blank" ><p>ASOS Marketplace</p></a>
    <p>Gift vouchers</p>
    <p>Black Friday</p>
    <p>ASOS x Thrift+</p>

</div>
<div className='helpdiv'>
    <p className='head'>SHOPPING FROM</p>
    <div style={{"display":"flex"}}>
    <p>You're in  <span><img style={{"width":"20px"}} src={india} alt="india"/></span>  </p>
    <p>
     | CHANGE </p> 
    </div>   
</div>
</div>
<br />
</div>
  )
}

export default Footer