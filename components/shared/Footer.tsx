import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='border-t'>
      <div className='wrapper flex items-center justify-between p-5 text-left'>
        {/* All Rights Reserved */}
        <div>
          <p>&copy; {new Date().getFullYear()} MIT ADT University. All Rights Reserved.</p>
        </div>

        {/* Social media buttons and Logo */}
        <div className="flex items-center gap-4">
          <Link href='https://www.linkedin.com/school/mit-art-design-&-technology-university/'> {/* Link to your LinkedIn profile */}
            <Image src='/assets/images/linkedin.png' alt='LinkedIn' width={24} height={24}></Image>
          </Link>
          <Link href='https://www.instagram.com/accounts/login/?next=/mitadtuniversity/'> {/* Link to your Instagram profile */}
            <Image src='/assets/images/instagram.jpeg' alt='Instagram' width={24} height={24}></Image>
          </Link>
          <Link href='https://twitter.com/mitadtpune'> {/* Link to your Twitter profile */}
            <Image src='/assets/images/x.png' alt='Twitter' width={24} height={24}></Image>
          </Link>
          <Link href='https://www.facebook.com/mitadtuniversity'> {/* Link to your Facebook page */}
            <Image src='/assets/images/facebook.jpeg' alt='Facebook' width={24} height={24}></Image>
          </Link>
          <Link href='https://www.youtube.com/c/MITADTUniversityPune'> {/* Link to your YouTube channel */}
            <Image src='/assets/images/youtube.jpeg' alt='YouTube' width={24} height={24}></Image>
          </Link>
          <Link href='/'> {/* Link to your homepage */}
            <Image src='/assets/images/mitlogo.jpeg' alt='MIT ADT University' width={70} height={12}></Image>
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
