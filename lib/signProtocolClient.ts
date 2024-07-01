import {
  SignProtocolClient,
  EvmChains,
  SpMode,
  OnChainClientOptions,
  Schema,
} from "@ethsign/sp-sdk";
import { baseSepolia } from "viem/chains";

const spMode = SpMode.OnChain;
const options: OnChainClientOptions = {
  chain: EvmChains.baseSepolia,
};

const signProtocolClient = new SignProtocolClient(spMode, options);

export default signProtocolClient;
