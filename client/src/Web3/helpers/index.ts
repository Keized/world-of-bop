import Web3 from "web3";
import {SupportedNetworks, Web3State} from "../types";

export function getChainName(id: number): SupportedNetworks|'unsupported' {
    switch (id) {
        case 1:
            return 'mainnet';
        case 3:
            return 'ropsten';
        case 42:
            return 'kovan';
        default:
            return 'unsupported';
    }
}

export async function getWeb3Accounts(web3: Web3) {
    return await web3.eth.getAccounts();
}

export async function getWalletAddress(web3: Web3): Promise<string | undefined> {
    const accounts = await getWeb3Accounts(web3);
    return accounts.length ? accounts[0]: undefined;
}

export async function getWeb3State(provider: any): Promise<Web3State> {
    const web3 = new Web3(provider);
    if (typeof provider.enable === 'function') {
        provider.enable();
    }

    const wallet = await getWalletAddress(web3);
    const chain = getChainName(await web3.eth.net.getId());

    return <Web3State>{
        web3,
        wallet,
        chain
    }
}
