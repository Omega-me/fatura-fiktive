'use client';

import { IClientPageParams } from '@/common/interfaces';
import { useSidebar } from '@/components/ui/sidebar';
import { usePathname } from 'next/navigation';

interface IVmConfig {
  pageParams?: IClientPageParams<{ id: string }>;
}

export const useInvoiceHeaderDetailVm = (config: IVmConfig) => {
  console.log(config.pageParams?.params.id);
  const { isMobile } = useSidebar();
  const pathname = usePathname();

  return { isMobile, pathname };
};

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface IInvoiceHeaderDetail extends ReturnType<typeof useInvoiceHeaderDetailVm> {}
