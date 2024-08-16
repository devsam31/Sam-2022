const axios = require('axios');
const fs = require('fs');
const path = require('path');

async function submitPublicKey(serverUrl, password) {
    const publicKey = fs.readFileSync(path.join(__dirname, '../keys/public.key'), 'utf8');
    const response = await axios.post(`${serverUrl}/store-key`, { publicKey, password });
    console.log(response.data);
}

module.exports = { submitPublicKey };
