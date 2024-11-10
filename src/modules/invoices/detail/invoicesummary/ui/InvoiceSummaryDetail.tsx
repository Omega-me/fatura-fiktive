'use client';
import React from 'react';
import useInvoiceSummaryDeetailVm from '../useInvoiceSummaryDetailVm';
import { Pdf, StepFooterButtons } from '@/components';
import { eInvoiceStepNames } from '@/common/enums';
import { Card } from '@/components/ui/card';
import Link from 'next/link';

const InvoiceSummaryDetail = () => {
  const vm = useInvoiceSummaryDeetailVm();

  return (
    <>
      <StepFooterButtons nextDisabled={true} prevBtnName={eInvoiceStepNames.CMIMI} onClickPrevBtn={vm.onClickPrevBtn} />
      <Link href={'/api/invoices'}>Download</Link>
      <Card className="md:p-10 w-full flex justify-center">
        <Card className="p-4 w-auto md:flex justify-center gap-2 md:justify-end border-0 md:border-[1px] overflow-auto scrollbar-thin">
          <Pdf isPdfMode={false} />
        </Card>
      </Card>
      <StepFooterButtons nextDisabled={true} prevBtnName={eInvoiceStepNames.CMIMI} onClickPrevBtn={vm.onClickPrevBtn} />
    </>
  );
};

export default InvoiceSummaryDetail;
