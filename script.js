function firstWord(str) {
  // Trim leading and trailing spaces
  str = str.trim();

  // Check if the string is empty after trimming
  if (str === '') {
    return '';
  }

  // Find the index of the first space
  const spaceIndex = str.indexOf(' ');

  // If there's no space, return the whole string, otherwise return the first word
  if (spaceIndex === -1) {
    return str;  // No space found, return the whole string
  }

  return str.substring(0, spaceIndex);  // Extract the first word
}


// Do not change the code below

//const s = prompt("Enter String:");
alert(firstWord(s));
