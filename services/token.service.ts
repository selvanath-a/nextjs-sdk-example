class TokenService {
  _getRandomArbitrary(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  _getTokenPrice() {
    return Math.trunc(this._getRandomArbitrary(100, 9999));
  }

  getById(id: string) {
    return {
      tokenId: id,
      priceInCents: this._getTokenPrice(),
      thumbnailPath:
        "https://png.pngtree.com/png-clipart/20230329/ourmid/pngtree-money-bag-cartoon-coins-png-image_6671982.png",
      fiatCurrencyId: "USD",
      contractAddress: "0x67a437d6ded3dc31C5AF7742eb4631907Fff79b9",
      chain: "bnbTestnet",
      title: "TOKEN_TITLE",
      description: "TOKEN_DESCRIPTION",
      abi: "mint(toAddress address, amount uint256)",
      customMintParams: {
        amount: "0",
      },
    };
  }
}

export default new TokenService();
