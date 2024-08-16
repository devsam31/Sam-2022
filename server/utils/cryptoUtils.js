import crypto from 'crypto';

export const verifySignature = (message, signature, publicKey) => {
    const verify = crypto.createVerify('SHA256');
    verify.update(message);
    verify.end();
    return verify.verify(publicKey, signature, 'hex');
};
