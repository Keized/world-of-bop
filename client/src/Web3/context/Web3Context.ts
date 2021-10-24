import React from "react";
import {Web3State} from "../types";

export const Web3Context = React.createContext<Web3State>({ web3: undefined, chain: undefined, wallet: undefined });
