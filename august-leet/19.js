// Goat Latin

// A sentence S is given, composed of words separated by spaces. Each word consists of lowercase and uppercase letters only.

// We would like to convert the sentence to "Goat Latin" (a made-up language similar to Pig Latin.)

// The rules of Goat Latin are as follows:

// If a word begins with a vowel (a, e, i, o, or u), append "ma" to the end of the word.
// For example, the word 'apple' becomes 'applema'.
 
// If a word begins with a consonant (i.e. not a vowel), remove the first letter and append it to the end, then add "ma".
// For example, the word "goat" becomes "oatgma".
 
// Add one letter 'a' to the end of each word per its word index in the sentence, starting with 1.
// For example, the first word gets "a" added to the end, the second word gets "aa" added to the end and so on.
// Return the final sentence representing the conversion from S to Goat Latin. 

// Example 1:

// Input: "I speak Goat Latin"
// Output: "Imaa peaksmaaa oatGmaaaa atinLmaaaaa"
// Example 2:

// Input: "The quick brown fox jumped over the lazy dog"
// Output: "heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa"
 
 var toGoatLatin = function(S) {
    const words = S.split(' ');
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let result = [];
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if (vowels.indexOf(word[0]) === -1) {
            word = word.substring(1) + word[0];
        }
        word += 'ma' + 'a'.repeat(i + 1);
        result.push(word);
    }
    return result.join(' ');
 }

 console.log(toGoatLatin("I speak Goat Latin"));
 console.log(toGoatLatin("The quick brown fox jumped over the lazy dog"));


/* ------------------------------------- */
/*  Result: 58%
    Runtime:
        best case: O(n)
        worst case: O(n)
        average case: O(n))
    Space: O(n)
    Time to Complete: 30 min

*/