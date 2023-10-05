import React from 'react'
import {GitHub,Instagram,LinkedIn} from '@mui/icons-material'
import '../styles/Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
         <a href='https://github.com/ARUN-MOHAN-USHA/bootstrap-site'>
         <GitHub/>
         </a>
         <a href='https://www.instagram.com/arun.mohan_/'>
         <Instagram/>
         </a>
         <a href='https://www.linkedin.com/in/arun-m-3309b8228'>
         <LinkedIn/>
         </a>
        </div>
        {/* <p>&copy; 2022 abc.app</p> */}
    </div>
  )
}

export default Footer