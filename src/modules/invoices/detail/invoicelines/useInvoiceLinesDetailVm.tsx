import { useSidebar } from '@/components/ui/sidebar';
import { usePathname } from 'next/navigation';

const useInvoiceLinesDetailVm = () => {
  const { isMobile } = useSidebar();
  const pathname = usePathname();

  return { isMobile, pathname };
};

export default useInvoiceLinesDetailVm;

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface IInvoiceLinesDetailVm extends ReturnType<typeof useInvoiceLinesDetailVm> {}
