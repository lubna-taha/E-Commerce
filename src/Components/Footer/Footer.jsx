import React from 'react'
import styles from './Footer.module.css'
const Footer = () => {
  return (
    <>
      <footer className='bg-main-light text-center fixed-bottom p-3 '>
        <h2 className='py-2'>Footer</h2>
        <div className="input-group  w-50 mx-auto">
          <input type="text" className="form-control" placeholder="Email" aria-label="Username" aria-describedby="addon-wrapping" />
        </div>

      </footer>
    </>
  )
}
export default Footer;