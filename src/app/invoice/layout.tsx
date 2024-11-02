'use client';
import { eRoutes, eSteps } from '@/common/enums';
import { getActiveStepFromPath, getInvoicStepPaths, getPrevPathFromStep } from '@/common/utils';
import { Footer, Steper } from '@/components';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useParams, usePathname } from 'next/navigation';
import React, { FC, PropsWithChildren } from 'react';
import { useRouter } from 'next/navigation';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface Props extends PropsWithChildren {}

const InvoiceLayout: FC<Props> = (props) => {
  const paramOnNew = 'new';
  const params = useParams<{ id: string }>();
  const router = useRouter();
  const pathName = usePathname();
  const paths = getInvoicStepPaths(pathName);

  const getCompletedStepByPath = () => {
    const invoiceCompleted = paths[0] && paths[1] === 'lines' ? true : false;
    const linesCompleted = invoiceCompleted && paths[2] === 'price' ? true : false;
    const pricesCompleted = linesCompleted && paths[3] === 'summary' ? true : false;
    return {
      invoiceCompleted,
      linesCompleted,
      pricesCompleted,
    };
  };

  const getButtonNameFromPath = () => {
    const paths: {
      prev: string | null;
      next: string | null;
    } = {
      prev: null,
      next: null,
    };
    const activeStep = getActiveStepFromPath(pathName);
    switch (activeStep) {
      default:
      case eSteps.CREATE_INVOCE:
        paths.next = pathName + '/' + eRoutes.INVOICE_LINES;
        paths.prev = null;
        break;
      case eSteps.ADD_LINES:
        paths.next = pathName + '/' + eRoutes.INVOICE_PRICE;
        paths.prev = getPrevPathFromStep(pathName);
        break;
      case eSteps.CALCULATE_PRICES:
        paths.next = pathName + '/' + eRoutes.INVOICE_SUMMARY;
        paths.prev = getPrevPathFromStep(pathName);
        break;
      case eSteps.SUMMARY:
        paths.next = null;
        paths.prev = getPrevPathFromStep(pathName);
        break;
    }

    return paths;
  };

  const path = getButtonNameFromPath();

  const onGoToPreviuosStep = () => {
    if (path.prev) router.push(path.prev);
  };

  const onGoToNextStep = () => {
    if (path.next) router.push(path.next);
  };

  return (
    <>
      <div className="p-5">
        <div className="w-full flex items-center justify-center mb-5">
          <Steper id={params.id} step={getActiveStepFromPath(pathName)} stepsCompleted={getCompletedStepByPath()} />
        </div>
        {props.children}
        <div className="w-full flex justify-center items-center">
          <div className="flex justify-between items-center mt-5 w-full">
            <Button disabled={path.prev === null || params.id === paramOnNew} onClick={onGoToPreviuosStep} variant="outline">
              <ChevronLeft className="h-4 w-4" />
              Pas
            </Button>
            <Button disabled={path.next === null || params.id === paramOnNew} onClick={onGoToNextStep} variant="outline">
              Para
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default InvoiceLayout;
