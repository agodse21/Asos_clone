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
  
  useEffect(() => {
    dispatch(getaddcartdata())
  }, [])
  console.log(data)
  return (
      
    <div style={{width:"100%",margin:"auto"}}>
      <div className={styles.maincartpage}>
        {
          loading ? <div>Loading</div> : (<div>
            {
              data.length == 0 ? <div>
                <Blankcart/>
              </div> : <div>
              <div><Cartitemsdetails data={data} /></div>
                  <div><Ordersummary data={ data} /></div>
              </div>
            }
          </div>)
        }
        
          </div>
         </div>
  
  )
}

export default Maincartpage