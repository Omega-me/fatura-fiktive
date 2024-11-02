'use client';
import { IClientPageParams } from '@/common/interfaces';
import React, { FC } from 'react';
import useInvoicePriceDetailVm from '../useInvoicePriceDetailVm';
import { InvoicePreview } from '@/components';

interface Props {
  pageParams: IClientPageParams<{ id: string }>;
}

const InvoicePriceDetail: FC<Props> = (props) => {
  const vm = useInvoicePriceDetailVm({ ...props });
  return <InvoicePreview isMobile={vm.isMobile} pathname={vm.pathname} />;
};

export default InvoicePriceDetail;
