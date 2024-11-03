'use client';
import React from 'react';
import useInvoiceSummaryDeetailVm from '../useInvoiceSummaryDetailVm';
import { StepFooterButtons } from '@/components';
import { eInvoiceStepNames } from '@/common/enums';

const InvoiceSummaryDetail = () => {
  const vm = useInvoiceSummaryDeetailVm();
  return (
    <>
      <StepFooterButtons nextDisabled={true} prevBtnName={eInvoiceStepNames.CMIMI} onClickPrevBtn={vm.onClickPrevBtn} />
    </>
  );
};

export default InvoiceSummaryDetail;
