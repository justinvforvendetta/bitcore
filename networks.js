var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {return new Buffer(hex, 'hex');};

exports.livenet = {
  name: 'livenet',
  magic: hex('d9e6e7e5'),
  addressVersion: 48,
  privKeyVersion: 176,
  P2SHVersion: 27,
  hkeyPublicVersion: 0x0488b21e,
  hkeyPrivateVersion: 0x0488ade4,
  genesisBlock: {
    hash: hex('db3a2ea0204ea718504a79bd81df53364214115d147b11f7d84931448709000064'),
    merkle_root: hex('e8c7f4a851f77e9c5671e3edcd3221a64c42b95d72c3ae46523e956c9e6f698a'),
    height: 0,
    nonce: 74374,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1402845782,
    bits: 504365055,
  },
  dnsSeeds: [
    'dnsseed.leocoin.org'
  ],
  defaultClientPort: 5807
};

exports.testnet = {
  name: 'testnet',
  magic: hex('0711050b'),
  addressVersion: 0x7f,
  privKeyVersion: 255,
  P2SHVersion: 196,
  hkeyPublicVersion: 0x043587cf,
  hkeyPrivateVersion: 0x04358394,
  genesisBlock: {
    hash: hex('726fad846b2d5101883f0d5fea8f732d8a49ec0828c8ed475238c1870a910000'),
    merkle_root: hex('26a3ff5d3dc46b091e7b58b6022982e6d27dff1bab3bd1da6beb4790983c87c4'),
    height: 0,
    nonce: 55887,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1405769613,
    bits: 0x1f00ffff,
  },
  dnsSeeds: [
    'testnet-seed.sdcoin.co'
  ],
  defaultClientPort: 51997
};
