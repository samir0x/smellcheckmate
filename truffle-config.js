module.exports = {
  networks: {
    // ... other networks ...
    optimismMainnet: {
      provider: () => new HDWalletProvider(MNEMONIC, 'RPC_URL_FOR_OPTIMISM_MAINNET'),
      network_id: 10, // This is the network ID for Optimism Mainnet
      // gas settings can be adjusted based on your needs
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