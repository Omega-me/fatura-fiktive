'use client';
import { IClientPageParams } from '@/common/interfaces';
import { useSidebar } from '@/components/ui/sidebar';
import { usePathname } from 'next/navigation';

interface IVmConfig {
  pageParams: IClientPageParams<{ id: string }>;
}

const useInvoicePriceDetailVm = (config: IVmConfig) => {
  console.log(config);
  const { isMobile } = useSidebar();
  const pathname = usePathname();
  return { isMobile, pathname };
};

export default useInvoicePriceDetailVm;

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface IInvoicePriceDetailVm extends ReturnType<typeof useInvoicePriceDetailVm> {}
