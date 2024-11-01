'use client';

import React from 'react';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from '../ui/sidebar';
import Link from 'next/link';
import { LogOut } from 'lucide-react';
import { SignOutButton } from '@clerk/nextjs';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';
import { sidebarConfig } from '@/common/configs';
import { cn } from '@/common/utils';

const AppSidebar = () => {
  const { open, isMobile } = useSidebar();

  return (
    <Sidebar variant="floating" collapsible="icon">
      <SidebarHeader>
        {open && !isMobile ? (
          <SidebarTrigger sidebarLabel="Mbyll" className="w-full justify-start items-center pl-2" />
        ) : (
          <Tooltip>
            <TooltipTrigger asChild>
              <SidebarTrigger sidebarLabel="Mbyll" className="w-full justify-start items-center pl-2" />
            </TooltipTrigger>
            {!isMobile && (
              <TooltipContent className="z-[192]" side="right">
                <p>Hap</p>
              </TooltipContent>
            )}
          </Tooltip>
        )}
      </SidebarHeader>

      <div
        className={cn('mt-10', {
          'mt-5': !isMobile,
        })}
      ></div>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                {sidebarConfig.map((conf) => (
                  <div key={conf.id}>
                    {open ? (
                      <SidebarMenuButton asChild>
                        <Link href={conf.path}>
                          {conf.Icon}
                          <span>{conf.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    ) : (
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <SidebarMenuButton key={conf.id} asChild>
                            <Link href={conf.path}>
                              {conf.Icon}
                              <span>{conf.title}</span>
                            </Link>
                          </SidebarMenuButton>
                        </TooltipTrigger>
                        {!isMobile && (
                          <TooltipContent side="right">
                            <p>{conf.title}</p>
                          </TooltipContent>
                        )}
                      </Tooltip>
                    )}
                  </div>
                ))}
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        {open ? (
          <SignOutButton>
            <SidebarMenuButton>
              <LogOut />
              <span>Dil</span>
            </SidebarMenuButton>
          </SignOutButton>
        ) : (
          <Tooltip>
            <TooltipTrigger asChild>
              <SignOutButton>
                <SidebarMenuButton>
                  <LogOut />
                  <span>Dil</span>
                </SidebarMenuButton>
              </SignOutButton>
            </TooltipTrigger>
            {!isMobile && (
              <TooltipContent side="right">
                <p>Dil</p>
              </TooltipContent>
            )}
          </Tooltip>
        )}
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
