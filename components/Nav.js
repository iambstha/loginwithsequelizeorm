import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <div>
        <nav className=' flex justify-center items-center w-full '>
            <ul className=' flex gap-8 justify-center items-center border-b p-4 w-full '>
                <li><Link href='/'>Home</Link></li>
                {/* <li><Link href='/signup'>Sign Up</Link></li> */}
                <li><Link href='/login'>Log In</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Nav