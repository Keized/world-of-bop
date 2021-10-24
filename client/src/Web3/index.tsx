import React, {ReactNode, useContext, useEffect, useState} from 'react';
import {getWeb3State} from "./helpers";
import {getSupportedNetworks} from '../config';
import {getWeb3ProviderFromBrowser} from './providers/browser-wallet';
import Preloader from './components/Preloader';
import WrongNetwork from './components/WrongNetwork';
import {Web3ProviderProps, Web3State} from "./types";
import { Web3Context } from './context/Web3Context';

const getProviders = (name: string) => {
  switch(name) {
    case 'browser':
      return getWeb3ProviderFromBrowser();
  }
}

export function Web3Provider({ children }: Web3ProviderProps) {
  const [web3Loading, setWeb3Loading] = useState(false);
  const [web3State, setWeb3State] = useState<Web3State>({web3: undefined, wallet: undefined, chain: undefined});
  const supportedNetworks = getSupportedNetworks();
  const network = 'localhost';


  const initWeb3Context = async (providerName: string, networkName: string = network): Promise<void> => {
    setWeb3Loading(true);
    const provider = getProviders(providerName);
    if (!provider) {
      throw new Error(`No Provider found for the name ${providerName} and network ${networkName}`);
    }
    const state = await getWeb3State(provider);
    setWeb3State(state);
    if (state.wallet && state.web3) {
      localStorage.setItem('currentProvider', providerName);
    }
    setWeb3Loading(false);
  }

  const dropWeb3Context = (): void => {
    setWeb3State({web3: undefined, wallet: undefined, chain: undefined});
    const currentProvider = localStorage.getItem('currentProvider');
    if (currentProvider) {
      localStorage.removeItem('currentProvider');
      //logout from provider
    }
  }

  useEffect(() => {
    const currentProviderName = localStorage.getItem('currentProvider');
    console.log(currentProviderName);
    if (!web3State.web3 && currentProviderName) {
      initWeb3Context(currentProviderName, network);
      //Todo listen wallet change
    }
  }, []);


  if (web3Loading) {
    return <Preloader />;
  }

  if (!web3State.web3 || !web3State.wallet) {
    return <button onClick={() => initWeb3Context}>click</button>
  }

  console.log(web3State, network)

  if (!web3State.chain || web3State.chain === 'unsupported' || network !== web3State.chain) {
    return <WrongNetwork supportedNetworks={supportedNetworks} />
  }

  return (
      <Web3Context.Provider value={{ web3: web3State.web3, wallet: web3State.wallet, chain: web3State.chain }}>
        {children}
      </Web3Context.Provider>
  );
}
