function stringCompare(string1 = "", string2 = "") {
    // log number of function calls
    console.log("called function stringCompare");

    console.log(string1);
    console.log(string2);

    let str1 = string1.split(' ');
    let str2 = string2.split(' ');

    let matrix = [[],[]];
    let matrix_index; // matrix index
    let str1_index; // str1 index
    let str1_save; // str1 save
    let str2_index; // str2 index
    let str2_save; // str2 save

    // construct string in matrix
    for (matrix_index = 0, str1_index = 0, str2_index = 0; str1[str1_index] != undefined || str2[str2_index] != undefined; str2_index++) {
        // if strings matched
        if ((str1[str1_index] == undefined ? undefined : str1[str1_index].replace(/[?.,!:;]/g, "")) == (str2[str2_index] == undefined ? undefined : str2[str2_index].replace(/[?.,!:;]/g, ""))) { 
            console.log("> match");
            matrix[0][matrix_index] = str1[str1_index];
            matrix[1][matrix_index] = str2[str2_index];
            matrix_index++;
            str1_index++;
        } else { // if strings mismatched
            console.log("> not match");
            
            // check if str2 word exists in str1
            for (str1_save = str1_index, str2_save = str2_index; str1[str1_index] != undefined; str1_index++) { 
                console.log("str1_save = "+ str1_save +" | str1["+ str1_index +"] = "+ str1[str1_index] +" | str2["+ str2_index +"] = "+ str2[str2_index]);

                // check for str2 match in array str1
                if ((str1[str1_index] == undefined ? undefined : str1[str1_index].replace(/[?.,!:;]/g, "")) == (str2[str2_index] == undefined ? undefined : str2[str2_index].replace(/[?.,!:;]/g, ""))) { 
                    console.log("found another match");

                    for (; str1_save < str1_index; str1_save++, matrix_index++) { // marking deleted
                        matrix[0][matrix_index] = str1[str1_save];
                        matrix[1][matrix_index] = null;  
                    }
                    console.log(matrix_index, str1[str1_index], str2[str2_index]); 
                    
                    matrix[0][matrix_index] = str1[str1_index]; // marking the other match
                    matrix[1][matrix_index] = str2[str2_index];
                    matrix_index++;
                    break;
                } else if (str2[str2_index] == undefined) {
                    console.log("str2[] is undefined");

                    for (; str1_save <= str1.length - 1; str1_save++) { // marking deleted
                        matrix[0][matrix_index] = str1[str1_save];
                        matrix[1][matrix_index] = null;
                        matrix_index++;
                    }
                }
            }
            
            // if no match is found then mark as insert
            if ((str1[str1_index] == undefined ? undefined : str1[str1_index].replace(/[?.,!:;]/g, "")) != (str2[str2_index] == undefined ? undefined : str2[str2_index].replace(/[?.,!:;]/g, ""))) { 
                console.log("no match is found");
                
                matrix[0][matrix_index] = null;
                matrix[1][matrix_index] = str2[str2_index];
                matrix_index++;
                str1_index = str1_save;
            } else if (str2_index == str2.length - 1 && (str1[str1_index] == undefined ? undefined : str1[str1_index].replace(/[?.,!:;]/g, "") != (str2[str2_index] == undefined ? undefined : str2[str2_index]))) {
                console.log("last str2 index");

                // marking deleted when already in last str2 index
                for (; str1_save < str1_index; str1_save++, matrix_index++) { 
                    matrix[0][matrix_index] = str1[str1_save];
                    matrix[1][matrix_index] = null;
                }
            }else
                str1_index++;
            
        }
    }

    console.log("finished construction of matrix");
    console.log(matrix);

    // print matrix
    for (matrix_index = 0; matrix[0][matrix_index] != null || matrix[1][matrix_index] != null; matrix_index++) {
        if ((matrix[0][matrix_index] == null ? null : matrix[0][matrix_index].replace(/[?.,!:;]/g, "")) == (matrix[1][matrix_index] == null ? null : matrix[1][matrix_index].replace(/[?.,!:;]/g, "")))
            document.getElementById("result").innerHTML += "<p class=\"equal\">" + matrix[1][matrix_index] + "</p>";
        else if (matrix[1][matrix_index] == null)
            document.getElementById("result").innerHTML += "<p class=\"deleted\">" + matrix[0][matrix_index] + "</p>";
        else 
            document.getElementById("result").innerHTML += "<p class=\"insert\">" + matrix[1][matrix_index] + "</p>";    
        document.getElementById("result").innerHTML += " ";
    }
}

function addStr(str, index, stringToAdd){
    return str.substring(0, index) + stringToAdd + str.substring(index, str.length);
}