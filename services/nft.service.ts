class NftService {
  _getRandomArbitrary(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  _getNftPrice() {
    return Math.trunc(this._getRandomArbitrary(100, 9999));
  }

  getById(id: string) {
    return {
      nftId: id,
      priceInCents: this._getNftPrice(),
      fiatCurrencyId: "USD",
      tokenUri: "NFT_TOKEN_URI",
      contractAddress: "0x2Eb78f2521166C4bf4F998f51E614A5658d238C4",
      chain: "ethereumSepolia",
      title: "NFT_TITLE",
      description: "NFT_DESCRIPTION",
      abi: "safeMint(toAddress address, tokenUri string)",
    };
  }
}

export default new NftService();
