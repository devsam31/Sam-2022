import { hashPassword, checkPassword } from '../utils/authUtils.js';

let storedPublicKey = null;
let storedPasswordHash = null;

export const storeKey = (req, res) => {
    const { publicKey, password } = req.body;
    
    if (!storedPasswordHash) {
        storedPasswordHash = hashPassword(password);
    }

    if (checkPassword(password, storedPasswordHash)) {
        storedPublicKey = publicKey;
        res.send({ status: 'success', message: 'Public key stored successfully.' });
    } else {
        res.status(403).send({ status: 'error', message: 'Invalid password.' });
    }
};

// Getter function for public key
export const getStoredPublicKey = () => storedPublicKey;
