export default function initBitcoin() {
  const bitcoin = document.querySelector(".contato-bit");
  bitcoin.innerText = 689;

  async function bitcoinFetch() {
    try {
      const bitcoinResponse = await fetch(
        "https://www.blockchain.com/pt/ticker"
      );
      const bitcoinJson = await bitcoinResponse.json();
      bitcoin.innerText = (100 / bitcoinJson.BRL.sell).toFixed(4);
    } catch (erro) {
      console.log(erro);
    }
  }
  bitcoinFetch();
}
