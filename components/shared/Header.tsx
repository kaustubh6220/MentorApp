"use client"; // Importing Client Component context
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";
import { usePathname } from "next/navigation"; // Using next/navigation instead of next/router

interface NavbarProps {
  userRole: string | undefined;
}

const Header: React.FC<NavbarProps> = ({ userRole }) => {
  const pathname = usePathname(); // Using usePathname from next/navigation

  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center justify-between">
        <div className="flex items-center"> {/* Left-aligned content */}
          <Link href="/" className="w-36">
            <Image 
              src="/assets/images/adtulogo.jpeg" 
              width={108} 
              height={28}
              alt="MIT logo" 
            />
          </Link>
        </div>

        <div className="flex flex-grow justify-center"> {/* Center content */}
          <h1 style={{ fontWeight: 'bold',fontSize: '28px' }}>MIT ADT UNIVERSITY MENTOR JUNCTION</h1> {/* Text centered */}
        </div>

        <div className="flex w-32 justify-end gap-3">
          <SignedIn>
            <UserButton afterSignOutUrl="/sign-in" />
            <MobileNav userRole={userRole}/>
          </SignedIn>
          <SignedOut>
            <Button asChild className="rounded-full" size="lg">
              <Link href="/sign-in">
                Login
              </Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  )
}

export default Header;
