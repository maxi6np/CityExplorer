import React from 'react'
import { Footer } from './Footer'
import { NavBar } from './NavBar/NavBar'

export const Error404 = () => {
  return (
    <>
      <div className='app'>
        <div className='content' style={{ background: 'linear-gradient(#FF6347,#FF4500)' }}>
          <NavBar />
        </div>
        <div id='wrapper' style={{ height: '100%' }}>
          <div style={{ display:'flex', alignItems:'center', flexDirection:'column',justifyContent:'center', height:'100%'}}>
            <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'black' }}>Error 404</h1>
            <p style={{ fontSize: '1.5rem', color: 'black' }}>Page Not Found</p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}
