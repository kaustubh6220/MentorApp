"use client";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
import NavItems from "./NavItems"
import MobileNav from "./MobileNav"
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useState } from "react"

interface NavbarProps {
  userRole: string | undefined;
}

const Header: React.FC<NavbarProps> = ({ userRole }) => {
  const pathname = usePathname();
  const router = useRouter();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!isLoaded) {
      // Check user role and redirect if needed
      if (
        (userRole === 'admin' && ['/user'].includes(pathname)) ||
        (userRole === 'mentee' && ['/admin', '/user','/menteelist', '/mentorlist','/add','/editrole'].includes(pathname))
      ) {
        router.push('/');
      } else {
        setIsLoaded(true);
      }
    }
  }, [pathname, userRole]);

  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="w-36">
          <Image 
            src="/assets/images/logo.svg" width={128} height={38}
            alt="MIT logo" 
          />
        </Link>

        {/* <SignedIn>
          <nav className="md:flex-between hidden w-full max-w-xs">
            <NavItems />
          </nav>
        </SignedIn> */}

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

export default Header