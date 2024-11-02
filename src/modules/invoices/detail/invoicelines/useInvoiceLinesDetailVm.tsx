import { IClientPageParams } from '@/common/interfaces';
import { useSidebar } from '@/components/ui/sidebar';
import { usePathname } from 'next/navigation';

interface IVmConfig {
  pageParams: IClientPageParams<{ id: string }>;
}

const useInvoiceLinesDetailVm = (config: IVmConfig) => {
  console.log(config);
  const { isMobile } = useSidebar();
  const pathname = usePathname();

  return { isMobile, pathname };
};

export default useInvoiceLinesDetailVm;

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface IInvoiceLinesDetailVm extends ReturnType<typeof useInvoiceLinesDetailVm> {}
