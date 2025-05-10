const HDWalletProvider = require('@truffle/hdwallet-provider');

const mnemonic = 'leopard wage idle gasp corn now make program jelly banner public tiny';  // Replace with your mnemonic
const infuraUrl = 'https://mainnet.optimism.io';  // Replace with your RPC URL

module.exports = {
  networks: {
    optimismMainnet: {
      provider: () => new HDWalletProvider(mnemonic, infuraUrl),
      network_id: 10, // Optimism Mainnet's network ID
      gas: 5500000,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },
  },
  compilers: {
    solc: {
      version: "0.8.0",    // Match with your contract's pragma
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        }
      }
    }
  }
};