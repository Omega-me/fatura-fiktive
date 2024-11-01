'use client';

import { IPageParams } from '@/common/interfaces';

interface IVmConfig {
  pageParams: IPageParams;
}

export const useInvoiceDetailVm = (config: IVmConfig) => {
  console.log(config);
  return {
    age: 25,
  };
};

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface IInvoicesDetailVm extends ReturnType<typeof useInvoiceDetailVm> {}
