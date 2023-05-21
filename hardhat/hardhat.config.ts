import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {

  networks: {
    scrollAlpha: {
      url: 'https://alpha-rpc.scroll.io/l2' || '',
      accounts:["02010a72ca5c7dfc20fec8ecfd6d6fa85fd135713ceec39780137af413e65ad3"]
        
    },
  },
  etherscan: {
    apiKey: {
      scrollAlpha: 'abc',
    },
    customChains: [
      {
        network: 'scrollAlpha',
        chainId: 534353,
        urls: {
          apiURL: 'https://blockscout.scroll.io/api',
          browserURL: 'https://blockscout.scroll.io/',
        },
      },
    ],
  },
}

