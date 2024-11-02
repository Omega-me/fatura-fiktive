'use client';
import React from 'react';
import useInvoicePriceDetailVm from '../useInvoicePriceDetailVm';
import { InvoicePreview } from '@/components';

const InvoicePriceDetail = () => {
  const vm = useInvoicePriceDetailVm();
  return <InvoicePreview isMobile={vm.isMobile} pathname={vm.pathname} />;
};

export default InvoicePriceDetail;
