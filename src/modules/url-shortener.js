function urlGen(urlLength) {
// String to hold values of randomized string creation
  const urlSource = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
// Empty value to collect random characters as the creation loop runs
  let urlHold = '';

  for (let i = 0; i < urlLength; i += 1) {
  // Find a random position in urlSource and append to urlHold
    const rand = Math.round(Math.random() * (urlSource.length - 1));
    urlHold += urlSource.charAt(rand);
  }

  return urlHold;
}

// Make available to any file that requires it
exports.urlGen = urlGen;
