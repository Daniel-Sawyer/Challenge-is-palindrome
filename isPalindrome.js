let ispalindrome = (word) => {
    let palindrome = false 
    for(i = 0; i < word.length; i++){
        console.log(word[i]);
        if(word[i] !== word[word.length - i - 1])
        return palindrome
   }
   return palindrome = true
}

console.log(ispalindrome(`rubber`))