import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { eMode, eRoutes, eSteps } from '../enums';

/**
 *
 * @param inputs
 * @returns
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 *
 * @param pathName
 * @returns
 */
export const getInvoicStepPaths = (pathName: string) => {
  const paths = pathName.split('/').filter((p) => p !== '' && p !== eRoutes.INVOICE);
  return paths;
};

/**
 *
 * @param pathName
 * @returns
 */
export const getActiveStepFromPath = (pathName: string) => {
  const paths = getInvoicStepPaths(pathName);
  switch (paths.length) {
    default:
    case 1:
      return eSteps.CREATE_INVOCE;
    case 2:
      return eSteps.ADD_LINES;
    case 3:
      return eSteps.CALCULATE_PRICES;
    case 4:
      return eSteps.SUMMARY;
  }
};

/**
 *
 * @param pathName
 * @returns
 */
export const getCompletedStepByPath = (pathName: string) => {
  const paths = getInvoicStepPaths(pathName);
  const invoiceCompleted = paths[0] && paths[1] === 'lines' ? true : false;
  const linesCompleted = invoiceCompleted && paths[2] === 'price' ? true : false;
  const pricesCompleted = linesCompleted && paths[3] === 'summary' ? true : false;
  return {
    invoiceCompleted,
    linesCompleted,
    pricesCompleted,
  };
};

/**
 *
 * @param id
 * @returns
 */
export const getModeById = (id: string) => {
  return id && id === 'new' ? eMode.NEW : eMode.EDIT;
};
