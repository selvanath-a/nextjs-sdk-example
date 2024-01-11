import { TweedBackendSDK } from "@paytweed/backend-sdk";
import nftService from "./nft.service";
import tokenService from "./token.service";

type AsyncReturnType<T> = T extends (...args: any[]) => Promise<infer R>
  ? R
  : never;

class TweedService {
  private _client: AsyncReturnType<typeof TweedBackendSDK.setup> | undefined =
    undefined;
  async initialize() {
    this._client = await TweedBackendSDK.setup({
      apiKey: "15cVDEv7E9saty6TRjmVoel78ibLXmdc",
      apiSecret: "7NqjB6yVfULNDx-3Y06H5T51WQN7DSPvAA7c5pOIiU-oN9kxR1a5xpaOaM4PmYn1",
      defaultBlockchainIds: ["ethereumSepolia"],
      callbacks: {
        getNftPurchaseData: async ({ nftId }) => nftService.getById(nftId),
        getTokenPurchaseData: async ({ tokenId }) =>
          tokenService.getById(tokenId),
      },
    });
    return this._client;
  }
}

export default new TweedService();
