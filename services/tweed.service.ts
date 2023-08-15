import { Environment, TweedBackendSDK } from '@paytweed/backend-sdk'
import nftService from './nft.service'

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
      },
      environment: Environment.staging
    });
    return this._client;
  }
}

export default new TweedService();
