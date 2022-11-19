import { Box, Flex, Image, SimpleGrid } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BlankWishList from "../components/BlankWishList";
import { getWishListdata } from "../Redux/wishlist/action";
import { WishListGrid } from "./WishListGrid";

export const WishList = () => {
  const dispatch = useDispatch();
  const { WishListdata, loading, error } = useSelector(
    (state) => state.WishlistReducer
  );
  // console.log(WishListdata)
  // console.log(loading)
  useEffect(() => {
    dispatch(getWishListdata());
  }, []);

  //   console.log(loading)
  return (
    <Box>
      {loading ? (
        <Flex alignItems={"center"} justifyContent={"center"}>
          <Image mt={20} src="https://i.stack.imgur.com/MnyxU.gif" alt="x" />
        </Flex>
      ) : (
        <>
          {" "}
          {WishListdata.length == 0 ? (
            <Box>
              <BlankWishList />
            </Box>
          ) : (
            <SimpleGrid
              columns={[2, 2, 3, 4]}
              w="85%"
              m={"auto"}
              spacing={3}
              p={0}
            >
             
              {
                WishListdata.length>0 && WishListdata.map((item)=>
                <>
                 <WishListGrid  data={item} />
                  
                  
                  </>
              )
}
            </SimpleGrid>
            
          )}
        </>
      )}
    </Box>
  );
};
