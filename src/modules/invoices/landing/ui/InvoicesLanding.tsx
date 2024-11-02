'use client';
import React from 'react';
import { useInvoiceLandingVm } from '../useInvoiceLandingVm';

const InvoicesLanding = () => {
  const vm = useInvoiceLandingVm();
  return (
    <div>
      <pre>{JSON.stringify(vm)}</pre>
    </div>
  );
};

export default InvoicesLanding;
