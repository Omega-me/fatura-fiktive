'use client';

import React, { useEffect } from 'react';
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
import { ChevronDown, LogOut, SunMoon } from 'lucide-react';
import { SignOutButton } from '@clerk/nextjs';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';
import { sidebarConfig } from '@/common/configs';
import { cn } from '@/common/utils';
import { useTheme } from 'next-themes';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu';
import { usePathname } from 'next/navigation';

const AppSidebar = () => {
  const { open, isMobile } = useSidebar();
  const { setTheme } = useTheme();

  const { setOpenMobile } = useSidebar();
  const pathname = usePathname();

  // close sidebar when changing path for mobile view
  useEffect(() => {
    setOpenMobile(false);
  }, [pathname, setOpenMobile]);

  return (
    <Sidebar variant="sidebar" collapsible="icon">
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
                      <SidebarMenuButton isActive={conf.path === '/' ? conf.path === pathname : `/${conf.path}` === pathname} asChild>
                        <Link href={`/${conf.path}`}>
                          {conf.Icon}
                          <span>{conf.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    ) : (
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <SidebarMenuButton
                            isActive={conf.path === '/' ? conf.path === pathname : `/${conf.path}` === pathname}
                            key={conf.id}
                            asChild
                          >
                            <Link href={`/${conf.path}`}>
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
        {isMobile && (
          <SidebarMenuButton>
            <SunMoon />
            <SidebarMenu>
              <SidebarMenuItem>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <SidebarMenuButton>
                      Ndrysho aparencen
                      <ChevronDown className="ml-auto" />
                    </SidebarMenuButton>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-[--radix-popper-anchor-width]">
                    <DropdownMenuItem onClick={() => setTheme('light')}>
                      <span>Light</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme('dark')}>
                      <span>Dark</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme('system')}>
                      <span>System</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarMenuButton>
        )}

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
