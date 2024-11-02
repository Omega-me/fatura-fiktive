'use client';
import React from 'react';
import useInvoiceLinesDetailVm from '../useInvoiceLinesDetailVm';
import { InvoicePreview } from '@/components';

const InvoiceLinesDetail = () => {
  const vm = useInvoiceLinesDetailVm();
  return (
    <div>
      <InvoicePreview pathname={vm.pathname} isMobile={vm.isMobile} />
    </div>
  );
};

export default InvoiceLinesDetail;
