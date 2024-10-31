'use client';
import { Navbar, Footer, AppSidebar } from '@/components';
import { SidebarProvider } from '@/components/ui/sidebar';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import React, { PropsWithChildren } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface Props extends PropsWithChildren {}

const ShadCnProvider: React.FC<Props> = ({ children }) => {
  return (
    <>
      <SidebarProvider defaultOpen={false}>
        <TooltipProvider>
          <AppSidebar />
          <main className="w-full">
            <Navbar />
            {children}
          </main>
        </TooltipProvider>
      </SidebarProvider>
      <div className="w-full flex justify-center items-center">
        <Footer />
      </div>
    </>
  );
};

export default ShadCnProvider;
