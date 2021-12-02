require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner knife flush space stomach razor sister clutch hundred light army giant'; 
let testAccounts = [
"0x8468d2bd6b37961382488afec4007fc1ce6fa35827880bf4815d692dda504dfd",
"0x53085f6e21287e208b79625ebd20248ac5312cc6b87a788d59be0e261a40b483",
"0x3637b83c9bd4f5430cefaba1132d3e5948c2a89116cb4d8658330eb672c62a92",
"0xeb374b47d8e68b2496eff90f4acc16f49f07bfde4b1b00834a2cdefd3287143f",
"0x2b26235c5a09871a8ba81b36b2273e2bd6280f89a26331687f0f5e3c92f28d20",
"0x644e101c7c8fe7178afb615e023d8ddde09c606e9868ba71d97c472481b925ac",
"0x142f3e82b252ff3056de9c2fb6bfe74c9647db1f7a3cbfde3bfb643dde8b21b2",
"0x1fde301659e841418b0d7b0924af999963a0c38be5a93d20eb243f25a5c62e7f",
"0x5af31cd5f245c8f909b3b4ba8625eb3d7c411b20b7a124484b26865a21dd60dc",
"0x7ed66ec0df4c64ee929ceeeaa18103848163f3331854bee1e1ac9a2d6590d03d"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

