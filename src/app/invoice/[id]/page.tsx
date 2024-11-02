import { IPageParams } from '@/common/interfaces';
import { InvoiceHeaderDetail } from '@/modules';
import { NextPage } from 'next';
import React from 'react';

const InvoiceHeaderDetailPage: NextPage<IPageParams<{ id: string }>> = async (props) => {
  const params = await props.params;
  const searchParams = await props.searchParams;
  return (
    <InvoiceHeaderDetail
      pageParams={{
        params,
        searchParams,
      }}
    />
  );
};

export default InvoiceHeaderDetailPage;
