import { verifySignature } from '../utils/cryptoUtils.js';
import { getStoredPublicKey } from './keyController.js';

export const verifyMessage = (req, res) => {
    const { message, signature } = req.body;
    
    const storedPublicKey = getStoredPublicKey();
    
    if (!storedPublicKey) {
        return res.status(400).send({ status: 'error', message: 'No public key stored on the server.' });
    }

    const isValid = verifySignature(message, signature, storedPublicKey);
    res.send({ status: isValid ? 'valid' : 'invalid' });
};
