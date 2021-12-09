require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid area fringe speak guard render remain equip hockey enroll bottom trumpet'; 
let testAccounts = [
"0x9f3421aedfbf699596fd4f734083414f04d0d36a2082356a6c7e2ee30723d714",
"0x2a69eb992884ac07626a7b3e304e50ca9cce5dcbab2ff035d58afa123aec8e7e",
"0x9acd7ec00aa4792fa9284621694ea0ec3a5ba5237f0b7745b6470f00b90bef59",
"0x29b52b2a7cd32bedcb8c7737fa9758556ea4b5425cab3b8b1fe5e368c9d7f232",
"0x354e7288e9eb3e66f7b20f593d63bb223691d33ba42fc48f2d012143f7636686",
"0x2b474476b05dc0e4c24e31f397d0b2b8fc6758decc5b007f344d463cad063f11",
"0x827302771336fbc6fd3f099187528bf68947c3cc11bbee59507c43f0a984b0eb",
"0xb89904a66df04810cba63261664c558a937b9bb8b75bd51e7ec2eca7c4c64553",
"0x4d091d6d6d1cbac3f44155b4125e0fccca7e5e74efcc1de57bfd6ed0510518e9",
"0x0f56d6542c18ee0912998546dfbbe40318e0d14d3f30264b06336b2a8e5f904d"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


