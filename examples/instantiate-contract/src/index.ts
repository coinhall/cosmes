import { MnemonicWallet } from "cosmes/wallet";
import { MsgInstantiateContract } from "cosmes/client";

async function main() {

  const wallet = new MnemonicWallet({
    mnemonic: "address finger arm glide plastic current garment universe people secret mask snack duck what spend congress curious hip wall ensure feel more traffic size",
    bech32Prefix: "terra",
    chainId: "columbus-5",
    rpc: "https://terra-classic-rpc.publicnode.com:443",
    gasPrice: {
      amount: "50",
      denom: "uluna",
    },
    coinType: 330
  })

  const msg = new MsgInstantiateContract({
    sender: wallet.address,
    admin: wallet.address,
    codeId: '6036',
    msg: {
      "name": "Test Token",
      "symbol": "TEST",
      "decimals": 6,
      "initial_balances": [
        {
          "address": wallet.address,
          "amount": "777777777777777"
        }
      ]
    },
    funds: undefined,
    label: 'My Label'
  })

  const tx = {
    msgs: [msg],
    memo: 'Instantiate Contract via Cosmes'
  }

  const fee = await wallet.estimateFee(tx);
  console.log("Tx fee:", fee);

  const txHash = await wallet.broadcastTx(tx, fee);
  console.log("Tx hash:", txHash);

  const { txResponse } = await wallet.pollTx(txHash);
  console.log("Tx response:", txResponse);
}

main();
