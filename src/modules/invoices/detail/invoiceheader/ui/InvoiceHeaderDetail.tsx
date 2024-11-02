'use client';

import React from 'react';
import { useInvoiceHeaderDetailVm } from '../useInvoiceHeaderDetailVm';
import { InvoicePreview } from '@/components';

const InvoiceHeaderDetail = () => {
  const vm = useInvoiceHeaderDetailVm();
  return (
    <div>
      <InvoicePreview pathname={vm.pathname} isMobile={vm.isMobile} />
    </div>
  );
};

export default InvoiceHeaderDetail;
