import { getWeb3ProviderFromBrowser } from './browser-wallet';

export type AvailableWeb3Provider = 'browser' | 'formatic' | 'wallet-link';

export const getProviderByName = (name: AvailableWeb3Provider, network: string) => {
  switch (name) {
    case 'browser':
      return getWeb3ProviderFromBrowser();
  }
};

export const logoutFromProvider = (name: AvailableWeb3Provider) => {
  switch (name) {
    case 'browser':
      return;
  }
};
