'use client';
import React, { FC } from 'react';
import useInvoiceSummaryDeetailVm from '../useInvoiceSummaryDetailVm';
import { IClientPageParams } from '@/common/interfaces';

interface Props {
  pageParams: IClientPageParams<{ id: string }>;
}

const InvoiceSummaryDetail: FC<Props> = (props) => {
  const vm = useInvoiceSummaryDeetailVm({ ...props });
  return <div>{vm.pathname}</div>;
};

export default InvoiceSummaryDetail;
