// Decipher this!
/* 
You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

For each word:

    the second and the last letter is switched (e.g. Hello becomes Holle)
    the first letter is replaced by its character code (e.g. H becomes 72)

Note: there are no special characters used, only letters and spaces

Examples

decipherThis('72olle 103doo 100ya'); // 'Hello good day'
decipherThis('82yade 115te 103o'); // 'Ready set go'
*/
function decipherThis(str) {
  return str
    .replace(/\d+/g, (val) => String.fromCharCode(val))
    .split(' ')
    .map((val) =>
      val.length > 2 ? val[0] + val.slice(-1) + val.slice(2, -1) + val[1] : val
    )
    .join(' ');
}

console.log(decipherThis('72olle 103doo 100ya'));
