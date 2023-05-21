// Import
const { ApiPromise, WsProvider, Keyring } = require("@polkadot/api");
const {
  deployContract,
  getSubstrateChain,
} = require("@scio-labs/use-inkathon");
const { cryptoWaitReady } = require("@polkadot/util-crypto");
const { ContractPromise } = require("@polkadot/api-contract");
const abi = require("./erc721.json");
const keyring = require("@polkadot/ui-keyring");

function tx() {cryptoWaitReady().then(async () => {
    // Load all available addresses and accounts
    keyring.loadAll({ ss58Format: 42, type: "sr25519" });

    const chain = getSubstrateChain("alephzero-testnet");
    if (!chain) throw new Error(`Chain not found`);

    const provider = new WsProvider("wss://ws.test.azero.dev");
    const api = await ApiPromise.create({ provider });
    const contract = new ContractPromise(
      api,
      abi,
      "5FeKCEotUvAEoK6xZowDFhHVFtq6ECURtCnuUaZAGcnm136r"
    );

    const mnemonic =
      "puzzle fabric awesome skull scene relief liquid silent buddy play stamp powder";

    // Add the account, encrypt the stored JSON with an account-specific password
    const { pair, json } = keyring.addUri(mnemonic, "myStr0ngP@ssworD", {
      name: "mnemonic acc",
    });
const gasLimit = 3000n * 1000000n;
const storageDepositLimit = null;
   await contract.tx
     .setTokenCredit({ storageDepositLimit, gasLimit }, 1, 1)
     .signAndSend(pair, (result) => {
       if (result.status.isInBlock) {
         console.log("in a block");
       } else if (result.status.isFinalized) {
         console.log("finalized");
         process.exit(0)
       }
     });
    // call the mint function of the 
  });

}
module.exports = {
  tx,
};