let obj = {
    valueToSearchFor: 200,
    sortedArr: [10, 50, 200, 230, 400, 530, 720],
    unSortedArr: [1000, 50, 200, 850, 430, 230],
    init:function(){
        //// DO NOT NEED TO EDIT ////
        let keys = Object.keys(this);
        let terminalArgs = process.argv.slice(2);
        let methodNames = keys.slice(keys.indexOf("init")+1);
        let commands = {};
        methodNames.forEach((methodName)=>{
            let capitalLetters = "";
            for(let i = 0; i < methodName.length; i++){
                let letter = methodName.charAt(i);
                if(letter === letter.toUpperCase()){
                    capitalLetters+=letter.toLowerCase();
                }
            }
            commands[methodName[0] + capitalLetters] = methodName;
        })
        let result;
        let methodToRun = commands[terminalArgs[0]];
        if(methodToRun){
            result = this[methodToRun](this.sortedArr, terminalArgs[1] ? Number(terminalArgs[1]) : this.valueToSearchFor);
        } else {
            let methodCommandList = Object.entries(commands).map((method)=>`\n(${method[0]}) - ${method[1]}`);
            result = `Please provide an abbreviation as a terminal argument:` + methodCommandList;
        }
        console.log(result);
        //// DO NOT NEED TO EDIT ////
    },
    binaryRecursive:function(arr, valueToFind, start=0, end=arr.length-1){
        // Find the middle index
        // Check if the start index is greater than the end index
        // Return -1
        
        // Check value of middle index and see if it's equal to the value we're trying to find
        // Return the middle index
        // If the value we're trying to find is greater than the value that is in the position of the middle index
        // Recursive call setting new start index and end index values
        // If the value we're trying to find is less than the value that is in the position of the middle index 
        // Recursive call setting new start index and end index values

        // console.log("Current array elements: ", arr.slice(startIndex, endIndex+1)); // Helpful printing to see what the current array elements are in this method call
    },
    binaryIterative:function(arr, valueToFind){
        // Initially set start value
        // Initially set end value to the last index in the array
        // While the start value is less than or equal to the end value
        // Find the middle index
        // Check value of the middle index and see if it's equal to the value we're trying to find
        // Return the middle index
        // If the value we're trying to find is greater than the value that is in the position of the middle index 
        // Set start index to the middle index plus one
        // Otherwise
        // Set end index to the middle index minus one
        // Return -1
    },
    exponentialIterative:function(arr, valueToFind){
        // If the first value in the array is the value you're looking
        // Return 0

        // Initialize i to one
        // While i less than the length of the array and the element value at 
        // position i is less than the value we're looking for
        // Double the value of i
        
        // Use binary search to find the value
    },
    exponentialRecursive:function(arr, valueToFind, i=1){
        // If the first value in the array is the value you're looking (Base Case)
        // Return 0

        // While i less than the length of the array and the element value at 
        // position i is less than the value we're looking for
        // Recursive call passing the double of i
        // Use binary search to find the value
    },
    linearRecursive:function(arr, valueToFind, start=0){
        // Check if the start index is greater then or equal to the final index in the array
        // Return -1
        // If the value of the start index is equal to the value you're looking for
        // Return start index
        
        // Recursive call setting a new start value
    },
    linearIterative:function(arr, valueToFind){
        // Iterate through the given array
        // Check during each iteration, if the current value is equal to the value you're looking for
        // Return the current index
        // Return -1 if not found
    },
    jumpIterative:function(arr, valueToFind){
        // Initialize the step to the square root of the total number of items in the array
        // Initialize the start of the block to be 0
        // Set the end of the block equal to the initial step
        // As long as the value we're looking for is greater than the first value in the block
        // Increment start by a step
        // Increment end by a step
        // If start is greater than the total elements in the array
        // Return -1 if not found

        // console.log(`Value is between ${start} and ${Math.min(end, arr.length-1)}`);
        // Start at the beginning of the block and iterate until the end of the block or end of the array
        // console.log(valueToFind, arr[i]);
        // If the value we're looking for is equal to the current index value
        // Return the index

        // Return -1 if not found
    },
    interpolationIterative:function(arr, valueToFind) {
        // Set start index
        // Set end index
        // Initialize position

        // While the starting index is less than or equal to the end index 
        // and the value we're looking for is greater than or equal to the starting value 
        // and the value we're looking for is less or equal to than the ending value
        // Use the Interpolation formula to calculate where the index would be if the values were evenly distributed

        // Indices are X
        // Values in each position are Y
        // X = X1 + (X2-X1) * ( (Y-Y1) / (Y2-Y1) ) // Interpolation formula

        // If the value of the position we chose is equal to the value we're looking 
        // Return the position index
        // If the value of the position we chose is greater than to the value we're looking
        // Set the ending index to the position index minus one
        // If the value of the position we chose is less than to the value we're looking 
        // Set the starting index to the position index minus one

        // return -1;
    },
    interpolationRecursive:function(arr, valueToFind, start=0, end=arr.length-1) {
        // If the start index is greater than the end index (Base Case)
        // Return -1
        // Use the Interpolation formula to calculate where the index would be if the values were evenly distributed

        // Indices are X
        // Values in each position are Y
        // X = X1 + (X2-X1) * ( (Y-Y1) / (Y2-Y1) ) // Interpolation formula

        // If the value of the position we chose is equal to the value we're looking 
        // Return the position index
        // If the value of the position we chose is greater than to the value we're looking
        // Recursive call passing pos+1 as the new start index
        // If the value of the position we chose is less than to the value we're looking 
        // Recursive call passing pos-1 as the new end index
    }

}
require.main === module && obj.init();
module.exports = obj;