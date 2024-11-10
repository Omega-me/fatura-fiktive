'use client';
import React from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '../ui/sheet';
import FloatingButton from '../floatingbutton/FloatingButton';
import { useSidebar } from '../ui/sidebar';
import { PdfPreview } from '..';
import { Card } from '../ui/card';

const InvoicePreview = () => {
  const { isMobile } = useSidebar();

  return (
    <Sheet>
      <FloatingButton />
      <SheetContent hasCloseBnt={isMobile} className="mt-16 min-w-full md:min-w-fit">
        <SheetHeader>
          <SheetTitle>Fatura nuk ka perfunduar ende</SheetTitle>
        </SheetHeader>
        <div className="p-2 mb-10 w-full h-[550px] overflow-auto scrollbar-thin">
          <Card className="w-fit">
            <PdfPreview />
          </Card>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default InvoicePreview;
