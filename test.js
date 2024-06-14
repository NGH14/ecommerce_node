const crypto = require('crypto');

const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
  modulusLength: 2048,
});

console.log({ public: publicKey.toString(), private: privateKey.toString() });
