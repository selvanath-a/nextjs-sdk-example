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
      apiKey: "YOUR-API-KEY",
      apiSecret: "YOUR-API-SECRET",
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
