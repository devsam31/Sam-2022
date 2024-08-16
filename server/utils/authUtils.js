import crypto from 'crypto';

export const hashPassword = (password) => {
    return crypto.createHash('sha256').update(password).digest('hex');
};

export const checkPassword = (password, storedHash) => {
    const hash = crypto.createHash('sha256').update(password).digest('hex');
    return hash === storedHash;
};
