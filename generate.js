const Web3 = require('web3');
require('dotenv').config();
const web3 = new Web3('https://mainnet.infura.io/v3/4503b6d382c54cb6b61a80331dec75ad');


async function createWallet() {
let createWallet = await web3.eth.accounts.wallet.create(2);

let walletObj = {}
walletObj['publicKey'] = createWallet[0].address;
walletObj['privateKey'] = createWallet[0].privateKey;

console.log(walletObj)

}


createWallet();

console.log('-----------------    NEVER SHARE PRIVATE KEY WITH ANYONE   -------------------')
console.log('-----------------    KEEP YOUR PRIVATE KEY IN SAFE PLACE   -------------------')

