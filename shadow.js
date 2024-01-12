const fs = require('fs');
const { exec } = require('child_process');
const config = require('./config');

// Check if SESSION_ID is present
if (!config.SESSION_ID) {
  console.log('SESSION_ID not available. Skipping entire process.');
  // Start the index.js script
  console.log('Starting index.js...');
  exec('node index.js', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error starting index.js: ${error}`);
      return;
    }
    console.log(`index.js output: ${stdout}`);
    console.error(`index.js error: ${stderr}`);
  });

  // Exit the script
  process.exit(0);
}

// Remove the existing creds.json file
try {
  fs.unlinkSync('./SMD-SESSION/creds.json');
  console.log('Removed existing creds.json file.');
} catch (err) {
  console.error('Error removing existing creds.json file:', err.message);
}

// Read the encoded credentials from the SESSION_ID environment variable
const encodedCreds = config.SESSION_ID;

// Decode the hexadecimal-encoded credentials
const decodedCreds = Buffer.from(encodedCreds, 'hex').toString('utf8');

// Write the decoded credentials to creds.json in the SMD-SESSION folder
fs.writeFileSync('./SMD-SESSION/creds.json', decodedCreds);

console.log('Decoding complete. Decoded credentials saved to ./SMD-SESSION/creds.json');

// Start the index.js script
console.log('Starting index.js...');
exec('node index.js', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error starting index.js: ${error}`);
    return;
  }
  console.log(`index.js output: ${stdout}`);
  console.error(`index.js error: ${stderr}`);
});
