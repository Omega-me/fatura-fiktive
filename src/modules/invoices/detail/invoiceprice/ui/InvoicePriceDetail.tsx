'use client';
import React from 'react';
import useInvoicePriceDetailVm from '../useInvoicePriceDetailVm';
import { InvoicePreview, StepFooterButtons } from '@/components';
import { eInvoiceStepNames } from '@/common/enums';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const InvoicePriceDetail = () => {
  const vm = useInvoicePriceDetailVm();
  return (
    <>
      <StepFooterButtons
        nextBtnName={'Shiko faturen'}
        prevBtnName={eInvoiceStepNames.RRESHTAT}
        onClickNextBtn={vm.onClickNextBtn}
        onClickPrevBtn={vm.onClickPrevBtn}
      />
      <Card className="md:p-10 w-full flex justify-center">
        <Card className="p-4 w-full lg:w-[80%] xl:w-[70%] md:flex justify-center gap-2 md:justify-end border-0 md:border-[1px]">
          <div className="dark:bg-slate-600 bg-slate-200 border-white w-full rounded-sm"></div>
          <form className="w-full md:w-fit">
            <div className="flex md:w-80 items-center gap-2 my-2">
              <Label className="w-40 md:text-right md:mr-2">Vlera</Label>
              <Input />
            </div>
            <div className="flex md:w-80 items-center gap-2 my-2">
              <Label className="w-40 md:text-right md:mr-2">Zbritje</Label>
              <Input />
            </div>
            <div className="flex md:w-80 items-center gap-2 my-2">
              <Label className="w-40 md:text-right md:mr-2">Vlera - Zbritje</Label>
              <Input />
            </div>
            <div className="flex md:w-80 items-center gap-2 my-2">
              <Label className="w-40 md:text-right md:mr-2">TVSH</Label>
              <Input />
            </div>
            <div className="flex md:w-80 items-center gap-2 my-2">
              <Label className="w-40 md:text-right md:mr-2">Totali</Label>
              <Input />
            </div>
          </form>
        </Card>
      </Card>

      <StepFooterButtons
        nextBtnName={'Shiko faturen'}
        prevBtnName={eInvoiceStepNames.RRESHTAT}
        onClickNextBtn={vm.onClickNextBtn}
        onClickPrevBtn={vm.onClickPrevBtn}
      />
      <div className="mb-20"></div>
      <InvoicePreview />
    </>
  );
};

export default InvoicePriceDetail;
