'use client';
import { IClientPageParams } from '@/common/interfaces';
import { usePathname } from 'next/navigation';

interface IVmConfig {
  pageParams: IClientPageParams<{ id: string }>;
}

const useInvoiceSummaryDetailVm = (config: IVmConfig) => {
  console.log(config);
  const pathname = usePathname();
  return { pathname };
};

export default useInvoiceSummaryDetailVm;

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface IInvoiceSummaryDetailVm extends ReturnType<typeof useInvoiceSummaryDetailVm> {}
