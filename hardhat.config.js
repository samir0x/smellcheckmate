require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: {
    version: "0.8.29",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    optimism_mainnet: {
      url: "https://mainnet.optimism.io",
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    },
    base: {
      url: "<your_base_rpc_url>", // Replace with Base Mainnet RPC (e.g., https://mainnet.base.org)
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    },
  },
  etherscan: {
    apiKey: {
      optimism_mainnet: process.env.ETHERSCAN_API_KEY,
    },
    customChains: [
      {
        network: "optimism_mainnet",
        chainId: 10,
        urls: {
          apiURL: "https://api-optimistic.etherscan.io/api",
          browserURL: "https://optimistic.etherscan.io/",
        },
      },
    ],
  },
  sourcify: {
    enabled: false,
  },
};