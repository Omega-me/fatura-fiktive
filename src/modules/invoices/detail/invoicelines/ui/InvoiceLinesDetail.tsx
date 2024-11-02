'use client';
import { IClientPageParams } from '@/common/interfaces';
import React, { FC } from 'react';
import useInvoiceLinesDetailVm from '../useInvoiceLinesDetailVm';
import { InvoicePreview } from '@/components';

interface Props {
  pageParams: IClientPageParams<{ id: string }>;
}

const InvoiceLinesDetail: FC<Props> = (props) => {
  const vm = useInvoiceLinesDetailVm({ ...props });
  return (
    <div>
      <InvoicePreview pathname={vm.pathname} isMobile={vm.isMobile} />
    </div>
  );
};

export default InvoiceLinesDetail;
