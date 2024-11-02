'use client';
import { useSidebar } from '@/components/ui/sidebar';
import { usePathname } from 'next/navigation';

const useInvoicePriceDetailVm = () => {
  const { isMobile } = useSidebar();
  const pathname = usePathname();
  return { isMobile, pathname };
};

export default useInvoicePriceDetailVm;

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface IInvoicePriceDetailVm extends ReturnType<typeof useInvoicePriceDetailVm> {}
