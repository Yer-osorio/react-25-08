import React from 'react'
import Foto from './Assets/DSC02529.jpg'

function Home() {
  return (
    <div>
      <h1>Hola, estamos trabajando con react</h1>
      <div className='container'>
            <h2 className='titulo1'>Este es un titulo</h2>
                <img  className='img' src={Foto}></img>

      </div>
    </div>
  )
}

export default Home