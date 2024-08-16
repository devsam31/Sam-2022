const { generateKeyPair, signMessage } = require('./utils/cryptoUtils');
const { submitPublicKey, submitForVerification } = require('./utils/httpUtils');
const args = process.argv.slice(2);

(async () => {
  const command = args[0];
  let serverUrl = '';
  let password = '';
  let message = '';

  switch (command) {
    case 'generate-keys':
      generateKeyPair();
      break;
    case 'submit-key':
      serverUrl = args[1];
      password = args[2];
      await submitPublicKey(serverUrl, password);
      break;
    case 'sign-message':
      message = args[1];
      signMessage(message);
      break;
    case 'verify':
      serverUrl = args[1];
      password = args[2];
      message = args[3];
      const { signature } = signMessage(message);
      await submitForVerification(serverUrl, message, signature);
      break;
    default:
      console.log('Unknown command');
  }
})();
