'use client';

import { eMode, eRoutes } from '@/common/enums';
import { getModeById } from '@/common/utils';
import { useRouter, useParams } from 'next/navigation';

export const useInvoiceHeaderDetailVm = () => {
  const router = useRouter();
  const params = useParams<{ id: string }>();
  const mode = getModeById(params.id);

  const onClickNextBtn = () => {
    router.push(`/${eRoutes.INVOICE}/${params.id}/${eRoutes.INVOICE_LINES}`);
  };

  const isNextBtnDisabled = () => {
    //TODO: handle the logic for the upsert invoice
    return mode === eMode.NEW;
  };

  return { onClickNextBtn, isNextBtnDisabled };
};

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface IInvoiceHeaderDetail extends ReturnType<typeof useInvoiceHeaderDetailVm> {}
