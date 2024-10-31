'use client';
import { ClerkProvider } from '@clerk/nextjs';
import { dark } from '@clerk/themes';
import { useTheme } from 'next-themes';
import React, { PropsWithChildren } from 'react';
import { ShadCnProvider } from '..';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface Props extends PropsWithChildren {}

const ClerkCustomProvider: React.FC<Props> = ({ children }) => {
  const { theme } = useTheme();

  return (
    <ClerkProvider
      appearance={{
        baseTheme: theme === 'dark' || theme === 'system' ? dark : undefined,
      }}
    >
      <ShadCnProvider>{children}</ShadCnProvider>
    </ClerkProvider>
  );
};

export default ClerkCustomProvider;
