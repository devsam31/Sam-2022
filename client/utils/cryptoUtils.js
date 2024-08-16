const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

function generateKeyPair() {
    const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
        modulusLength: 2048,
    });
    fs.writeFileSync(path.join(__dirname, '../keys/private.key'), privateKey.export({ type: 'pkcs1', format: 'pem' }));
    fs.writeFileSync(path.join(__dirname, '../keys/public.key'), publicKey.export({ type: 'spki', format: 'pem' }));
    console.log('Key pair generated and saved.');
}

module.exports = { generateKeyPair };
