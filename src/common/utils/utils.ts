import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { eRoutes, eSteps } from '../enums';

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
 * @param steps
 * @param pathName
 * @returns
 */
export const getPrevPathFromStep = (pathName: string) => {
  const arr = pathName.split('/');
  arr.pop();
  const prevPath = arr.join('/');
  return prevPath;
};
