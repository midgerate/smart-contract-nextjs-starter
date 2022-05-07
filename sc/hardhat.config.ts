import '@typechain/hardhat'
import '@nomiclabs/hardhat-waffle'
import '@nomiclabs/hardhat-etherscan'
import { HardhatUserConfig } from 'hardhat/types'
import 'dotenv/config'
// Currently we do not have waffle. We might need it later for better testing support

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more
const mnemonic = process.env.WALLET_MNEMONIC
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY
const RINKEBY_PROJECT_URI = process.env.RINKEBY_PROJECT_URI
const config: HardhatUserConfig = {
  // @ts-ignore - because its an external property
  typechain: {
    outDir: '../client/types/typechain',
  },
  paths: {
    sources: './contracts',
    tests: './test',
    cache: './cache',
    artifacts: './artifacts',
  },
  networks: {
    hardhat: {},
    rinkeby: {
      accounts: {
        mnemonic,
      },
      url: RINKEBY_PROJECT_URI,
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
  solidity: {
    version: '0.8.4',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
}
export default config
