import { IPageParams } from '@/common/interfaces';
import { InvoicePriceDetail } from '@/modules';
import { NextPage } from 'next';
import React from 'react';

const InvoicePriceDetailPage: NextPage<IPageParams<{ id: string }>> = async (props) => {
  const params = await props.params;
  const searchParams = await props.searchParams;
  return (
    <InvoicePriceDetail
      pageParams={{
        params,
        searchParams,
      }}
    />
  );
};

export default InvoicePriceDetailPage;
