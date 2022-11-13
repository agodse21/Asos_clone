import { Box , HStack,VStack, Image, Text,Select, Button, Collapse} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react';
import { FaTag , FaClock, FaHeart, FaTruck} from "react-icons/fa";
import { useNavigate, useParams}  from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from 'axios';
// import { CART } from '../Redux/App/acttionTypes';
import { Addtocart } from '../Redux/App/action'
const SinglePageProduct = () => {
    const [size,setSize]= useState("")
    const [show, setShow] =useState(false)
    const handleToggle = () => setShow(!show)
    let userData= JSON.parse(localStorage.getItem('userdata'))||[];
    let token=userData.token;
    console.log(userData.token)
    const {id}= useParams();
    const dispatch=useDispatch();
    const navigate= useNavigate();
    // const products  = useSelector((state) => state.AppReducer.products);
    // const cart = useSelector((state) => state.AppReducer.cart);
    console.log(id)
    let type=id.split("_")[0];  
    let  typeid = id.split("_")[1];
    const [singleProduct, setSingleProduct]= useState({})
    const [imgSrc,setImgSrc]=useState("")
    // var temp=[];
    
    // console.log(temp)
    const getdata = async () => {
    console.log("inside getdata ",type,typeid,token)
       await axios.get(`https://asos-backend.onrender.com/${type}product/?product_id=${typeid}`, {
        headers: {
            Authorization:`Bearer ${token}`
        }
    }).then((r)=>{setSingleProduct(r.data.data[0])
        setImgSrc(r.data.data[0].mainImage||r.data.data[0].mainimage)}).catch((err)=>console.log(err))
    }

    useEffect(()=>{
       
            getdata()
        
    }, );
    // console.log("product",products)
    const handleAddtobag=()=>{
       if(singleProduct?._id){
        let price=singleProduct?.price;
        if(singleProduct?.price[0]==="�"){
            price=  price.split("�")[1]
        }
        else if(singleProduct?.price[0]==="£"){
            price=  price.split("£")[1]
        }
        else{
            price=singleProduct?.price
        }
        
        // .split("�")[1] 
        // || temp.price.split("£")[1];
        console.log(price);
        let obj={
            
            product_id:singleProduct._id,
            product_details:{
                product_img:singleProduct?.mainImage || singleProduct?.mainimage,
                product_price:price,
                product_name:singleProduct?.name,
                product_color:singleProduct?.color
            },
            item_no:1,
            size:singleProduct?.size
        };
        console.log(obj)

      dispatch( Addtocart(obj))
      navigate("/cart")
      
       }
       else{
        alert("Your internet is slow just  wait and try agian")
       }
        // dispatch({type: CART, payload:temp });
        // navigate("/cart")
      }
      
     
    
    return (

        <Box className="Box" width={"60%"} height={"600px"}  margin={"auto"} marginTop={"5px"} padding={"10px"}> 

        <Box className="Box" width={"60%"}   margin={"auto"} marginTop={"5px"} padding={"10px"}> 

          
          
          <HStack className="Box" width={"100%"} height={"100%"}  marginLeft={"5px"} >
           

          <VStack width={"10%"}  marginLeft={"5px"}  height={"100%"}>
            <Box className="Box" marginLeft={"5px"} marginTop={"10px"}>
                 <Box className="Box"marginLeft={"15px"} marginTop={"20px"}>
                 <Image
                    width={"80%"}
                    height={"40%"}
                    onClick={()=>setImgSrc(singleProduct.backImage)}
                    src={singleProduct.backImage}
                    cursor={"pointer"}
                  />
                     {/* backimage */}
                 </Box>
                 <Box className="Box" marginLeft={"15px"} marginTop={"20px"}>
                    <Image
                     width={"80%"}
                     height={"40%"}
                     onClick={()=>setImgSrc(singleProduct.sideImage)}
                     src={singleProduct.sideImage}
                     cursor={"pointer"}
                    />
                    {/* sideImage */}
                 </Box>
                 <Box className="Box" marginLeft={"15px"} marginTop={"20px"}>
                    <Image
                     width={"80%"}
                     height={"40%"}
                     onClick={()=>setImgSrc(singleProduct.sideImage)}
                     src={singleProduct.sideImage}
                     cursor={"pointer"}
                    />
                  
                 </Box>
                 {/* mainImage  */}
                 <Box className="Box" marginLeft={"15px"} marginTop={"20px"}>
                    <Image
                     width={"80%"}
                     height={"40%"}
                     onClick={()=>setImgSrc(singleProduct.backImage)}
                     src={singleProduct.backImage}
                     cursor={"pointer"}
                    />
                  
                 </Box>
            </Box>
            </VStack>
                <Box className="Box"  width={"48%"} height={"100%"}>
                    
                    <Box className="Box" width={"98%"} height={"100%"}>
                    <Image 
                      width={"100%"}
                      height={"100%"}
                      margin={"auto"} cursor={"pointer"}
                      onClick={()=>setImgSrc(singleProduct.mainImage)}
                      src={imgSrc}
                    />
                    </Box>
                  
                </Box>
            
                {/* //Description */}
                 <Box className="Box" width={"38%"} height={"100%"}  marginLeft={"10px"}>
                  
                    <Box className="Box" marginLeft={"10px"} >
                        <Text >{singleProduct.name}</Text>
                    </Box>
                    <Box className="Box" marginLeft={"10px"}  marginTop={"5px"}>
                        <Text>{singleProduct.price}</Text>
                    </Box>
                    <Box className="Box"  marginLeft={"10px"} width={"200px"} marginTop={"5px"} backgroundColor={"#cde2f5"} border={"2 px #cde2f5"}>
                        <HStack>
                        <Box><FaTag/></Box>
                        <VStack>
                        <Box>30% OFF EVERYTHING!
                        
                        <Box>
                            <HStack>
                            <Box>
                            With code:
                            </Box>
                            <Box fontWeight={"bold"}>JUST4YOU</Box>
                            </HStack>
                        </Box>
                        </Box>
                        </VStack>
                        </HStack>
                        
                    </Box>
                    <Box className="Box" marginLeft={"5px"} marginTop={"10px"} >
                        <Box>COLOUR:{singleProduct.color}</Box>
                    </Box>
                    <Box className="Box" marginLeft={"5px"} marginTop={"10px"}>
                        <Box className="Box"marginLeft={"5px"} marginTop={"10px"}> Size:</Box>
                        <Select onChange={(e)=>setSize(e.target.value)} value={size}  width={"95%"} marginLeft={"5px"} marginTop={"10px"} placeholder='Please Select'>
                        <option value='s'>s</option>
                        <option value='m'>m</option>
                        <option value='xl'>xl</option>
                        <option value='xs'>xs</option>
                        <option value='l'>l</option>
                      
                        </Select>
                    </Box>
                
                    <Box className="Box" marginLeft={"5px"} marginTop={"10px"}>
                        <HStack marginLeft={"5px"} marginTop={"10px"}>
                            <Box className="Box"><FaClock/></Box>
                            <Box className="Box">LOW IN STOCK</Box>
                        </HStack>

                    </Box>
                    {/* //Add to bag Button */}

                    <Box className="Box" marginLeft={"5px"} marginTop={"10px"}>
                        <HStack className="Box" marginLeft={"5px"} marginTop={"10px"}>
                        <Button className="Box" width={"80%"} marginLeft={"5px"}
                         _hover={{color:"white" , bg:"fullgreen"}} marginTop={"5px"}
                          textAlign={"center"} color={"white"} backgroundColor={"green"}
                           onClick={()=>handleAddtobag()} >ADD TO BAG</Button>
                        <Button className="Box"><Box className="Box" textAlign={"center"} marginLeft={"5px"} marginTop={"10px"}  > < FaHeart/> </Box></Button>
                        </HStack>
                    </Box>

                    <Box className="Box" marginLeft={"5px"} marginTop={"15px"} border={"1px solid grey"}>
                        <HStack className="Box" marginLeft={"5px"} marginTop={"5px"}>
                        <Box className="Box" marginLeft={"5px"} marginTop={"5px"}><FaTruck/></Box>
                            <Box className="Box" marginLeft={"5px"} marginTop={"5px"}>
                                <VStack className="Box"marginLeft={"5px"} marginTop={"5px"}>
                                <Box className="Box"  textAlign={"start"} marginTop={"5px"}>Free Delievery
                                <Box className="Box">Ts&Cs apply. More delivery info</Box></Box>
                                
                                </VStack>
                            </Box>
                        </HStack>
                    </Box>
                </Box>
            </HStack>
            {/* product Details  */}
            <Collapse  startingHeight={20} in={show}>
            <Box className="Box" width={"100%"} height={"400px"}  margin={"auto"} marginTop={"15px"} padding={"10px"}>
                 <HStack className="Box" width={"100%"} height={"100%"}  marginLeft={"5px"} >
                    <Box width={"30%"}  marginLeft={"5px"}  height={"100%"}>
                        <Box textAlign={"start"} fontWeight={"bold"}  marginTop={"80px"}>PRODUCT DETAILS
                     
                        </Box>
                        <Text>
                          {singleProduct.productDetails}</Text>
                    </Box>

                    <Box className="Box" width={"35%"} height={"100%"}  margin={"auto"} marginTop={"15px"} padding={"10px"}>
                        <VStack className="Box" marginTop={"5px"} >
                            <Box className="Box" height={"100px"} width={"100%"}  marginTop={"5px"} >
                                <Box className="Box" textAlign={"start"} fontWeight={"bold"} marginTop={"5px"} >PRODUCT CODE
                                 
                                </Box>
                                <Text>123274070</Text>
                            </Box>
                            <Box className="Box" height={"100%"} width={"100%"} marginTop={"5px"}>
                                <Box className="Box" textAlign={"start"} fontWeight={"bold"} marginTop={"5px"}>BRAND
                               
                                </Box>
                                <Text>
                                {singleProduct.brand}</Text>
                            </Box>
                        </VStack>
                    </Box>

                    <Box className="Box" width={"35%"} height={"100%"}  margin={"auto"} marginTop={"15px"} padding={"10px"}>
                        <VStack className="Box" marginTop={"5px"}>
                            <Box className="Box" height={"180px"} width={"100%"}  marginTop={"5px"}>
                                <Box className="Box" textAlign={"start"} fontWeight={"bold"} marginTop={"5px"} >LOOK AFTER ME
                                
                                 </Box>
                                 <Text>{singleProduct.Lookafterme}</Text>
                            </Box>
                            <Box className="Box" height={"150px"} width={"100%"}  marginTop={"5px"}>
                                <Box className="Box" textAlign={"start"} fontWeight={"bold"} marginTop={"5px"}>ABOUT ME
                                </Box>
                                <Text>{singleProduct.aboutme}</Text>
                            </Box>
                        </VStack>
                    </Box>

                 </HStack>
                 
            </Box>
         </Collapse>
        <Button size='sm' width={"15%"} fontSize={"15"} fontWeight={"bold"} marginLeft={"25rem"} onClick={handleToggle} mt='1rem'>
        Show {show ? 'Less' : 'More'}
      </Button>

         </Box>
                   
        </Box>
               
    )
}

export default SinglePageProduct
