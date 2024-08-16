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

function signMessage(message) {
    const privateKey = fs.readFileSync(path.join(__dirname, '../keys/private.key'), 'utf8');
    const sign = crypto.createSign('SHA256');
    sign.update(message);
    sign.end();
    const signature = sign.sign(privateKey, 'hex');
    console.log('Message:', message);
    console.log('Signature:', signature);
    return { message, signature };
}

module.exports = { generateKeyPair, signMessage };
