'use client';
import { usePathname } from 'next/navigation';

const useInvoiceSummaryDetailVm = () => {
  const pathname = usePathname();
  return { pathname };
};

export default useInvoiceSummaryDetailVm;

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface IInvoiceSummaryDetailVm extends ReturnType<typeof useInvoiceSummaryDetailVm> {}
