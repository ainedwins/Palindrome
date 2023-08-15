function palindrome(string) {
  const cleanStr = string.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  const reversedStr = cleanStr.split('').reverse().join('');
  return cleanStr === reversedStr;
}

function firstPalindrome(words) {
  for (const word of words) {
    if (palindrome(word)) {
      return word;
    }
  }
  return "";
}