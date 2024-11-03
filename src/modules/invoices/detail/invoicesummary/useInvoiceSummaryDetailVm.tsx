'use client';

import { eRoutes } from '@/common/enums';
import { useParams, useRouter } from 'next/navigation';

const useInvoiceSummaryDetailVm = () => {
  const router = useRouter();
  const params = useParams();

  const onClickPrevBtn = () => {
    router.push(`/${eRoutes.INVOICE}/${params.id}/${eRoutes.INVOICE_LINES}/${eRoutes.INVOICE_PRICE}`);
  };
  return { onClickPrevBtn };
};

export default useInvoiceSummaryDetailVm;

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface IInvoiceSummaryDetailVm extends ReturnType<typeof useInvoiceSummaryDetailVm> {}
