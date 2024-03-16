import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='border-t'>
      <div className='flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row'>
        <div className="flex items-center gap-2">
          <Link href='/'>
            <Image src='/assets/images/mitlogo.jpeg' alt='MIT ADT University' width={58} height={12}></Image>
          </Link>
          <p>MIT ADT University</p>
        </div>
        
        <div>
          <p>&copy; {new Date().getFullYear()} MIT ADT University. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
