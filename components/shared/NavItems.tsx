import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { sidebarLinks } from '@/constants'
import { usePathname, useRouter } from 'next/navigation'

interface NavbarProps {
  userRole: string | undefined;
}

const NavItems: React.FC<NavbarProps> = ({ userRole }) => {
  console.log(userRole)
  const pathname = usePathname();
  const router = useRouter();
  

  return (
    <>
    <ul className='flex w-full flex-col items-start gap-5'>
      {sidebarLinks.map((link) => (
        (link.role === 'admin' && userRole === 'admin') || !link.role ? (
          <Link key={link.label} href={link.route}>
            <div className='mr-5 cursor-pointer hover:text-gray-900'>
              {link.label}
            </div>
          </Link>
        ) : null
      ))}
    </ul>
      <ul className='flex w-full flex-col items-start gap-5'>
        {sidebarLinks.map((link) => (
          (link.role === 'mentee' && userRole === 'mentee') || !link.role ? (
            <Link key={link.label} href={link.route}>
              <div className='mr-5 cursor-pointer hover:text-gray-900'>
                {link.label}
              </div>
            </Link>
          ) : null
        ))}
      </ul>

      <ul className='flex w-full flex-col items-start gap-5'>
        {sidebarLinks.map((link) => (
          (link.role === 'faculty' && userRole === 'faculty') || !link.role ? (
            <Link key={link.label} href={link.route}>
              <div className='mr-5 cursor-pointer hover:text-gray-900'>
                {link.label}
              </div>
            </Link>
          ) : null
        ))}
      </ul>
      </>
  );
}

export default NavItems
