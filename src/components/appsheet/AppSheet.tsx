'use client';
import { Button } from '@/components/ui/button';
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { FC, ReactNode } from 'react';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';
import { useSidebar } from '../ui/sidebar';

interface Props {
  tootltip?: string;
  icon: ReactNode;
  content: ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const AppSheet: FC<Props> = (props) => {
  const { isMobile } = useSidebar();

  return (
    <Sheet>
      {props.tootltip ? (
        <Tooltip>
          <TooltipTrigger asChild>
            <SheetTrigger asChild>
              <Button onClick={props.onClick} variant="outline" className="h-8 w-8 p-0">
                {props.icon}
              </Button>
            </SheetTrigger>
          </TooltipTrigger>
          <TooltipContent>
            <p>{props.tootltip}</p>
          </TooltipContent>
        </Tooltip>
      ) : (
        <SheetTrigger asChild>
          <Button variant="outline">{props.icon}</Button>
        </SheetTrigger>
      )}
      <SheetContent className="mt-16 min-w-full md:min-w-[500px]" hasCloseBnt={isMobile}>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>Make changes to your profile here. Click save when youre done.</SheetDescription>
        </SheetHeader>
        {props.content}
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default AppSheet;
