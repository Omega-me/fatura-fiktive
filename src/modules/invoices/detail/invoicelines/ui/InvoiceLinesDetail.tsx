'use client';
import React from 'react';
import useInvoiceLinesDetailVm from '../useInvoiceLinesDetailVm';
import { InvoicePreview, StepFooterButtons } from '@/components';
import { eInvoiceStepNames } from '@/common/enums';

const InvoiceLinesDetail = () => {
  const vm = useInvoiceLinesDetailVm();
  return (
    <>
      <StepFooterButtons
        nextBtnName={eInvoiceStepNames.CMIMI}
        prevBtnName={eInvoiceStepNames.FATURA}
        onClickNextBtn={vm.onClickNextBtn}
        onClickPrevBtn={vm.onClickPrevBtn}
      />
      <InvoicePreview />
    </>
  );
};

export default InvoiceLinesDetail;
