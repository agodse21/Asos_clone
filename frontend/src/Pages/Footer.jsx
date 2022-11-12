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
import { Grid, GridItem, Image ,Text,Link} from '@chakra-ui/react'
// import { Link } from 'react-router-dom'
// style={{"display":"flex","width":"95%"}}
const Footer = () => {
  return (
    <div>
        <Grid  gridTemplateColumns={{base:"repeat(4,1fr)",md:"repeat(4,1fr)",
      lg:"repeat(8,1fr)"}} margin={"auto"} gap={"20px"}
        width={"90%"} justifyContent={"center"}>
        <GridItem  >  
            <Link href="https://www.facebook.com/ASOS/" target="_blank" >
        <Image className='fb' src={fb} alt="fb"/></Link>
        </GridItem> 
        <GridItem> 
        <Link href="https://www.instagram.com/asos/">
        <Image className='insta' src={insta} alt="insta"/>
        </Link>
        </GridItem> 
        <GridItem  >   
        <Link href="https://www.snapchat.com/add/asosfashion">
        <Image  className='snapchat' src={snapchat} alt="snapchat"/>
        </Link>
        </GridItem>
        
        <GridItem  > 
         <Image className='visa' src={visa} alt="visa"/></GridItem  >
         <GridItem  >
        <Image className='master' src={mastercard} alt="mastercard"/></GridItem  >
        <GridItem  >
        <Image className='paypal' src={paypal} alt="paypal"/>
        </GridItem>
        <GridItem  >
        <Image className='american' src={american} alt="american"/>
        </GridItem>
        <GridItem  >
        <Image className='electron' src={visaelectron} alt="visaelectron"/> 
         </GridItem>
        </Grid>
        <br />

{/* footer info page */}
<Grid  
 gridTemplateColumns={{base:"repeat(2,1fr)",md:"repeat(2,1fr)",
 lg:"repeat(4,1fr)"}} margin={"auto"} gap={"20px"} height={"10rem"}
 lineHeight={"30px"}
   width={"90%"} justifyContent={"center"} >
<GridItem className='helpdiv' >
    <Text className='head' >HELP & INFORMATION</Text>
    <a href="https://www.asos.com/customer-care/" target="_blank" > <Text>Help </Text>
     <Text>Track Order</Text> </a>
     <a href="https://www.asos.com/payments-and-deliveries/delivery/" target="_blank" > <Text>Delivery & Returns</Text></a>
    <Text>Sitemap</Text>
</GridItem>
<GridItem className='helpdiv'>
    <Text className='head'>ABOUT ASOS</Text>
    <a href="https://www.asos.com/about/" target="_blank" >  <Text>About asos</Text></a>
    <a href="https://asoscareers.asos.com/" target="_blank" > <Text>Career at ASOS</Text></a>
    <Text>Corporate responsibilty</Text>
    <Text>Investor's site</Text>
</GridItem>
<GridItem className='helpdiv'>
    <Text className='head'>MORE FROM ASOS</Text>
    <a href="https://www.asos.com/discover/our-apps/" target="_blank" > <Text>Mobile and asos apps</Text></a>
    <a href="https://marketplace.asos.com/?ctaref=Global+footer" target="_blank" ><Text>ASOS Marketplace</Text></a>
    <Text>Gift vouchers</Text>
    <Text>Black Friday</Text>
    <Text>ASOS x Thrift+</Text>

</GridItem>
<GridItem className='helpdiv'>
    <Text className='head'>SHOPPING FROM</Text>
    
    <Text>You're in  <span><img style={{"width":"20px"}} src={india} alt="india"/></span>  </Text>
    <Text>
     | CHANGE </Text> 
    
</GridItem>
</Grid>
<br />
</div>
  )
}

export default Footer