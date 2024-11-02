'use client';
import React from 'react';
import useInvoiceSummaryDeetailVm from '../useInvoiceSummaryDetailVm';

const InvoiceSummaryDetail = () => {
  const vm = useInvoiceSummaryDeetailVm();
  return <div>{vm.pathname}</div>;
};

export default InvoiceSummaryDetail;
