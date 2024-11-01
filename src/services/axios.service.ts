/* eslint-disable @typescript-eslint/no-explicit-any */
import { eHttpMethod } from '@/common/enums';
import { IHttpConfig } from '@/common/interfaces';
import { httpConnector } from '@/common/lib';
import { AxiosResponse } from 'axios';

/**
 *
 * @param methode
 * @param url
 * @param config
 * @returns
 */
export const httpClient = async <TData = any>(methode: eHttpMethod, url: string, config?: IHttpConfig<TData>): Promise<any> => {
  let response: AxiosResponse<TData, any> | undefined = undefined;
  if (methode === eHttpMethod.POST || methode === eHttpMethod.PUT || methode === eHttpMethod.PATCH) {
    response = await httpConnector[methode](url, config?.data, config?.axiosConfig);
  } else if (methode === eHttpMethod.GET || methode === eHttpMethod.DELETE) {
    response = await httpConnector[methode](url, config?.axiosConfig);
  }
  //   if (config?.message) {
  //     if (checkSuccess(response)) {
  //       toast(config?.message, {
  //         ...toastOptions,
  //         type: 'success',
  //       });
  //     }
  //   }
  return response?.data;
};
