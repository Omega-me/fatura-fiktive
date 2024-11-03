'use client';
import { getActiveStepFromPath, getCompletedStepByPath } from '@/common/utils';
import { Footer, Steper } from '@/components';
import { useParams, usePathname } from 'next/navigation';
import React, { FC, PropsWithChildren } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface Props extends PropsWithChildren {}

const InvoiceLayout: FC<Props> = (props) => {
  const params = useParams<{ id: string }>();
  const pathName = usePathname();

  return (
    <>
      <div className="p-5">
        <div className="w-full flex items-center justify-center mb-5">
          <Steper id={params.id} step={getActiveStepFromPath(pathName)} stepsCompleted={getCompletedStepByPath(pathName)} />
        </div>
        {props.children}
      </div>
      <Footer />
    </>
  );
};

export default InvoiceLayout;
