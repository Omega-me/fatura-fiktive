/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React, { PropsWithChildren, useState } from 'react';
import { QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface Props extends PropsWithChildren {}

const TanStackQueryProvider: React.FC<Props> = (props) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        queryCache: new QueryCache({
          onSuccess: () => {},
          onError: () => {},
          onSettled: () => {},
        }),
      })
  );
  return (
    <QueryClientProvider client={queryClient}>
      {props.children}
      <ReactQueryDevtools buttonPosition="bottom-left" initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default TanStackQueryProvider;
