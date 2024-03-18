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
      apiKey: 'VRrQKLm4K0GuTnOqj2a6YtzCTWb2hRrp',
      apiSecret: 'PLom9SJeGchA4p5U6NjMApoZL17N-QffJV08NIaTHrDU10X0ai11qtqq3Oci8ZsW',
      defaultBlockchainIds: ['ethereumSepolia', 'polygonMumbai'],
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
