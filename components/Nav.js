import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <div>
        <nav className=' flex justify-center items-center w-full m-4 '>
            <ul className=' flex gap-8 justify-center items-center border p-4 w-1/2 '>
                <li><Link href='/'>Home</Link></li>
                <li><Link href='/signup'>Sign Up</Link></li>
                <li><Link href='/signin'>Log In</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Nav