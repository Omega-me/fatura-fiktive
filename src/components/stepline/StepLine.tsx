import { eSteps } from '@/common/enums';
import { cn } from '@/common/utils';
import { FileCheck, FilePenLine } from 'lucide-react';
import Link from 'next/link';
import React, { FC } from 'react';

interface Props {
  activeStep: boolean;
  completed: boolean;
  step: eSteps;
  lastStep?: boolean;
  firstStep?: boolean;
  name: string;
  path: string;
  disable: boolean;
}

const StepLine: FC<Props> = ({ activeStep, completed, step, lastStep, firstStep, name, path, disable }) => {
  const linkClassName = cn('flex items-center', {
    'pointer-events-none': disable,
    'text-green-600 dark:text-green-500': activeStep,
    'text-blue-600 dark:text-blue-500': completed,
  });

  return (
    <li
      className={`flex items-center ${
        !lastStep
          ? 'w-auto min-[400px]:w-full after:content-[""] after:w-full after:h-1 after:border-b after:border-gray-300 after:hidden min-[400px]:after:inline-block after:mx-6 lg:after:mx-10 dark:after:border-gray-700'
          : 'w-auto'
      }`}
    >
      <Link className={linkClassName} href={path} aria-disabled={disable}>
        <span
          className={cn("flex items-center after:content-['/'] min-[400px]:after:hidden after:mx-2", {
            'text-green-600 dark:text-green-500': activeStep,
            hidden: firstStep,
          })}
        ></span>
        {completed ? (
          <FileCheck className="mr-1 mb-[0.5px]" size={18} />
        ) : activeStep ? (
          <FilePenLine className="mr-1 mb-[0.5px]" size={18} />
        ) : (
          <span className="me-2">{step}</span>
        )}
        <span className="whitespace-nowrap">{name}</span>
      </Link>
    </li>
  );
};

export default StepLine;
