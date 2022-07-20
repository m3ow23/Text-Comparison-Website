function lavenshteinAlgo1(string1 = "", string2 = ""){
    // log number of function calls
    console.log("called function lavenshteinAlgo1")

    //document.getElementById("main").innerHTML += "<p>Original Text: " + string1 + "</p>"
    //document.getElementById("main").innerHTML += "<p>Edited Text: " + string2 + "</p>"

    let str1 = string1.split(' ')
    let str2 = string2.split(' ')

    let i = 0

    for (i = 0; i < (str1.length > str2.length ? str1.length : str2.length); i++) {
        compareString(str1[i], str2[i])
        document.getElementById("main").innerHTML += " "
    }
}


function compareString(str1 = "", str2 = ""){
    // log number of function calls
    console.log("called function compareString")

    let i = 0 // str1 counter
    let j = 0 // str2 counter
    let k = 0
    let correctCombo = 0
    let wrongCombo = 0

    // check for succeeding correct letters
    for (i = 0; i < str1.length; i++){
        if (str1[i] == str2[i]) 
            correctCombo++
        else 
            wrongCombo++
    }

    // if number of succeeding correct letters are greater than length of string
    if (correctCombo > wrongCombo) {
        for (i = 0, j = 0; i < str1.length; i++, j++){
            if (str1[i] == str2[j])
                document.getElementById("main").innerHTML += "<p class=\"equal\">"+ str1[i] +"</p>"
            else {
                for (k = i; str1[k] != str2[k]; k++)
                    document.getElementById("main").innerHTML += "<p class=\"deleted\">"+ str1[k] +"</p>"
                    
                for (k = i; str1[k] != str2[k]; k++)
                    document.getElementById("main").innerHTML += "<p class=\"insert\">"+ str2[k] +"</p>"
                
                i = k - 1
            }
        }
    /* if (str1 == str2) {    
        document.getElementById("main").innerHTML += "<p class=\"equal\">"+ str1 +"</p>"*/
    } else if (str1 == "") {
        document.getElementById("main").innerHTML += "<p class=\"insert\">"+ str2 +"</p>"
    } else if (str2 == "") {
        document.getElementById("main").innerHTML += "<p class=\"deleted\">"+ str1 +"</p>"
    } else {
        document.getElementById("main").innerHTML += "<p class=\"deleted\">"+ str1 +"</p>"
        document.getElementById("main").innerHTML += " "
        document.getElementById("main").innerHTML += "<p class=\"insert\">"+ str2 +"</p>"
    }
}