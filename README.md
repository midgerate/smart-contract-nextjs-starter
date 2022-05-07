# Next.js with Smart Contract development.

Includes a working demo of client and smart contract integrated together. Clean with no additional dependencies other than developer tools.

## Client

- Next.js
- Web3 - Quiver (https://www.npmjs.com/package/@raidguild/quiver)
- DX - Typescript, eslint, prettier

## Smart Contract

- Hardhat
- DX - Typechain, Typescript, eslint, prettier
- Testing - Waffle, Chai, Mocha
- Scripts - deploy, verification
- Compilation - Generates the types directly in the client directory.

## How to use

1. Clone the repo
2. In both sc and client folders install deps (yarn install)
3. In the sc directory -
   - Create a new file .env and copy the contents of .env.example
   - Run a hardhat node `yarn hardhat`
   - Deploy to hardhat network `yarn deploy`
   - Copy the address from console.
4. In the client folder
   - Start application `yarn dev`
   - In the Home page /components/pages/Home enter the deployed contract address
5. Now you should be able to connect and see the message in the UI.
