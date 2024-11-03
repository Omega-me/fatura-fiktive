import { eRoutes } from '@/common/enums';
import { useParams, useRouter } from 'next/navigation';

const useInvoiceLinesDetailVm = () => {
  const router = useRouter();
  const params = useParams<{ id: string }>();

  const onClickNextBtn = () => {
    router.push(`/${eRoutes.INVOICE}/${params.id}/${eRoutes.INVOICE_LINES}/${eRoutes.INVOICE_PRICE}`);
  };

  const onClickPrevBtn = () => {
    router.push(`/${eRoutes.INVOICE}/${params.id}`);
  };

  return { onClickNextBtn, onClickPrevBtn };
};

export default useInvoiceLinesDetailVm;

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface IInvoiceLinesDetailVm extends ReturnType<typeof useInvoiceLinesDetailVm> {}
