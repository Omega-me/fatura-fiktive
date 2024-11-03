'use client';
import { eRoutes } from '@/common/enums';
import { useParams, usePathname, useRouter } from 'next/navigation';

const useInvoicePriceDetailVm = () => {
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams<{ id: string }>();

  const onClickNextBtn = () => {
    router.push(`/${eRoutes.INVOICE}/${params.id}/${eRoutes.INVOICE_LINES}/${eRoutes.INVOICE_PRICE}/${eRoutes.INVOICE_SUMMARY}`);
  };

  const onClickPrevBtn = () => {
    router.push(`/${eRoutes.INVOICE}/${params.id}/${eRoutes.INVOICE_LINES}`);
  };

  return { pathname, onClickNextBtn, onClickPrevBtn };
};

export default useInvoicePriceDetailVm;

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface IInvoicePriceDetailVm extends ReturnType<typeof useInvoicePriceDetailVm> {}
