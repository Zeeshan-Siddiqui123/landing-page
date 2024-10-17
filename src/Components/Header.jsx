import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <div className='bg-black flex items-center justify-between w-full h-[80px] fixed top-0 z-[2]'>
        <div>
            <h1 className='text-white'>Landing Page</h1>
        </div>
        <div className='flex items-center justify-center gap-8'>
            <Link to='/' className='text-white '>Home</Link>
            <Link to='/about' className='text-white '>About</Link>
            <Link to='/products' className='text-white '>Products</Link>
        </div>
        <div>
            <button className='w-[150px] p-2 h-[50px] rounded-md border-black bg-white text-black'>
                {/* <Link to='/account'>Login/Sign up</Link> */}
            <Link to='/contact' className='text-black'>Contact</Link>

            </button>
        </div>
      </div>
    </div>
  )
}

export default Header
