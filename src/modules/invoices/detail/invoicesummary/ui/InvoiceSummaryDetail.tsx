'use client';
import React from 'react';
import useInvoiceSummaryDeetailVm from '../useInvoiceSummaryDetailVm';
import { Pdf, StepFooterButtons } from '@/components';
import { eInvoiceStepNames } from '@/common/enums';
import { Card } from '@/components/ui/card';

const InvoiceSummaryDetail = () => {
  const vm = useInvoiceSummaryDeetailVm();

  return (
    <>
      <StepFooterButtons nextDisabled={true} prevBtnName={eInvoiceStepNames.CMIMI} onClickPrevBtn={vm.onClickPrevBtn} />
      <Card className="sticky top-[70px] md:p-10 w-full flex justify-center">
        <Card className="p-4 w-full lg:w-[80%] xl:w-[70%] md:flex justify-center gap-2 md:justify-end border-0 md:border-[1px]">
          <Pdf />
        </Card>
      </Card>
      <StepFooterButtons nextDisabled={true} prevBtnName={eInvoiceStepNames.CMIMI} onClickPrevBtn={vm.onClickPrevBtn} />
    </>
  );
};

export default InvoiceSummaryDetail;
