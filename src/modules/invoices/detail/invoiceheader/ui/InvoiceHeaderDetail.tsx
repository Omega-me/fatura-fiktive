'use client';

import React from 'react';
import { useInvoiceHeaderDetailVm } from '../useInvoiceHeaderDetailVm';
import { InvoicePreview, StepFooterButtons } from '@/components';
import { eInvoiceStepNames } from '@/common/enums';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import logo from '../../../../../../public/fake-logo.png';

const InvoiceHeaderDetail = () => {
  const vm = useInvoiceHeaderDetailVm();

  return (
    <>
      <div className="w-full flex justify-center">
        <Card className="p-4 w-full lg:w-[80%] xl:w-[70%]">
          <form>
            <div className="flex justify-between items-center">
              <div className="">
                <Image src={logo} width={90} height={90} alt={'logo'} />
              </div>
              <div className="flex w-72 flex-col items-end gap-2">
                <div className="flex items-center gap-2">
                  <Label className="w-16">Order</Label>
                  <Input className="w-36" />
                </div>
                <div className="flex items-center gap-2">
                  <Label className="w-16">Date</Label>
                  <Input type="date" className="w-36" />
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:justify-between">
              <Card className="p-4 mt-2 ">
                <p>From:</p>
                <div className="flex items-center gap-2 my-2">
                  <Label className="w-20">Name</Label>
                  <Input />
                </div>
                <div className="flex items-center gap-2 my-2">
                  <Label className="w-20">Email</Label>
                  <Input />
                </div>
                <div className="flex items-center gap-2 my-2">
                  <Label className="w-20">Phone 1</Label>
                  <Input />
                </div>
                <div className="flex items-center gap-2 my-2">
                  <Label className="w-20">Phone 2</Label>
                  <Input />
                </div>
                <div className="flex items-center gap-2 my-2">
                  <Label className="w-20">Address</Label>
                  <Input />
                </div>
              </Card>
              <Card className="p-4 mt-2 ">
                <p>To:</p>
                <div className="flex items-center gap-2 my-2">
                  <Label className="w-20">Name</Label>
                  <Input />
                </div>
                <div className="flex items-center gap-2 my-2">
                  <Label className="w-20">Email</Label>
                  <Input />
                </div>
                <div className="flex items-center gap-2 my-2">
                  <Label className="w-20">Phone</Label>
                  <Input />
                </div>
                <div className="flex items-center gap-2 my-2">
                  <Label className="w-20">Address</Label>
                  <Input />
                </div>
              </Card>
            </div>
            <p>
              <strong></strong>
            </p>
          </form>
        </Card>
      </div>

      <StepFooterButtons
        prevDisabled={true}
        nextDisabled={vm.isNextBtnDisabled()}
        nextBtnName={eInvoiceStepNames.RRESHTAT}
        onClickNextBtn={vm.onClickNextBtn}
      />
      <InvoicePreview />
    </>
  );
};

export default InvoiceHeaderDetail;
