const crypto = require('crypto');
const dotenv = require('dotenv');

dotenv.config();

function decryptData(data) {
  const key = Buffer.from(process.env.AES_KEY, 'hex');
  const iv = Buffer.from(process.env.AES_IV, 'hex');

  if (key.length !== 32) {
    throw new Error('La clave debe ser de 32 bytes (256 bits)');
  }
  if (iv.length !== 16) {
    throw new Error('El vector de inicialización (IV) debe ser de 16 bytes (128 bits)');
  }

  const parts = data.split(':');
  const encryptedText = parts.pop();
  const authTag = Buffer.from(parts.pop(), 'hex');

  const decipher = crypto.createDecipheriv('aes-256-gcm', key, iv);
  decipher.setAuthTag(authTag);

  let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
  decrypted += decipher.final('utf8');

  return decrypted;
}

module.exports = {
  decryptData,
};
