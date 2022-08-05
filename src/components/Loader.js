import React from 'react'

//Gof
import Loading from '../Gif/Loading.gif'

const Loader = () => {
  return (
    <div>
        <img src={Loading} alt="Loading" />
        <h1>Loading...</h1>
    </div>
  )
}

export default Loader