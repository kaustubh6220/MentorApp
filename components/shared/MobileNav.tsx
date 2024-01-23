"use client"

import React from 'react'
import Image from 'next/image'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Separator } from '../ui/separator'
import NavItems from './NavItems'

interface NavbarProps {
  userRole: string | undefined;
}

const MobileNav: React.FC<NavbarProps> = ({ userRole }) => {
  return (
    <nav className=''>
        <Sheet>
        <SheetTrigger className='align-middle'>
            <Image
                src="/assets/icons/menu.svg"
                alt="menu"
                width={24}
                height={24}
                className=' cursor-pointer' 
            /></SheetTrigger>
        <SheetContent className='flex flex-col gap-6 bg-white '>
            <Image
                src="/assets/images/logo.svg"
                alt='logo'
                width={128}
                height={38}
            />
            <Separator className='border border-grey-50 '/>
            <NavItems userRole={userRole}/>
        </SheetContent>
        </Sheet>


    </nav>
  )
}

export default MobileNav
