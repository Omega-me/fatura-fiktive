import { eInvoiceStepNames, eSteps } from '@/common/enums';
import React from 'react';
import { StepLine } from '..';

interface Props {
  step: eSteps;
  id?: string;
  stepsCompleted: {
    invoiceCompleted: boolean;
    linesCompleted: boolean;
    pricesCompleted: boolean;
  };
}

const Steper: React.FC<Props> = (props) => {
  return (
    <ol className="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
      <StepLine
        step={eSteps.CREATE_INVOCE}
        name={eInvoiceStepNames.FATURA}
        activeStep={props.step === eSteps.CREATE_INVOCE}
        completed={props.stepsCompleted.invoiceCompleted}
        firstStep={true}
      />
      <StepLine
        step={eSteps.ADD_LINES}
        name={eInvoiceStepNames.RRESHTAT}
        activeStep={props.step === eSteps.ADD_LINES}
        completed={props.stepsCompleted.linesCompleted}
      />
      <StepLine
        step={eSteps.CALCULATE_PRICES}
        name={eInvoiceStepNames.CMIMI}
        activeStep={props.step === eSteps.CALCULATE_PRICES}
        lastStep={true}
        completed={props.stepsCompleted.pricesCompleted}
      />
    </ol>
  );
};

export default Steper;
