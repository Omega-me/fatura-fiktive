'use client';
import React from 'react';
import useInvoiceSummaryDeetailVm from '../useInvoiceSummaryDetailVm';
import { PdfPreview, StepFooterButtons } from '@/components';
import { eInvoiceStepNames } from '@/common/enums';
import { Card } from '@/components/ui/card';
import { Download } from 'lucide-react';

const InvoiceSummaryDetail = () => {
  const vm = useInvoiceSummaryDeetailVm();

  return (
    <>
      <StepFooterButtons
        prevBtnName={eInvoiceStepNames.CMIMI}
        nextBtnName="Shkarko faturen"
        nextIcon={<Download />}
        onClickNextBtn={vm.onClickNextBtn}
        onClickPrevBtn={vm.onClickPrevBtn}
      />
      <Card className="md:p-10 w-full flex justify-center">
        <Card className="p-4 w-auto md:flex justify-center gap-2 md:justify-end border-0 md:border-[1px] overflow-auto scrollbar-thin">
          <PdfPreview />
        </Card>
      </Card>
      <StepFooterButtons
        prevBtnName={eInvoiceStepNames.CMIMI}
        onClickPrevBtn={vm.onClickPrevBtn}
        nextBtnName="Shkarko faturen"
        nextIcon={<Download />}
        onClickNextBtn={vm.onClickNextBtn}
      />
    </>
  );
};

export default InvoiceSummaryDetail;
