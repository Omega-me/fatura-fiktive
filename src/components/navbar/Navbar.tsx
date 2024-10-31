import { SignedIn, UserButton } from '@clerk/nextjs';
import React from 'react';
import { ModeToggle } from '..';
import Link from 'next/link';
import { eRoutes } from '@/common/enums';

const Navbar = () => {
  return (
    <div className="w-full flex justify-between p-4 items-center border-b-2 sticky top-0 mb-10 z-[100] shadow-md dark:bg-slate-950 bg-white">
      <Link href={eRoutes.HOME}>
        <div className="w-11 h-11 text-white  bg-slate-600 flex justify-center items-center">Logo</div>
      </Link>
      <div className="flex justify-between items-center gap-8">
        <SignedIn>
          <UserButton showName userProfileMode="navigation" userProfileUrl="/profile" />
        </SignedIn>
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
