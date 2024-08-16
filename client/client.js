const { generateKeyPair } = require('./utils/cryptoUtils');
const { submitPublicKey } = require('./utils/httpUtils');
const args = process.argv.slice(2);

(async () => {
  const command = args[0];
  let serverUrl = '';
  let password = '';

  switch (command) {
    case 'generate-keys':
      generateKeyPair();
      break;
    case 'submit-key':
      serverUrl = args[1];
      password = args[2];
      await submitPublicKey(serverUrl, password);
      break;
    default:
      console.log('Unknown command');
  }
})();
