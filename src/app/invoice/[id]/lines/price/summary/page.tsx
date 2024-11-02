import { IPageParams } from '@/common/interfaces';
import { InvoiceSummaryDeetail } from '@/modules';
import { NextPage } from 'next';
import React from 'react';

const InvoiceSummaryDetailPage: NextPage<IPageParams<{ id: string }>> = async (props) => {
  const params = await props.params;
  const searchParams = await props.searchParams;
  return (
    <InvoiceSummaryDeetail
      pageParams={{
        params,
        searchParams,
      }}
    />
  );
};

export default InvoiceSummaryDetailPage;
