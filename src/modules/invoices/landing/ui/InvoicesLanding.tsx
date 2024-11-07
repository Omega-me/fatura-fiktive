'use client';
import React from 'react';
// import { useInvoiceLandingVm } from '../useInvoiceLandingVm';
import { AppTable } from '@/components';
import { lineColumns } from '@/common/configs';
import { lineTable } from '@/common/data';

const InvoicesLanding = () => {
  // const vm = useInvoiceLandingVm();
  return (
    <div className="px-[30px]">
      <AppTable columns={lineColumns} data={lineTable} />
    </div>
  );
};

export default InvoicesLanding;
