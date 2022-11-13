import React, { useEffect } from 'react'
import Cartitemsdetails from './Cartitemsdetails'
import Ordersummary from './Ordersummary'
import styles from "./Maincartpage.module.css"
import { useDispatch, useSelector } from 'react-redux'
import Blankcart from './Blankcart'
import { getaddcartdata } from '../../Redux/Addtocart/action'
const Maincartpage = () => {
  const dispatch=useDispatch()
  const { data, loading, error } = useSelector((state) => state.CartReducer);
  console.log("befordta",data)
  useEffect(() => {
    dispatch(getaddcartdata())
  }, [getaddcartdata])
  console.log(data)
  return (
      
    <div  className={styles.addtocartbox}>
      <div >
        {
          loading ? <div>Loading</div> : (<div>
            {
              data.length == 0 ? <div>
                <Blankcart/>
              </div> : <div className={styles.maincartpageitem}>
              <div className={styles.cartitemcomp}><Cartitemsdetails data={data} /></div>
                  <div className={styles.ordersumcomp}><Ordersummary data={ data} /></div>
              </div>
            }
          </div>)
        }
        
          </div>
         </div>
  
  )
}

export default Maincartpage