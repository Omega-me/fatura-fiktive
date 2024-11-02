import { SignedIn, UserButton } from '@clerk/nextjs';
import React from 'react';
import { ModeToggle } from '..';
import Link from 'next/link';
import { eRoutes } from '@/common/enums';
import { SidebarTrigger, useSidebar } from '../ui/sidebar';

const Navbar = () => {
  const { isMobile } = useSidebar();
  return (
    <div className="w-full flex justify-between p-4 items-center border-b-2 sticky top-0 mb-10 z-[100]  dark:bg-slate-950 bg-white">
      <div className="flex justify-between items-center gap-8">
        {isMobile && <SidebarTrigger />}
        <Link href={eRoutes.HOME}>Logo</Link>
      </div>
      <div className="flex justify-between items-center gap-8">
        <SignedIn>
          <UserButton showName={!isMobile} userProfileMode="modal" />
        </SignedIn>
        {!isMobile && <ModeToggle />}
      </div>
    </div>
  );
};

export default Navbar;
