function lavenshteinAlgo2(str1 = "", str2 = ""){
    // log number of function calls
    console.log("called function lavenshteinAlgo2");

    //document.getElementById("main").innerHTML += "<p>Original Text: " + str1 + "</p>";
    //document.getElementById("main").innerHTML += "<p>Edited Text: " + str2 + "</p>";

    let i; // string index
    let j; // str2 index to find if element is deleted
    let k; // str2 index save
    let l;
    let match; // if str1 element has a match in str2

    for (i = 0, j = 0, k = 0, l = 0; str1[i] != undefined || str2[j] != undefined; i++, j++) {
        console.log (str1[i], str2[j], str2[k]);

        if (str1[i] == str2[j]) {
            console.log ("true");

            match = 1;
            document.getElementById("main").innerHTML += "<p class=\"equal\">" + str1[i] + "</p>";
        } else {
            console.log ("false");

            if (match == 1) 
                k = j;
            match = 0;

            for (j = k; j < str2.length; j++) {
                if (str1[i] == str2[j]) {
                    i--;
                    j--;
                    match = 1;
                    break;
                }
            }

            if (match == 1) {
                for (l = k; l < j + 1; l++)
                    document.getElementById("main").innerHTML += "<p class=\"insert\">" + str2[l] + "</p>";
            } else {
                console.log("no match");
                if (str1[i] != " ")
                    document.getElementById("main").innerHTML += "<p class=\"deleted\">" + str1[i] + "</p>";
                else
                    document.getElementById("main").innerHTML += " ";
                j = k;
            }
        }
    }   
}