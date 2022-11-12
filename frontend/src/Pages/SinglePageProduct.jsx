import { Box , HStack,VStack, Image, Text,Select, Button, Collapse} from '@chakra-ui/react'
import React, { useEffect } from 'react';
import { FaTag , FaClock, FaHeart, FaTruck} from "react-icons/fa";
import { useParams}  from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CART } from '../Redux/App/acttionTypes';
import { useState } from 'react';
const SinglePageProduct = () => {
    const [show, setShow] =useState(false)
    const handleToggle = () => setShow(!show)
    const {id}= useParams();
    const dispatch=useDispatch();
    const products  = useSelector((state) => state.AppReducer.products);
    const cart  = useSelector((state) => state.AppReducer.cart);
    let type=id.split("_")[0];
    let  typeid = id.split("_")[1];
    const [singleProduct, setSingleProduct]= useState({})
    let temp;
      useEffect(()=>{
            let count=0;
            if(typeid ){
              // eslint-disable-next-line react-hooks/exhaustive-deps
              temp = products?.find( product => product._id ===(typeid));
              // eslint-disable-next-line no-unused-vars
              count++;
              temp && setSingleProduct(temp);
            }
         },[products, typeid,type]);
           const handleAddtobag=()=>{
            dispatch({type: CART, payload:temp })
          }
          console.log(cart);
    return (
        // main box
        <Box className="Box" width={"60%"} height={"600px"} border={"1px solid red"} margin={"auto"} marginTop={"5px"} padding={"10px"}> 
          
          
          <HStack className="Box" width={"100%"} height={"100%"}  marginLeft={"5px"} border={"1px solid green"}>
           

          <VStack width={"10%"}  marginLeft={"5px"} border={"1px solid green"} height={"100%"}>
            <Box className="Box" marginLeft={"5px"} marginTop={"10px"}>
                 <Box className="Box"marginLeft={"15px"} marginTop={"20px"}>
                 <Image
                    width={"80%"}
                    height={"40%"}
                    src={singleProduct.backImage}
                    border={"1px solid red"}
                  />
                     {/* backimage */}
                 </Box>
                 <Box className="Box" marginLeft={"15px"} marginTop={"20px"}>
                    <Image
                     width={"80%"}
                     height={"40%"}
                     src={singleProduct.sideImage}
                     border={"1px solid red"} 
                    />
                    {/* sideImage */}
                 </Box>
                 <Box className="Box" marginLeft={"15px"} marginTop={"20px"}>
                    <Image
                     width={"80%"}
                     height={"40%"}
                     src={singleProduct.sideImage}
                     border={"1px solid red"} 
                    />
                  
                 </Box>
                 {/* mainImage  */}
                 <Box className="Box" marginLeft={"15px"} marginTop={"20px"}>
                    <Image
                     width={"80%"}
                     height={"40%"}
                     src={singleProduct.backImage}
                     border={"1px solid red"} 
                    />
                  
                 </Box>
            </Box>
            </VStack>
                <Box className="Box" border={"1px solid green"} width={"48%"} height={"100%"}>
                    
                    <Box className="Box" width={"98%"} height={"100%"}>
                    <Image 
                      width={"100%"}
                      height={"100%"}
                      margin={"auto"}
                      src={singleProduct.mainImage}
                    />
                    </Box>
                  
                </Box>
            
                {/* //Description */}
                 <Box className="Box" width={"38%"} height={"100%"} border={"1px solid red"} marginLeft={"10px"}>
                  
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
                        <Select width={"95%"} marginLeft={"5px"} marginTop={"10px"} placeholder='Please Select'>
                        <option value='UK6'>UK6</option>
                        <option value='option2'>UK7</option>
                        <option value='option3'>UK8</option>
                        <option value='option3'>UK9</option>
                        <option value='option3'>UK10</option>
                        <option value='option3'>UK11</option>
                        <option value='option3'>UK12</option>
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
                        <Button className="Box" width={"80%"} marginLeft={"5px"} _hover={{color:"white" , bg:"fullgreen"}} marginTop={"5px"} textAlign={"center"} color={"white"} backgroundColor={"green"} onClick={handleAddtobag} >ADD TO BAG</Button>
                        <Button className="Box"><Box className="Box" textAlign={"center"} marginLeft={"5px"} marginTop={"10px"}  > < FaHeart/> </Box></Button>
                        </HStack>
                    </Box>

                    <Box className="Box" marginLeft={"5px"} marginTop={"15px"} border={"1px solid grey"}>
                        <HStack className="Box" marginLeft={"5px"} marginTop={"5px"}>
                        <Box className="Box" marginLeft={"5px"} marginTop={"5px"}><FaTruck/></Box>
                            <Box className="Box" marginLeft={"5px"} marginTop={"5px"}>
                                <VStack className="Box"marginLeft={"5px"} marginTop={"10px"}>
                                <Box className="Box"  textAlign={"start"} marginTop={"10px"}>Free Delievery
                                <Box className="Box">Ts&Cs apply. More delivery info</Box></Box>
                                
                                </VStack>
                            </Box>
                        </HStack>
                    </Box>
                </Box>
            </HStack>
            {/* product Details  */}
            <Collapse startingHeight={20} in={show}>
            <Box className="Box" width={"100%"} height={"400px"} border={"1px solid red"} margin={"auto"} marginTop={"15px"} padding={"10px"}>
                 <HStack className="Box" width={"100%"} height={"100%"}  marginLeft={"5px"} border={"1px solid green"}>
                    <Box width={"30%"}  marginLeft={"5px"} border={"1px solid green"} height={"100%"}>
                        <Box textAlign={"start"} fontWeight={"bold"}  marginTop={"80px"}>PRODUCT DETAILS
                     
                        </Box>
                        <Text>
                          {singleProduct.productDetails}</Text>
                    </Box>

                    <Box className="Box" width={"35%"} height={"100%"} border={"1px solid red"} margin={"auto"} marginTop={"15px"} padding={"10px"}>
                        <VStack className="Box" marginTop={"5px"} >
                            <Box className="Box" height={"100px"} width={"100%"} border={"1px solid green"} marginTop={"5px"} >
                                <Box className="Box" textAlign={"start"} fontWeight={"bold"} marginTop={"5px"} >PRODUCT CODE
                                 
                                </Box>
                                <Text>123274070</Text>
                            </Box>
                            <Box className="Box" height={"100%"} width={"100%"} border={"1px solid green"} marginTop={"5px"}>
                                <Box className="Box" textAlign={"start"} fontWeight={"bold"} marginTop={"5px"}>BRAND
                               
                                </Box>
                                <Text>
                                {singleProduct.brand}</Text>
                            </Box>
                        </VStack>
                    </Box>

                    <Box className="Box" width={"35%"} height={"100%"} border={"1px solid red"} margin={"auto"} marginTop={"15px"} padding={"10px"}>
                        <VStack className="Box" marginTop={"5px"}>
                            <Box className="Box" height={"180px"} width={"100%"} border={"1px solid green"} marginTop={"5px"}>
                                <Box className="Box" textAlign={"start"} fontWeight={"bold"} marginTop={"5px"} >LOOK AFTER ME
                                
                                 </Box>
                                 <Text>{singleProduct.Lookafterme}</Text>
                            </Box>
                            <Box className="Box" height={"150px"} width={"100%"} border={"1px solid green"} marginTop={"5px"}>
                                <Box className="Box" textAlign={"start"} fontWeight={"bold"} marginTop={"5px"}>ABOUT ME
                                </Box>
                                <Text>{singleProduct.aboutme}</Text>
                            </Box>
                        </VStack>
                    </Box>

                 </HStack>
                 
            </Box>
         </Collapse>
        <Button size='sm' width={"15%"}  marginLeft={"25rem"} onClick={handleToggle} mt='1rem'>
        Show {show ? 'Less' : 'More'}
      </Button>
        <hr/>
                   
        </Box>
    )
}

export default SinglePageProduct
