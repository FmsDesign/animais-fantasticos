export default class Bitcoin {
  constructor(bitcoin) {
    this.bitcoin = document.querySelector(bitcoin);
  }
  async bitcoinFetch() {
    try {
      const bitcoinResponse = await fetch(
        "https://www.blockchain.com/pt/ticker"
      );
      const bitcoinJson = await bitcoinResponse.json();
      this.bitcoin.innerText = (100 / bitcoinJson.BRL.sell).toFixed(4);
    } catch (erro) {
      console.log(erro);
    }
  }

  init() {
    if (this.bitcoin) {
      this.bitcoinFetch();
    }
    return this;
  }
}
