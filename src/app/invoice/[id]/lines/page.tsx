import { IPageParams } from '@/common/interfaces';
import { InvoiceLinesDetail } from '@/modules';
import { NextPage } from 'next';
import React from 'react';

const InvoiceLinesDetailPage: NextPage<IPageParams<{ id: string }>> = async (props) => {
  const params = await props.params;
  const searchParams = await props.searchParams;
  return (
    <InvoiceLinesDetail
      pageParams={{
        params,
        searchParams,
      }}
    />
  );
};

export default InvoiceLinesDetailPage;
