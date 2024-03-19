import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div style={{backgroundColor : "#430A5D", color : "#EEE4B1"}} className='p-3 fw-bold'>
      <footer className='contanier'>
        <ul className='d-md-flex list-inline text-center justify-content-md-around'>
            <li className='my-3 '><Link to="about" className='text-decoration-none' style={{color: "#EEE4B1"}}>About</Link></li>
            <li className='my-3'>Contact us</li>
            <li className='my-3'>Help & Support</li>
            <li className='my-3'>Terms and condition</li>
            <li className='my-3'>Privacy policy</li>
        </ul>
      </footer>
    </div>
  )
}

export default Footer
