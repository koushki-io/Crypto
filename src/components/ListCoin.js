import React, { useEffect, useState } from 'react'
import { getCoin } from '../services/api'
import axios from 'axios'
import Coin from './shared/Coin'
import styles from './ListCoin.module.css'

//component
import Loader from './Loader'

const ListCoin = () => {
    const [data, setdata] = useState([])
    const [serch, setserch] = useState('')
    const [sort, setsort] = useState('')
    console.log(serch);
    
   
    useEffect(() => {
      const getData=async()=>{
        setdata(await getCoin())
        console.log(data);
   
    }
        getData()
     
    }, [])
  return (
    < >
      <input className={styles.input}
      onChange={(e)=>{
          setserch(e.target.value)
      }}
      value={serch}
      type="text" name="serch"placeholder='serch...' />
      <select 
      className={styles.selected}
      onChange={(e)=>{
        setsort(e.target.value)

      }}>
        <option>market_cap_rank"</option>
        <option>max</option>
        <option>min</option>
      </select>
    
      {data.length ?
       <div className={styles.coinContainer}>
         {data.filter(item=>item.symbol.toLowerCase().includes(serch.toLowerCase().trim()) || item.name.toLowerCase().includes(serch.toLowerCase().trim()))
         .sort((a,b)=>{
          switch (sort) {
            case "market_cap_rank":  
             return a.market_cap_rank  - b.market_cap_rank 

            case "max":  
             return    b.current_price  - a.current_price  
            case "min":  

             return a.current_price - b.current_price
          
    
          }

      }).map((item)=> <Coin 
       key={item.id} 
       name={item.name} 
       id={item.id}
       image={item.image}
       price={item.current_price}
       symbol={item.symbol}
       marketCap={item.market_cap}
       priceChange={item.price_change_percentage_24h}

       /> )
      }</div> 
        :
        <Loader/>
    }

    </>
  )
  
}

export default ListCoin