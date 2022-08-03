import { ApiProvider as CoreApiProvider, useApiProvider as useCoreApiProvider } from '@common';
import { FC, ReactNode } from 'react';
import { getConfig } from './api/config';
import { shopifyHooks } from './hooks';

const config = getConfig();

interface ShopifyApiProviderProps {
    children: ReactNode | ReactNode[];
}
export const ApiProvider: FC<ShopifyApiProviderProps> = ({ children }) => {
    return (
        <CoreApiProvider config={{ ...config }} hooks={shopifyHooks}>
            {children}
        </CoreApiProvider>
    );
};

export const useApiProvider = () => {
    return useCoreApiProvider();
}