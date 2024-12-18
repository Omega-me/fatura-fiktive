'use client';

import { eRoutes } from '@/common/enums';
import { useClientFirstRender } from '@/hooks';
import { useParams, useRouter } from 'next/navigation';

const useInvoiceSummaryDetailVm = () => {
  const router = useRouter();
  const params = useParams();
  useClientFirstRender();

  const onClickPrevBtn = () => {
    router.push(`/${eRoutes.INVOICE}/${params.id}/${eRoutes.INVOICE_LINES}/${eRoutes.INVOICE_PRICE}`);
  };

  const onClickNextBtn = () => {
    router.push(`/api/${eRoutes.INVOICES}/${params.id}/${eRoutes.INVOICE_DOWNLOAD}`);
  };
  return { onClickPrevBtn, onClickNextBtn };
};

export default useInvoiceSummaryDetailVm;

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface IInvoiceSummaryDetailVm extends ReturnType<typeof useInvoiceSummaryDetailVm> {}
