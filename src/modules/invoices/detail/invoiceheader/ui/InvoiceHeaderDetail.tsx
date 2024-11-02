'use client';

import React, { FC } from 'react';
import { useInvoiceHeaderDetailVm } from '../useInvoiceHeaderDetailVm';
import { IClientPageParams } from '@/common/interfaces';
import { InvoicePreview } from '@/components';

interface Props {
  pageParams?: IClientPageParams<{ id: string }>;
}

const InvoiceHeaderDetail: FC<Props> = (props) => {
  const vm = useInvoiceHeaderDetailVm({ ...props });
  return (
    <div>
      <InvoicePreview pathname={vm.pathname} isMobile={vm.isMobile} />
    </div>
  );
};

export default InvoiceHeaderDetail;
