'use client';
import React from 'react';
import useInvoicePriceDetailVm from '../useInvoicePriceDetailVm';
import { InvoicePreview, StepFooterButtons } from '@/components';
import { eInvoiceStepNames } from '@/common/enums';

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
      <InvoicePreview />
    </>
  );
};

export default InvoicePriceDetail;
