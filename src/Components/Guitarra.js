import React from 'react'
import Imagen from './Assets/DSC00514.jpg'

const Guitarra = () => {
  return (
    <div className='App'>
       <header> 
        <h1>Yamaha Silent</h1>
        </header>
        <img className='img' src={Imagen}></img>
    </div>
  )
}

export default Guitarra
