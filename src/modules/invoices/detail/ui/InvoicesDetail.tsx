import { IPageParams } from '@/common/interfaces';
import React from 'react';
import { useInvoiceDetailVm } from '../useInvoicesDetailVm';

interface Props {
  pageParams: IPageParams;
}

const InvoicesDetail: React.FC<Props> = (props) => {
  const vm = useInvoiceDetailVm(props);

  return (
    <div>
      <pre>{JSON.stringify(vm)}</pre>
    </div>
  );
};

export default InvoicesDetail;
