const STRING1 = "abcdefghij";
const STRING2 = "ab12345hij";

function lavenshteinAlgo(){
    // log number of function calls
    console.log("called function lavenshteinAlgo");

    document.getElementById("main").innerHTML += "<p>Original Text: " + STRING1 + "</p>";
    document.getElementById("main").innerHTML += "<p>Edited Text: " + STRING2 + "</p>";

    let str1 = STRING1.split(' ');
    let str2 = STRING2.split(' ');

    let i = 0;

    for (i = 0; i < (str1.length > str2.length ? str1.length : str2.length); i++) {
        
        if (str1[i].length == str2[i].length) compareString(str1[i], str2[i]);
        
        document.getElementById("main").innerHTML += " ";
    }
}

function compareString(str1 = "", str2 = ""){
    // log number of function calls
    console.log("called function compareString");

    let i = 0; // str1 counter
    let j = 0; // str2 counter
    let k = 0;
    let correctCombo = 0;
    let wrongCombo = 0;

    for (i = 0; i < str1.length; i++){
        if (str1[i] == str2[i]) 
            correctCombo++;
        else 
            wrongCombo++;
    }

    // if number of succeeding correct letters are greater than length of string
    if (correctCombo >= wrongCombo) {
        for (i = 0, j = 0; i < str1.length; i++, j++){
            if (str1[i] == str2[j])
                document.getElementById("main").innerHTML += "<p class=\"equal\">"+ str1[i] +"</p>";
            else {
                for (k = i; str1[k] != str2[k]; k++)
                    document.getElementById("main").innerHTML += "<p class=\"deleted\">"+ str1[k] +"</p>";
                    
                for (k = i; str1[k] != str2[k]; k++)
                    document.getElementById("main").innerHTML += "<p class=\"insert\">"+ str2[k] +"</p>";
                
                i = k - 1;
            }
        }
    } else {
        for (i = 0; i < str1.length; i++)
            document.getElementById("main").innerHTML += "<p class=\"deleted\">"+ str1[i] +"</p>";
        
        document.getElementById("main").innerHTML += " ";

        for (i = 0; i < str2.length; i++)
            document.getElementById("main").innerHTML += "<p class=\"insert\">"+ str2[i] +"</p>";
    }
}

/*
function textDiff(s1, s2) {
    let lcs;
    if (splitByWords) {
      // This splits s1 and s2 by words.
      let reg = /([ .,])/g;
      split1 = s1.split(reg);
      split2 = s2.split(reg);
      lcs = LCS(split1, split2);

    let i;
    let i1 = 0; let i1Next = 0;
    let i2 = 0; let i2Next = 0;
    let result1 = [];
    let result2 = [];

    for (i = 0; i < lcs.length; i++) {
      i1Next = s1.indexOf(lcs[i], i1);
      i2Next = s2.indexOf(lcs[i], i2);
      pushResult(result1, s1.substring(i1, i1Next), 'deleted');
      pushResult(result2, s2.substring(i2, i2Next), 'added');
      pushResult(result1, lcs[i]);
      pushResult(result2, lcs[i]);
      i1 = i1Next + 1;
      i2 = i2Next + 1;
    }
    pushResult(result1, s1.substring(i1), 'deleted');
    pushResult(result2, s2.substring(i2), 'added');
  
    return {lcs: lcs,
            deleted: result1.join(''),
            added: result2.join('')};
}
  
function pushResult(resultArray, stringToPush, className) {
    if (!stringToPush) {
        return;
    }
    if (className) {
        resultArray.push(`<span class="${className}">${stringToPush}</span>`);
    } else {
        resultArray.push(stringToPush);
    }
}

// A dynamic programming (memoized) approach
// to find a longest common subsequence between s1 and s2.
// s1 and s2 could be either strings or arrays of strings.
function LCS(s1, s2) {
    let memo = [...Array(s1.length)].map(e => Array(s2.length));
    return helper(s1, s2, 0, 0, memo);
}

function helper(s1, s2, i1, i2, memo) {
    if (i1 == s1.length || i2 == s2.length) {
        return '';
    }

    if (memo[i1][i2] !== undefined) {
        return memo[i1][i2];
    }

    if (s1[i1] == s2[i2]) {
        memo[i1][i2] = s1[i1] + helper(s1, s2, i1 + 1, i2 + 1, memo);
        return memo[i1][i2];
    }

    let result;
    let resultA = helper(s1, s2, i1 + 1, i2, memo);
    let resultB = helper(s1, s2, i1, i2 + 1, memo);
    if (resultA.length > resultB.length) {
        result = resultA;
    } else {
        result = resultB;
    }
    memo[i1][i2] = result;
    return memo[i1][i2];
}
*/


/*
function lavenshteinAlgo(){
    // log number of function calls
    console.log("called function lavenshteinAlgo");

    const track = Array(str2.length + 1).fill(null).map(() => Array(str1.length + 1).fill(null));

    for (let i = 0; i <= str1.length; i += 1){
        track[0][i] = i;
    }

    for (let j = 0; j <= str2.length; j += 1){
        track[j][0] = j;
    }

    for (let j = 1; j <= str2.length; j += 1){
        for (let i = 1; i <= str1.length; i += 1) {
            const indicator = str1[i - 1] === str2[j - 1] ? 0 : 1;
            track[j][i] = Math.min(
                track[j][i - 1] + 1, // deletion
                track[j - 1][i] + 1, // insertion
                track[j - 1][i - 1] + indicator, // substitution
            );
        }
    }
    return track[str2.length][str1.length];
}
*/