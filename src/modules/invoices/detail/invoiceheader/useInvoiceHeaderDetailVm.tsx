'use client';

import { useSidebar } from '@/components/ui/sidebar';
import { usePathname } from 'next/navigation';

export const useInvoiceHeaderDetailVm = () => {
  const { isMobile } = useSidebar();
  const pathname = usePathname();

  return { isMobile, pathname };
};

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface IInvoiceHeaderDetail extends ReturnType<typeof useInvoiceHeaderDetailVm> {}
