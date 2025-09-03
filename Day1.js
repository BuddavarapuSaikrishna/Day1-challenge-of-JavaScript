
// Pangram 

// Note iam finding an error in this code  

//isPangram("leo","heo") return true  actually get false value but the test cases are passed 

/*Given a word or sentence and a string of lowercase letters, determine if the word or sentence uses all the letters from the given set at least once and no other letters.

Ignore non-alphabetical characters in the word or sentence.
Ignore letter casing in the word or sentence.

. isPangram("hello", "helo") should return true
Passed:2. isPangram("hello", "hel") should return false
Passed:3. isPangram("hello", "helow") should return false
Passed:4. isPangram("hello world", "helowrd") should return true
Passed:5. isPangram("Hello World!", "helowrd") should return true
Passed:6. isPangram("Hello World!", "heliowrd") should return false
Passed:7. isPangram("freeCodeCamp", "frcdmp") should return false
Passed:8. isPangram("The quick brown fox jumps over the lazy dog.", "abcdefghijklmnopqrstuvwxyz") should return */


// code 


function isPangram(sentence, letters) {

  let arr = []
  sentence = sentence.toLowerCase();
  letters = letters.toLowerCase();
  for (let val of sentence){
    const charcode = val.charCodeAt()
    if (charcode >= 97 && charcode <= 122){
       arr.push(val)
    }
  }
  const myset = new Set(arr)
  arr = [...myset]
  sentence = arr.join("");
  if(sentence.length === letters.length){
    return true
  }else{
    return false
  }
}

isPangram("hello","helo")
isPangram("hello", "helow")
isPangram("freeCodeCamp", "frcdmp")
isPangram("hio","leo")