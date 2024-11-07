'use client';
import React from 'react';
import useInvoiceLinesDetailVm from '../useInvoiceLinesDetailVm';
import { AppTable, InvoicePreview, StepFooterButtons } from '@/components';
import { eInvoiceStepNames } from '@/common/enums';
import Image from 'next/image';
import itemImg from '../../../../../../public/item-fake.webp';
import { lineColumns } from '@/common/configs';
import { lineTable } from '@/common/data';
import { Card } from '@/components/ui/card';

const InvoiceLinesDetail = () => {
  const vm = useInvoiceLinesDetailVm();

  return (
    <>
      <AppTable
        columns={lineColumns}
        data={lineTable}
        addRow={{
          show: true,
          rightPanel: (
            <div className="w-full flex justify-center">
              <Card className="p-2 my-4 -2 w-full">
                <div className="flex items-center gap-2">
                  <div>
                    <Image width={130} src={itemImg} alt={'fake item'} />
                  </div>
                  <div>
                    <div>
                      <p>Porta Ballkoni</p>
                    </div>
                    <div>
                      <div>
                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 font-semibold">
                          <small>Profili:</small>
                          <small>ALUMIL S 67 HI</small>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 font-semibold">
                          <small>Ngjyra:</small>
                          <small>RAL</small>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 font-semibold">
                          <small>Koeficienti i izolimit profilit:</small>
                          <small>Uf = 1.1 W/m2K </small>
                        </div>
                      </div>
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                </div>
                <div></div>
              </Card>
            </div>
          ),
        }}
      />
      <StepFooterButtons
        nextBtnName={eInvoiceStepNames.CMIMI}
        prevBtnName={eInvoiceStepNames.FATURA}
        onClickNextBtn={vm.onClickNextBtn}
        onClickPrevBtn={vm.onClickPrevBtn}
      />
      <InvoicePreview />
    </>
  );
};

export default InvoiceLinesDetail;
