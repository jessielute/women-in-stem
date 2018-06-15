const shortenLabels = (arr, maxLength) => {
    // Iterate over array of strings
    let accumulator =  [];
    for(let i = 0; i < arr.length; i++) {
        // See if current string is less than maxLength
        if (arr[i].length < maxLength) {
             // if so, put string in new accumulator array
            accumulator.push(arr[i]) 
        } else {
            console.log('a wild long string has appeared')
             // else, iterate over string
            let separatedLetters = arr[i].split(" ")
            let lengthSoFar = 0;
            let checkedUpTo = 0;
            let wordsArray = [];
            console.log(separatedLetters);
             for (j=0; j < separatedLetters.length; j++) {
                 console.log(separatedLetters[j])
                lengthSoFar += separatedLetters[j].length;
                 console.log("lengthSoFar is ", lengthSoFar)
                if (lengthSoFar > maxLength) {
                    console.log('it was longer than', maxLength);
                    
                    let firstPiece = separatedLetters.slice(checkedUpTo, j-1);
                    console.log('first peice is', firstPiece)
                    wordsArray.push(firstPiece.join(" "))
                    lengthSoFar = 0;
                    checkedUpTo = j-1;
                } else if (j = separatedLetters.length-1) {
                    let lastPiece = separatedLetters.slice(checkedUpTo);
                    wordsArray.push(lastPiece.join(" "))
                }
             }
             accumulator.push(wordsArray);
            // track space indexes
            // cut word at last space, when limit is hit
            // place two new strings in new array
            // place array into accumulator 
        }
    }
    return accumulator;
}

let DataToFuckWith = ['Architecture and Engineering', 'Business, Management and Public Administration', 'Social and Behavioural Sciences', 'Humanities', 'Health and Related Fields', 'Mathematics, Computer and Information Science', 'Physical and Life Sciences and Technologies', 'Personal, Protective and Transportation Services', 'Visual and Performing Arts and Communications Technologies', 'Education', 'Other Instructional Programs', 'Agriculture, Natural Resources and conservation', 'Personal Improvement and Leisure'];

console.log( shortenLabels(DataToFuckWith, 30) )
