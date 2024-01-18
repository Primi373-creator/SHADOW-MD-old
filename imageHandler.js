// imageHandler.js
const fs = require('fs');
const path = require('path');

function getRandomImage(directory) {
  const imageFiles = fs.readdirSync(directory);

  if (imageFiles.length > 0) {
    // Randomly select an image file
    const randomImageFile = imageFiles[Math.floor(Math.random() * imageFiles.length)];

    // Construct the full path to the selected image file
    const imagePath = path.join(directory, randomImageFile);

    return fs.readFileSync(imagePath);
  } else {
    console.error('No image files found in the specified directory.');
    return null;
  }
}

module.exports = {
  getRandomImage,
};
