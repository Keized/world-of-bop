import {ReactNode} from "react";
import Web3 from "web3";

export interface Web3ProviderProps {
    children: ReactNode;
}

export interface Web3State {
    web3?: Web3,
    wallet?: string|undefined,
    chain?: SupportedNetworks|'unsupported'
}

export type SupportedNetworks = 'kovan' | 'ropsten' | 'mainnet' | 'localhost';
