import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./nav.module.css";
const SubNav = () => {
  const { pathname } = useLocation();

  return (
    <Box w="100%" h={"50px"} bgColor={"#525050"} className={styles.nav}>
      <Box  className={styles.wrapper}>
        <ul className={styles.navLink}>
          <li>
            <Flex
              transform={"skew(-10deg)"}
              alignItems={"center"}
              w="80px"
              justifyContent={"center"}
              bgColor={"#d01345"}
              color={"white"}
              _hover={{ bgColor: "white", color: "black" }}
              mr="10px"
              h="49px"
            >
              <Link className={styles.Link} to={"/womensale"}>
                {" "}
                <Text
                  transform={"skew(10deg)"}
                  _hover={{ transform: "skew(0deg)", color: "black" }}
                >
                  Sale
                </Text>
              </Link>
            </Flex>
            <Box className={styles.megaBox}>
              <Box className={styles.content}>
                <div className={styles.row}>
                  <header style={{ textDecoration: "underline" }}>
                    SHOP BY PRODUCTS
                  </header>
                  <ul className={styles.megaLinks}>
                    <li>
                      <a href="/womensale">SALE View all</a>
                    </li>
                    <li>
                      <a href="#">SALE New Added </a>
                    </li>
                    <li>
                      <Link>SALE Seling fast</Link>
                    </li>
                    <li>
                      <a href="#">SALE Dresses</a>
                    </li>
                    <li>
                      <Link to={"/Asos_clone"}>SALE Top</Link>
                    </li>
                    <li>
                      <Link>SALE Shoes</Link>
                    </li>
                    <li>
                      <a href="#">SALE Accessories</a>
                    </li>
                    <li>
                      <a href="#">SALE Activewear</a>
                    </li>
                    <li>
                      <a href="#">SALE Face + Body</a>
                    </li>
                  </ul>
                </div>
                <div className={styles.row}>
                  <ul className={styles.megaLinks}>
                    <li>
                      <a style={{ marginTop: "50px" }}>SALE Jeans</a>
                    </li>
                    <li>
                      <a href="#">SALE Jwellery </a>
                    </li>
                    <li>
                      <Link>SALE Watches</Link>
                    </li>
                    <li>
                      <a href="#">SALE Shorts</a>
                    </li>
                    <li>
                      <Link to={"/Asos_clone"}>SALE Tights</Link>
                    </li>
                    <li>
                      <Link>SALE T-shirts & Vests</Link>
                    </li>
                    <li>
                      <a href="#">SALE Trainers</a>
                    </li>
                    <li>
                      <a href="#">SALE Trousers</a>
                    </li>
                    <li>
                      <a href="#">SALE Sunglasses</a>
                    </li>
                  </ul>
                </div>

                <div style={{ marginLeft: "-150px" }} className={styles.row}>
                  <header style={{ textDecoration: "underline" }}>
                    SHOP BY PRODUCTS
                  </header>
                  <ul
                    style={{ borderLeft: "1px solid black", padding: "10px" }}
                    className={styles.megaLinks}
                  >
                    <li>
                      <b>
                        <a href="#">Biggest deals</a>
                      </b>
                    </li>
                    <li>
                      <b>
                        {" "}
                        <a href="#">Sale under £15 </a>
                      </b>
                    </li>
                    <li>
                      <Link>
                        <b> Top saved</b>
                      </Link>
                    </li>
                    <li>
                      <a href="#">Dresses under £15</a>
                    </li>
                    <li>
                      <Link to={"/Asos_clone"}>Jeans under £20</Link>
                    </li>
                    <li>
                      <Link>Sale: Autumn essentials</Link>
                    </li>
                    <li>
                      <a href="#">Sale: Sneakerbrands</a>
                    </li>
                    <li>
                      <a href="#">Occasionwear</a>
                    </li>
                    <li>
                      <a href="#">Last chance to buy</a>
                    </li>
                  </ul>
                </div>
                <div className={styles.row}>
                  <header style={{ textDecoration: "underline" }}>
                    SHOP SALE BY BODY FIT{" "}
                  </header>
                  <div className={styles.midNavImg}>
                    <div>
                      <img
                        src="https://images.asos-media.com/navigation/ww_sale_curve+plus_3m_1942133?&$n_240w$"
                        alt=""
                      />
                    </div>

                    <div>
                      <img
                        src="https://images.asos-media.com/navigation/ww_sale_maternity_3m_1964729?&$n_240w$"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        src="https://images.asos-media.com/navigation/ww_sale_petite_3m_1115120250?&$n_240w$"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        src="https://images.asos-media.com/navigation/ww_sale_tall_3m_108444108?&$n_240w$"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </Box>
            </Box>
          </li>
          <li>
            <Flex
              color={"white"}
              _hover={{ bgColor: "white", color: "black" }}
              alignItems={"center"}
              w="80px"
              justifyContent={"center"}
              h="49px"
            >
              <Link className={styles.Link} to="/womennewin">
                <Text _hover={{ bgColor: "white", color: "black" }}>
                  New in
                </Text>
              </Link>
            </Flex>

            <Box className={styles.megaBox}>
              <Box className={styles.content}>
                <div className={styles.row}>
                  <header>NEW PRODUCTS</header>
                  <ul className={styles.megaLinks}>
                    <li>
                      <Link to="/womennewin">View all</Link>
                    </li>
                    <li>
                      <a href="#">Clothing</a>
                    </li>
                    <li>
                      <Link>Shoes</Link>
                    </li>
                    <li>
                      <a href="#">Accessories</a>
                    </li>
                    <li>
                      <Link to={"/bodycare/skincare"}>Face + Body</Link>
                    </li>
                    <li>
                      <Link>Topshop</Link>
                    </li>
                    <li>
                      <a href="#">Back in stock</a>
                    </li>
                    <li>
                      <a href="#">Outlet</a>
                    </li>
                    <li>
                      <a href="#">Trending now</a>
                    </li>
                  </ul>
                </div>
                <div className={styles.row}>
                  <header>Shoap By body fit</header>
                  <div className={styles.midNavImg}>
                    <div>
                      <img
                        src="https://images.asos-media.com/navigation/ww_gbl_newin_curveplussize_3M_114998343?&$n_240w$"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        src="https://images.asos-media.com/navigation/ww_gbl_newin_maternity_3M_113467652?&$n_240w$"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        src="https://images.asos-media.com/navigation/ww_gbl_newin_petite_3M_1999343?&$n_240w$"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        src="https://images.asos-media.com/navigation/ww_gbl_newin_tall_3M_104174270?&$n_240w$"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.row}>
                  <header>NEW EDITS</header>
                  <div className={styles.lPImage}>
                    <img
                      src="https://images.asos-media.com/navigation/WW_Go_for_glam_1650x1884?&$n_320w$"
                      alt=""
                    />

                    <img
                      src="https://images.asos-media.com/navigation/ww_asos_edition_1650x1884_june?&$n_320w$"
                      alt=""
                    />
                  </div>
                </div>
              </Box>
            </Box>
          </li>
          <li>
            <Flex
              color={"white"}
              _hover={{ bgColor: "white", color: "black" }}
              alignItems={"center"}
              w="80px"
              justifyContent={"center"}
              h="49px"
            >
              <Link className={styles.Link} to={"/womenclothing"}>
                <Text _hover={{ bgColor: "white", color: "black" }}>
                  Clothing
                </Text>
              </Link>
            </Flex>
            <div className={styles.megaBox}>
              <div className={styles.content}>
                <div className={styles.row}>
                  <header style={{ textDecoration: "underline" }}>
                    SHOP BY PRODUCT
                  </header>
                  <ul className={styles.megaLinks}>
                    <li>
                      <Link to={"/womenclothing"}>New in</Link>
                    </li>
                    <li>
                      <Link to={"/women/dress"}>Dresses</Link>
                    </li>
                    <li>
                      <Link>Tops</Link>
                    </li>
                    <li>
                      <a href="#">Shorts</a>
                    </li>
                    <li>
                      <a href="#">Swimwear & Beachwear</a>
                    </li>
                    <li>
                      <a href="#">Blazers</a>
                    </li>
                    <li>
                      <a href="#">Co-ords</a>
                    </li>
                    <li>
                      <a href="#">Coats & Jackets</a>
                    </li>
                    <li>
                      <a href="#">Designer</a>
                    </li>
                    <li>
                      <a href="#">Exclusives at ASOS</a>
                    </li>
                    <li>
                      <Link to={"/men/jeans"}>Jeans</Link>
                    </li>
                  </ul>
                </div>
                <div className={styles.row}>
                  <ul className={styles.megaLinks}>
                    <header>...</header>
                    <li>
                      <a href="#">Jumpers & Cardigans</a>
                    </li>
                    <li>
                      <a href="#">Jumpsuits & Playsuits</a>
                    </li>
                    <li>
                      <a href="#">Loungewear</a>
                    </li>
                    <li>
                      <a href="#">Multipacks</a>
                    </li>
                    <li>
                      <a href="#">Shirts & Blouses</a>
                    </li>
                    <li>
                      <a href="#">Skirts</a>
                    </li>
                    <li>
                      <a href="#">Socks & Tights</a>
                    </li>
                    <li>
                      <a href="#">Sportswear</a>
                    </li>
                    <li>
                      <a href="#">Suits & Tailoring</a>
                    </li>
                  </ul>
                </div>

                <div className={styles.row}>
                  <header style={{ textDecoration: "underline" }}>
                    SHOP BY BODY FIT
                  </header>
                  <div className={styles.midNavImg}>
                    <div>
                      <img
                        src="https://images.asos-media.com/navigation/ww_gbl_clothing_asoscurveandplussize_3M_115454141?&$n_240w$"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        src="https://images.asos-media.com/navigation/ww_gbl_clothing_maternity_3M_117396604?&$n_240w$"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        src="https://images.asos-media.com/navigation/ww_gbl_clothing_petite_3M_111618675?&$n_240w$"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        src="https://images.asos-media.com/navigation/ww_gbl_clothing_tall_3M_116746580?&$n_240w$"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.row}>
                  <header style={{ textDecoration: "underline" }}>
                    SHOP BY EDIT
                  </header>
                  <div className={styles.shopList}>
                    <div>
                      <img
                        src="https://images.asos-media.com/navigation/ww_gbl_clothing_wedding_3M_111178847?&$n_240w$"
                        alt=""
                      />
                      <p>Weading</p>
                    </div>
                    <div>
                      <img
                        src="https://images.asos-media.com/navigation/ww_gbl_clothing_bridal_3M_1618123?&$n_240w$"
                        alt=""
                      />
                      <p>Bridal</p>
                    </div>
                    <div>
                      <img
                        src="https://images.asos-media.com/navigation/ww_gbl_clothing_modestfashion_3M_114696164?&$n_240w$"
                        alt=""
                      />
                      <p>Modest fashion</p>
                    </div>
                    <div>
                      <img
                        src="https://images.asos-media.com/navigation/ww_clothing_lastchancetobuydress_2M_115452191?&$n_240w$"
                        alt=""
                      />
                      <p>Last chance</p>
                    </div>
                    <div>
                      <img
                        src="https://images.asos-media.com/navigation/ww_au_clothing_workwear_3M_109335997?&$n_240w$"
                        alt=""
                      />
                      <p>Workwear</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <Flex
              color={"white"}
              _hover={{ bgColor: "white", color: "black" }}
              alignItems={"center"}
              w="80px"
              justifyContent={"center"}
              h="49px"
            >
              <Link className={styles.Link} to={"/womendresses"}>
                <Text _hover={{ bgColor: "white", color: "black" }}>
                  Dresses
                </Text>
              </Link>
            </Flex>
            <div className={styles.megaBox}>
              <div className={styles.content}>
                <div className={styles.row}>
                  <header style={{ textDecoration: "underline" }}>
                    SHOP BY TYPE
                  </header>
                  <ul className={styles.megaLinks}>
                    <li>
                      <Link to={"/womendresses"}>Dresses under £20</Link>
                    </li>
                    <li>
                      <Link to={"/women/dress"}>View all</Link>
                    </li>
                    <li>
                      <Link>New in</Link>
                    </li>
                    <li>
                      <a href="#">Evening dresses</a>
                    </li>
                    <li>
                      <a href="#">Wedding guest dresses</a>
                    </li>
                    <li>
                      <a href="#">Day dresses</a>
                    </li>
                    <li>
                      <a href="#">Bridesmaid dresses</a>
                    </li>
                    <li>
                      <a href="#">Party dresses</a>
                    </li>
                    <li>
                      <a href="#">Wedding dresses</a>
                    </li>
                    <li>
                      <a href="#">Linen dresses</a>
                    </li>
                  </ul>
                </div>
                <div className={styles.row}>
                  <ul
                    style={{
                      borderLeft: "1px solid black",
                      paddingLeft: "10px",
                      marginTop: "0px",
                    }}
                    className={styles.megaLinks}
                  >
                    <header style={{ textDecoration: "underline" }}>
                      {" "}
                      SHOP BY TREND
                    </header>
                    <li>
                      <a href="#">Floral dresses</a>
                    </li>
                    <li>
                      <a href="#">Long sleeve dresses</a>
                    </li>
                    <li>
                      <a href="#">Maxi dresses</a>
                    </li>
                    <li>
                      <a href="#">Midi dresses</a>
                    </li>
                    <li>
                      <a href="#">Mini dresses</a>
                    </li>
                    <li>
                      <a href="#">Satin dresses</a>
                    </li>
                    <li>
                      <a href="#">Shirt dresses</a>
                    </li>
                    <li>
                      <a href="#">Smock dresses</a>
                    </li>
                    <li>
                      <a href="#">Summer Dresses</a>
                    </li>
                  </ul>
                </div>

                <div className={styles.row}>
                  <header style={{ textDecoration: "underline" }}>
                    SHOP BY BODY FIT
                  </header>
                  <div className={styles.midNavImg}>
                    <div>
                      <img
                        src="https://images.asos-media.com/products/topshop-curve-ultimate-blazer-dress-in-black/203178228-1-black?$n_480w$&wid=476&fit=constrain"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        src="https://images.asos-media.com/products/topshop-curve-ombre-cut-out-long-sleeve-midi-dress-in-multi/203356957-1-multi?$n_480w$&wid=476&fit=constrain"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        src="https://images.asos-media.com/products/river-island-plus-metallic-thread-mini-dress-in-silver/203984156-1-silver?$n_480w$&wid=476&fit=constrain"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        src="https://images.asos-media.com/products/river-island-plus-zebra-plisse-midi-dress-in-black/204052072-1-black?$n_480w$&wid=476&fit=constrain"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.row}>
                  <header style={{ textDecoration: "underline" }}>
                    SHOP BY EDIT
                  </header>
                  <div className={styles.shopList}>
                    <div>
                      <img
                        src="https://images.asos-media.com/navigation/ww_gbl_clothing_wedding_3M_111178847?&$n_240w$"
                        alt=""
                      />
                      <p>Weading</p>
                    </div>
                    <div>
                      <img
                        src="https://images.asos-media.com/navigation/ww_gbl_clothing_bridal_3M_1618123?&$n_240w$"
                        alt=""
                      />
                      <p>Bridal</p>
                    </div>
                    <div>
                      <img
                        src="https://images.asos-media.com/navigation/ww_gbl_clothing_modestfashion_3M_114696164?&$n_240w$"
                        alt=""
                      />
                      <p>Modest fashion</p>
                    </div>
                    <div>
                      <img
                        src="https://images.asos-media.com/navigation/ww_clothing_lastchancetobuydress_2M_115452191?&$n_240w$"
                        alt=""
                      />
                      <p>Last chance</p>
                    </div>
                    <div>
                      <img
                        src="https://images.asos-media.com/navigation/ww_au_clothing_workwear_3M_109335997?&$n_240w$"
                        alt=""
                      />
                      <p>Workwear</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <Flex
              color={"white"}
              _hover={{ bgColor: "white", color: "black" }}
              alignItems={"center"}
              w="80px"
              justifyContent={"center"}
              h="49px"
            >
              <Link  className={styles.Link} to={"/womenshoe"}>
                <Text _hover={{ bgColor: "white", color: "black" }}>Shoes</Text>
              </Link>
            </Flex>
            <Box className={styles.megaBox}>
              <Box className={styles.content}>
                <div className={styles.row}>
                  <header>SHOP BY PRODUCT</header>
                  <ul className={styles.megaLinks}>
                    <li>
                      <Link to={"/womenshoe"}>View all</Link>
                    </li>
                    <li>
                      <a href="#">New in</a>
                    </li>
                    <li>
                      <Link>Trainers</Link>
                    </li>
                    <li>
                      <a href="#">Boots</a>
                    </li>
                    <li>
                      <Link to={"/bodycare/skincare"}>Flat shoes</Link>
                    </li>
                    <li>
                      <Link>Heels</Link>
                    </li>
                    <li>
                      <a href="#">Loafers</a>
                    </li>
                    <li>
                      <a href="#">Sandals</a>
                    </li>
                    <li>
                      <a href="#">Sliders & Flip flops</a>
                    </li>
                  </ul>
                </div>
                <div className={styles.row}>
                  <header>SHOP BY BRAND</header>
                  <div className={styles.midNavImg}>
                    <div>
                      <img
                        src="https://images.asos-media.com/products/adidas-originals-stan-smith-trainers-in-white-and-navy-white/22367284-1-white?$n_480w$&wid=476&fit=constrain"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        src="https://images.asos-media.com/products/adidas-originals-astir-trainers-in-off-white-with-khaki-detail/202274338-1-white?$n_480w$&wid=476&fit=constrain"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        src="https://images.asos-media.com/products/adidas-originals-nizza-platform-trainers-in-black-and-white/14674740-1-black?$n_480w$&wid=476&fit=constrain"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        src="https://images.asos-media.com/products/vans-ua-old-skool-trainers-in-light-blue-white/201861302-1-lightblue?$n_480w$&wid=476&fit=constrain"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.row}>
                  <div style={{ marginTop: "60px" }} className={styles.lPImage}>
                    <img
                      src="https://images.asos-media.com/navigation/ww_newbalance_shoes__1650x1884_14092022?&$n_320w$"
                      alt=""
                    />

                    <img
                      src="https://images.asos-media.com/navigation/ww_global_winter_boots_1650x1884_080922?&$n_320w$"
                      alt=""
                    />
                  </div>
                </div>
              </Box>
            </Box>
          </li>
          <li>
            {" "}
            <Flex
              color={"white"}
              _hover={{ bgColor: "white", color: "black" }}
              alignItems={"center"}
              w="80px"
              justifyContent={"center"}
              h="49px"
            >
              <Link className={styles.Link} to="/womensportwear">
                <Text _hover={{ bgColor: "white", color: "black" }}>
                  Sportwear
                </Text>
              </Link>
              <div className={styles.megaBox}>
                <div className={styles.content}>
                  <div className={styles.row}>
                    <header style={{ textDecoration: "underline" }}>
                      SHOP BY TYPE
                    </header>
                    <ul className={styles.megaLinks}>
                      <li>
                        <Link to="/womensportwear">Dresses under £20</Link>
                      </li>
                      <li>
                        <Link to={"/women/dress"}>View all</Link>
                      </li>
                      <li>
                        <Link>New in</Link>
                      </li>
                      <li>
                        <a href="#">Evening dresses</a>
                      </li>
                      <li>
                        <a href="#">Wedding guest dresses</a>
                      </li>
                      <li>
                        <a href="#">Day dresses</a>
                      </li>
                      <li>
                        <a href="#">Bridesmaid dresses</a>
                      </li>
                      <li>
                        <a href="#">Party dresses</a>
                      </li>
                      <li>
                        <a href="#">Wedding dresses</a>
                      </li>
                      <li>
                        <a href="#">Linen dresses</a>
                      </li>
                    </ul>
                  </div>
                  <div className={styles.row}>
                    <ul
                      style={{
                        borderLeft: "1px solid black",
                        paddingLeft: "10px",
                        marginTop: "0px",
                      }}
                      className={styles.megaLinks}
                    >
                      <header style={{ textDecoration: "underline" }}>
                        {" "}
                        SHOP BY TREND
                      </header>
                      <li>
                        <a href="#">Floral dresses</a>
                      </li>
                      <li>
                        <a href="#">Long sleeve dresses</a>
                      </li>
                      <li>
                        <a href="#">Maxi dresses</a>
                      </li>
                      <li>
                        <a href="#">Midi dresses</a>
                      </li>
                      <li>
                        <a href="#">Mini dresses</a>
                      </li>
                      <li>
                        <a href="#">Satin dresses</a>
                      </li>
                      <li>
                        <a href="#">Shirt dresses</a>
                      </li>
                      <li>
                        <a href="#">Smock dresses</a>
                      </li>
                      <li>
                        <a href="#">Summer Dresses</a>
                      </li>
                    </ul>
                  </div>

                  <div className={styles.row}>
                    <header style={{ textDecoration: "underline" }}>
                      SHOP BY BODY FIT
                    </header>
                    <div className={styles.midNavImg}>
                      <div>
                        <img
                          src="https://images.asos-media.com/products/topshop-curve-ultimate-blazer-dress-in-black/203178228-1-black?$n_480w$&wid=476&fit=constrain"
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          src="https://images.asos-media.com/products/topshop-curve-ombre-cut-out-long-sleeve-midi-dress-in-multi/203356957-1-multi?$n_480w$&wid=476&fit=constrain"
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          src="https://images.asos-media.com/products/river-island-plus-metallic-thread-mini-dress-in-silver/203984156-1-silver?$n_480w$&wid=476&fit=constrain"
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          src="https://images.asos-media.com/products/river-island-plus-zebra-plisse-midi-dress-in-black/204052072-1-black?$n_480w$&wid=476&fit=constrain"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.row}>
                    <header style={{ textDecoration: "underline" }}>
                      SHOP BY EDIT
                    </header>
                    <div className={styles.shopList}>
                      <div>
                        <img
                          src="https://images.asos-media.com/navigation/ww_gbl_clothing_wedding_3M_111178847?&$n_240w$"
                          alt=""
                        />
                        <p>Weading</p>
                      </div>
                      <div>
                        <img
                          src="https://images.asos-media.com/navigation/ww_gbl_clothing_bridal_3M_1618123?&$n_240w$"
                          alt=""
                        />
                        <p>Bridal</p>
                      </div>
                      <div>
                        <img
                          src="https://images.asos-media.com/navigation/ww_gbl_clothing_modestfashion_3M_114696164?&$n_240w$"
                          alt=""
                        />
                        <p>Modest fashion</p>
                      </div>
                      <div>
                        <img
                          src="https://images.asos-media.com/navigation/ww_clothing_lastchancetobuydress_2M_115452191?&$n_240w$"
                          alt=""
                        />
                        <p>Last chance</p>
                      </div>
                      <div>
                        <img
                          src="https://images.asos-media.com/navigation/ww_au_clothing_workwear_3M_109335997?&$n_240w$"
                          alt=""
                        />
                        <p>Workwear</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Flex>
          </li>
          <li>
            <Flex
              color={"white"}
              _hover={{ bgColor: "white", color: "black" }}
              alignItems={"center"}
              w="80px"
              justifyContent={"center"}
              h="49px"
            >
              <Link className={styles.Link} to={"/womenaccessories"}>
                <Text _hover={{ bgColor: "white", color: "black" }}>
                  Accessories
                </Text>
              </Link>
              <Box className={styles.megaBox}>
                <Box className={styles.content}>
                  <div className={styles.row}>
                    <header>NEW PRODUCTS</header>
                    <ul className={styles.megaLinks}>
                      <li>
                        <Link to={"/womenaccessories"}>View all</Link>
                      </li>
                      <li>
                        <a href="#">Clothing</a>
                      </li>
                      <li>
                        <Link>Shoes</Link>
                      </li>
                      <li>
                        <a href="#">Accessories</a>
                      </li>
                      <li>
                        <Link to={"/bodycare/skincare"}>Face + Body</Link>
                      </li>
                      <li>
                        <Link>Topshop</Link>
                      </li>
                      <li>
                        <a href="#">Back in stock</a>
                      </li>
                      <li>
                        <a href="#">Outlet</a>
                      </li>
                      <li>
                        <a href="#">Trending now</a>
                      </li>
                    </ul>
                  </div>
                  <div className={styles.row}>
                    <header>Shoap By body fit</header>
                    <div className={styles.midNavImg}>
                      <div>
                        <img
                          src="https://images.asos-media.com/navigation/ww_gbl_newin_curveplussize_3M_114998343?&$n_240w$"
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          src="https://images.asos-media.com/navigation/ww_gbl_newin_maternity_3M_113467652?&$n_240w$"
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          src="https://images.asos-media.com/navigation/ww_gbl_newin_petite_3M_1999343?&$n_240w$"
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          src="https://images.asos-media.com/navigation/ww_gbl_newin_tall_3M_104174270?&$n_240w$"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.row}>
                    <header>NEW EDITS</header>
                    <div className={styles.lPImage}>
                      <img
                        src="https://images.asos-media.com/navigation/WW_Go_for_glam_1650x1884?&$n_320w$"
                        alt=""
                      />

                      <img
                        src="https://images.asos-media.com/navigation/ww_asos_edition_1650x1884_june?&$n_320w$"
                        alt=""
                      />
                    </div>
                  </div>
                </Box>
              </Box>
            </Flex>
          </li>
          <li>
            <Flex
              color={"white"}
              _hover={{ bgColor: "white", color: "black" }}
              alignItems={"center"}
              w="80px"
              justifyContent={"center"}
              h="49px"
            >
              <Link className={styles.Link} to="/womenautumn">
                <Text _hover={{ bgColor: "white", color: "black" }}>
                  Autunm
                </Text>
              </Link>
            </Flex>
          </li>
          <li>
            <Flex
              color={"white"}
              _hover={{ bgColor: "white", color: "black" }}
              alignItems={"center"}
              w="80px"
              justifyContent={"center"}
              h="49px"
            ><Link to="/womengifting">
              <Text  _hover={{ bgColor: "white", color: "black" }}>Gifting</Text>
              </Link>
              <div className={styles.megaBox}>
                <div className={styles.content}>
                  <div className={styles.row}>
                    <header style={{ textDecoration: "underline" }}>
                      SHOP BY TYPE
                    </header>
                    <ul className={styles.megaLinks}>
                      <li>
                        <a href="#">Dresses under £20</a>
                      </li>
                      <li>
                        <Link to={"/women/dress"}>View all</Link>
                      </li>
                      <li>
                        <Link>New in</Link>
                      </li>
                      <li>
                        <a href="#">Evening dresses</a>
                      </li>
                      <li>
                        <a href="#">Wedding guest dresses</a>
                      </li>
                      <li>
                        <a href="#">Day dresses</a>
                      </li>
                      <li>
                        <a href="#">Bridesmaid dresses</a>
                      </li>
                      <li>
                        <a href="#">Party dresses</a>
                      </li>
                      <li>
                        <a href="#">Wedding dresses</a>
                      </li>
                      <li>
                        <a href="#">Linen dresses</a>
                      </li>
                    </ul>
                  </div>
                  <div className={styles.row}>
                    <ul
                      style={{
                        borderLeft: "1px solid black",
                        paddingLeft: "10px",
                        marginTop: "0px",
                      }}
                      className={styles.megaLinks}
                    >
                      <header style={{ textDecoration: "underline" }}>
                        {" "}
                        SHOP BY TREND
                      </header>
                      <li>
                        <a href="#">Floral dresses</a>
                      </li>
                      <li>
                        <a href="#">Long sleeve dresses</a>
                      </li>
                      <li>
                        <a href="#">Maxi dresses</a>
                      </li>
                      <li>
                        <a href="#">Midi dresses</a>
                      </li>
                      <li>
                        <a href="#">Mini dresses</a>
                      </li>
                      <li>
                        <a href="#">Satin dresses</a>
                      </li>
                      <li>
                        <a href="#">Shirt dresses</a>
                      </li>
                      <li>
                        <a href="#">Smock dresses</a>
                      </li>
                      <li>
                        <a href="#">Summer Dresses</a>
                      </li>
                    </ul>
                  </div>

                  <div className={styles.row}>
                    <header style={{ textDecoration: "underline" }}>
                      SHOP BY BODY FIT
                    </header>
                    <div className={styles.midNavImg}>
                      <div>
                        <img
                          src="https://images.asos-media.com/products/topshop-curve-ultimate-blazer-dress-in-black/203178228-1-black?$n_480w$&wid=476&fit=constrain"
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          src="https://images.asos-media.com/products/topshop-curve-ombre-cut-out-long-sleeve-midi-dress-in-multi/203356957-1-multi?$n_480w$&wid=476&fit=constrain"
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          src="https://images.asos-media.com/products/river-island-plus-metallic-thread-mini-dress-in-silver/203984156-1-silver?$n_480w$&wid=476&fit=constrain"
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          src="https://images.asos-media.com/products/river-island-plus-zebra-plisse-midi-dress-in-black/204052072-1-black?$n_480w$&wid=476&fit=constrain"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.row}>
                    <header style={{ textDecoration: "underline" }}>
                      SHOP BY EDIT
                    </header>
                    <div className={styles.shopList}>
                      <div>
                        <img
                          src="https://images.asos-media.com/navigation/ww_gbl_clothing_wedding_3M_111178847?&$n_240w$"
                          alt=""
                        />
                        <p>Weading</p>
                      </div>
                      <div>
                        <img
                          src="https://images.asos-media.com/navigation/ww_gbl_clothing_bridal_3M_1618123?&$n_240w$"
                          alt=""
                        />
                        <p>Bridal</p>
                      </div>
                      <div>
                        <img
                          src="https://images.asos-media.com/navigation/ww_gbl_clothing_modestfashion_3M_114696164?&$n_240w$"
                          alt=""
                        />
                        <p>Modest fashion</p>
                      </div>
                      <div>
                        <img
                          src="https://images.asos-media.com/navigation/ww_clothing_lastchancetobuydress_2M_115452191?&$n_240w$"
                          alt=""
                        />
                        <p>Last chance</p>
                      </div>
                      <div>
                        <img
                          src="https://images.asos-media.com/navigation/ww_au_clothing_workwear_3M_109335997?&$n_240w$"
                          alt=""
                        />
                        <p>Workwear</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Flex>
          </li>
          <li>
            <Flex
              color={"white"}
              _hover={{ bgColor: "white", color: "black" }}
              alignItems={"center"}
              w="80px"
              justifyContent={"center"}
              h="49px"
            >
              <Link className={styles.Link} to={`/womentopshop`}>
              <Text _hover={{ bgColor: "white", color: "black" }}>Topshop</Text>
              </Link>
            </Flex>
          </li>
          <li>
            <Flex
              color={"white"}
              _hover={{ bgColor: "white", color: "black" }}
              alignItems={"center"}
              w="80px"
              justifyContent={"center"}
              h="49px"
            >
              <Link className={styles.Link} to={"/womenfacebody"}>
              <Text w={"80px"}>Face + Body</Text>
              </Link>
              <Box className={styles.megaBox}>
                <Box className={styles.content}>
                  <div className={styles.row}>
                    <header>NEW PRODUCTS</header>
                    <ul className={styles.megaLinks}>
                      <li>
                        <a href="#">View all</a>
                      </li>
                      <li>
                        <a href="#">Clothing</a>
                      </li>
                      <li>
                        <Link>Shoes</Link>
                      </li>
                      <li>
                        <a href="#">Accessories</a>
                      </li>
                      <li>
                        <Link to={"/bodycare/skincare"}>Face + Body</Link>
                      </li>
                      <li>
                        <Link>Topshop</Link>
                      </li>
                      <li>
                        <a href="#">Back in stock</a>
                      </li>
                      <li>
                        <a href="#">Outlet</a>
                      </li>
                      <li>
                        <a href="#">Trending now</a>
                      </li>
                    </ul>
                  </div>
                  <div className={styles.row}>
                    <header>Shoap By body fit</header>
                    <div className={styles.midNavImg}>
                      <div>
                        <img
                          src="https://images.asos-media.com/navigation/ww_gbl_newin_curveplussize_3M_114998343?&$n_240w$"
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          src="https://images.asos-media.com/navigation/ww_gbl_newin_maternity_3M_113467652?&$n_240w$"
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          src="https://images.asos-media.com/navigation/ww_gbl_newin_petite_3M_1999343?&$n_240w$"
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          src="https://images.asos-media.com/navigation/ww_gbl_newin_tall_3M_104174270?&$n_240w$"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.row}>
                    <header>NEW EDITS</header>
                    <div className={styles.lPImage}>
                      <img
                        src="https://images.asos-media.com/navigation/WW_Go_for_glam_1650x1884?&$n_320w$"
                        alt=""
                      />

                      <img
                        src="https://images.asos-media.com/navigation/ww_asos_edition_1650x1884_june?&$n_320w$"
                        alt=""
                      />
                    </div>
                  </div>
                </Box>
              </Box>
            </Flex>
          </li>
          <li>
            <Flex
              color={"white"}
              _hover={{ bgColor: "white", color: "black" }}
              alignItems={"center"}
              w="80px"
              justifyContent={"center"}
              h="49px"
              mr={2}
            >
              <Link className={styles.Link} to="/womenbrand">
              <Text>Brands</Text>
              </Link>
            </Flex>
          </li>
          <li>
            <Flex
              transform={"skew(-10deg)"}
              alignItems={"center"}
              w="80px"
              justifyContent={"center"}
              bgColor={"#d01345"}
              color={"white"}
              _hover={{ bgColor: "white", color: "black" }}
              mr="10px"
              h="49px"
            >
              <Link className={styles.Link} to={"/womenoutlet"}>
              <Text
                transform={"skew(10deg)"}
                _hover={{ transform: "skew(0deg)" }}
              >
                Outlet
              </Text>
              </Link>
            </Flex>
            <div className={styles.megaBox}>
              <div className={styles.content}>
                <div className={styles.row}>
                  <header style={{ textDecoration: "underline" }}>
                    SHOP BY PRODUCT
                  </header>
                  <ul className={styles.megaLinks}>
                    <li>
                      <a href="#">New in</a>
                    </li>
                    <li>
                      <Link to={"/women/dress"}>Dresses</Link>
                    </li>
                    <li>
                      <Link>Tops</Link>
                    </li>
                    <li>
                      <a href="#">Shorts</a>
                    </li>
                    <li>
                      <a href="#">Swimwear & Beachwear</a>
                    </li>
                    <li>
                      <a href="#">Blazers</a>
                    </li>
                    <li>
                      <a href="#">Co-ords</a>
                    </li>
                    <li>
                      <a href="#">Coats & Jackets</a>
                    </li>
                    <li>
                      <a href="#">Designer</a>
                    </li>
                    <li>
                      <a href="#">Exclusives at ASOS</a>
                    </li>
                    <li>
                      <Link to={"/men/jeans"}>Jeans</Link>
                    </li>
                  </ul>
                </div>
                <div className={styles.row}>
                  <ul className={styles.megaLinks}>
                    <header>...</header>
                    <li>
                      <a href="#">Jumpers & Cardigans</a>
                    </li>
                    <li>
                      <a href="#">Jumpsuits & Playsuits</a>
                    </li>
                    <li>
                      <a href="#">Loungewear</a>
                    </li>
                    <li>
                      <a href="#">Multipacks</a>
                    </li>
                    <li>
                      <a href="#">Shirts & Blouses</a>
                    </li>
                    <li>
                      <a href="#">Skirts</a>
                    </li>
                    <li>
                      <a href="#">Socks & Tights</a>
                    </li>
                    <li>
                      <a href="#">Sportswear</a>
                    </li>
                    <li>
                      <a href="#">Suits & Tailoring</a>
                    </li>
                  </ul>
                </div>

                <div className={styles.row}>
                  <header style={{ textDecoration: "underline" }}>
                    SHOP BY BODY FIT
                  </header>
                  <div className={styles.midNavImg}>
                    <div>
                      <img
                        src="https://images.asos-media.com/navigation/ww_gbl_clothing_asoscurveandplussize_3M_115454141?&$n_240w$"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        src="https://images.asos-media.com/navigation/ww_gbl_clothing_maternity_3M_117396604?&$n_240w$"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        src="https://images.asos-media.com/navigation/ww_gbl_clothing_petite_3M_111618675?&$n_240w$"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        src="https://images.asos-media.com/navigation/ww_gbl_clothing_tall_3M_116746580?&$n_240w$"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.row}>
                  <header style={{ textDecoration: "underline" }}>
                    SHOP BY EDIT
                  </header>
                  <div className={styles.shopList}>
                    <div>
                      <img
                        src="https://images.asos-media.com/navigation/ww_gbl_clothing_wedding_3M_111178847?&$n_240w$"
                        alt=""
                      />
                      <p>Weading</p>
                    </div>
                    <div>
                      <img
                        src="https://images.asos-media.com/navigation/ww_gbl_clothing_bridal_3M_1618123?&$n_240w$"
                        alt=""
                      />
                      <p>Bridal</p>
                    </div>
                    <div>
                      <img
                        src="https://images.asos-media.com/navigation/ww_gbl_clothing_modestfashion_3M_114696164?&$n_240w$"
                        alt=""
                      />
                      <p>Modest fashion</p>
                    </div>
                    <div>
                      <img
                        src="https://images.asos-media.com/navigation/ww_clothing_lastchancetobuydress_2M_115452191?&$n_240w$"
                        alt=""
                      />
                      <p>Last chance</p>
                    </div>
                    <div>
                      <img
                        src="https://images.asos-media.com/navigation/ww_au_clothing_workwear_3M_109335997?&$n_240w$"
                        alt=""
                      />
                      <p>Workwear</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <Flex
              color={"white"}
              _hover={{ bgColor: "white", color: "black" }}
              alignItems={"center"}
              w="80px"
              justifyContent={"center"}
              h="49px"
            >
              <Link className={styles.Link} to="/womenmarketplace">
              <Text>Marketplace</Text>
              </Link>
              <div className={styles.megaBox}>
                <div className={styles.content}>
                  <div className={styles.row}>
                    <header style={{ textDecoration: "underline" }}>
                      SHOP BY TYPE
                    </header>
                    <ul className={styles.megaLinks}>
                      <li>
                        <a href="#">Dresses under £20</a>
                      </li>
                      <li>
                        <Link to={"/women/dress"}>View all</Link>
                      </li>
                      <li>
                        <Link>New in</Link>
                      </li>
                      <li>
                        <a href="#">Evening dresses</a>
                      </li>
                      <li>
                        <a href="#">Wedding guest dresses</a>
                      </li>
                      <li>
                        <a href="#">Day dresses</a>
                      </li>
                      <li>
                        <a href="#">Bridesmaid dresses</a>
                      </li>
                      <li>
                        <a href="#">Party dresses</a>
                      </li>
                      <li>
                        <a href="#">Wedding dresses</a>
                      </li>
                      <li>
                        <a href="#">Linen dresses</a>
                      </li>
                    </ul>
                  </div>
                  <div className={styles.row}>
                    <ul
                      style={{
                        borderLeft: "1px solid black",
                        paddingLeft: "10px",
                        marginTop: "0px",
                      }}
                      className={styles.megaLinks}
                    >
                      <header style={{ textDecoration: "underline" }}>
                        {" "}
                        SHOP BY TREND
                      </header>
                      <li>
                        <a href="#">Floral dresses</a>
                      </li>
                      <li>
                        <a href="#">Long sleeve dresses</a>
                      </li>
                      <li>
                        <a href="#">Maxi dresses</a>
                      </li>
                      <li>
                        <a href="#">Midi dresses</a>
                      </li>
                      <li>
                        <a href="#">Mini dresses</a>
                      </li>
                      <li>
                        <a href="#">Satin dresses</a>
                      </li>
                      <li>
                        <a href="#">Shirt dresses</a>
                      </li>
                      <li>
                        <a href="#">Smock dresses</a>
                      </li>
                      <li>
                        <a href="#">Summer Dresses</a>
                      </li>
                    </ul>
                  </div>

                  <div className={styles.row}>
                    <header style={{ textDecoration: "underline" }}>
                      SHOP BY BODY FIT
                    </header>
                    <div className={styles.midNavImg}>
                      <div>
                        <img
                          src="https://images.asos-media.com/products/topshop-curve-ultimate-blazer-dress-in-black/203178228-1-black?$n_480w$&wid=476&fit=constrain"
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          src="https://images.asos-media.com/products/topshop-curve-ombre-cut-out-long-sleeve-midi-dress-in-multi/203356957-1-multi?$n_480w$&wid=476&fit=constrain"
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          src="https://images.asos-media.com/products/river-island-plus-metallic-thread-mini-dress-in-silver/203984156-1-silver?$n_480w$&wid=476&fit=constrain"
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          src="https://images.asos-media.com/products/river-island-plus-zebra-plisse-midi-dress-in-black/204052072-1-black?$n_480w$&wid=476&fit=constrain"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.row}>
                    <header style={{ textDecoration: "underline" }}>
                      SHOP BY EDIT
                    </header>
                    <div className={styles.shopList}>
                      <div>
                        <img
                          src="https://images.asos-media.com/navigation/ww_gbl_clothing_wedding_3M_111178847?&$n_240w$"
                          alt=""
                        />
                        <p>Weading</p>
                      </div>
                      <div>
                        <img
                          src="https://images.asos-media.com/navigation/ww_gbl_clothing_bridal_3M_1618123?&$n_240w$"
                          alt=""
                        />
                        <p>Bridal</p>
                      </div>
                      <div>
                        <img
                          src="https://images.asos-media.com/navigation/ww_gbl_clothing_modestfashion_3M_114696164?&$n_240w$"
                          alt=""
                        />
                        <p>Modest fashion</p>
                      </div>
                      <div>
                        <img
                          src="https://images.asos-media.com/navigation/ww_clothing_lastchancetobuydress_2M_115452191?&$n_240w$"
                          alt=""
                        />
                        <p>Last chance</p>
                      </div>
                      <div>
                        <img
                          src="https://images.asos-media.com/navigation/ww_au_clothing_workwear_3M_109335997?&$n_240w$"
                          alt=""
                        />
                        <p>Workwear</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Flex>
          </li>
        </ul>
      </Box>
    </Box>
  );
};

export default SubNav;
