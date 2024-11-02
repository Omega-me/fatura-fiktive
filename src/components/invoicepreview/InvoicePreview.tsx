import React, { FC } from 'react';
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle } from '../ui/sheet';
import FloatingButton from '../floatingbutton/FloatingButton';

interface Props {
  isMobile: boolean;
  pathname: string;
}
const InvoicePreview: FC<Props> = (props) => {
  return (
    <Sheet>
      <FloatingButton />
      <SheetContent hasCloseBnt={props.isMobile} className="mt-16 min-w-full md:min-w-[80%] xl:min-w-[70%]">
        <SheetHeader>
          <SheetTitle>Fatura nuk ka perfunduar ende</SheetTitle>
          <SheetDescription>Me poshte paraqitet nje pamje e fatures me te dhenat qe keni plotesuar deri tani</SheetDescription>
        </SheetHeader>
        {/* Render pdf view step by step */}
        <p>Ky eshte pathi {props.pathname}</p>
        <SheetFooter>{/* TODO:Add action button */}</SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default InvoicePreview;
