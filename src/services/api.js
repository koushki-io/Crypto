import axios from "axios"

 export const BASE_URL='https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false'

export const getCoin=async()=>{
    const {data}=await axios.get(BASE_URL);
    return data

}