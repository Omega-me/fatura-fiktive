'use client';
import React from 'react';
// import { useInvoiceLandingVm } from '../useInvoiceLandingVm';
import { AppTable } from '@/components';
import { invoiceColumns } from '@/common/configs';
import { invoiceTableData } from '@/common/data';

const InvoicesLanding = () => {
  // const vm = useInvoiceLandingVm();
  return (
    <div className="px-[30px]">
      <AppTable columns={invoiceColumns} data={invoiceTableData} />
    </div>
  );
};

export default InvoicesLanding;
