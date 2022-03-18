// https://leetcode.com/problems/sorting-the-sentence/

// MINE
/*
function sortSentence(s: string): string {
    return s.split(' ').sort((a, z) => parseInt(a[a.length-1]) - parseInt(z[z.length-1])).map(word => word.slice(0, -1)).join(' ')
};
*/

// ANSWER: without sort
function sortSentence(s: string): string {
    var words = s.split(" ");
    var res = new Array(words.length);
    for(let word of words){
        let i = word.length - 1;
        res[parseInt(word[i]) - 1] = word.substring(0, i); 
    }
    return res.join(" ");
};
