const imagePaths = [
  './system/sha1.jpg',
  './system/sha2.jpg',
  './system/sha3.jpg',
  './system/sha4.jpg',
  './system/sha5.jpg',
  './system/sha11.jpg',
  './system/sha12.jpg',
  './system/sha6.jpg',
  './system/sha7.jpg',
  './system/sha8.jpg',
  './system/sha9.jpg',
  './system/sha10.jpg',
  './system/sha.jpg'
];
function getRandomImagePath() {
  const randomIndex = Math.floor(Math.random() * imagePaths.length);
  return imagePaths[randomIndex];
}

module.exports = getRandomImagePath;
