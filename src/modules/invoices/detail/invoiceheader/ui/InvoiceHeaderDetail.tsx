'use client';

import React from 'react';
import { useInvoiceHeaderDetailVm } from '../useInvoiceHeaderDetailVm';
import { InvoicePreview, StepFooterButtons } from '@/components';
import { eInvoiceStepNames } from '@/common/enums';

const InvoiceHeaderDetail = () => {
  const vm = useInvoiceHeaderDetailVm();
  return (
    <>
      <StepFooterButtons
        prevDisabled={true}
        nextDisabled={vm.isNextBtnDisabled()}
        nextBtnName={eInvoiceStepNames.RRESHTAT}
        onClickNextBtn={vm.onClickNextBtn}
      />
      <InvoicePreview />
    </>
  );
};

export default InvoiceHeaderDetail;
