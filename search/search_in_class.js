let obj = {
    valueToSearchFor: 530,
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
        let mid = Math.floor((start + end)/2); // Find the middle index
        if(start > end){ // Check if the start index is greater than the end index
            return -1; // Return -1
        }
        if(valueToFind === arr[mid]){ // Check value of middle index and see if it's equal to the value we're trying to find
            return mid; // Return the middle index
        } else if(valueToFind > arr[mid]){ // If the value we're trying to find is greater than the value that is in the position of the middle index
            return this.binaryRecursive(arr, valueToFind, mid+1, end); // Recursive call setting new start index and end index values
        } else if(valueToFind < arr[mid]){ // If the value we're trying to find is less than the value that is in the position of the middle index 
            return this.binaryRecursive(arr, valueToFind, start, mid-1); // Recursive call setting new start index and end index values
        }
        // console.log("Current array elements: ", arr.slice(startIndex, endIndex+1)); // Helpful printing to see what the current array elements are in this method call
    },
    binaryIterative:function(arr, valueToFind){
        // console.log("Current array elements: ", arr.slice(startIndex, endIndex+1)); // Helpful printing to see what the current array elements are in this method call
        let start = 0; // Initially set start value
        let end = arr.length-1; // Initially set end value to the last index in the array
        while(start <= end){ // While the start value is less than or equal to the end value
            let mid = Math.floor((start + end)/2); // Find the middle index
            if(valueToFind === arr[mid]){ // Check value of the middle index and see if it's equal to the value we're trying to find
                return mid; // Return the middle index
            } else if(valueToFind > arr[mid]){ // If the value we're trying to find is greater than the value that is in the position of the middle index 
                start = mid+1; // Set start index to the middle index plus one
            } else if(valueToFind < arr[mid]){ // Otherwise
                end = mid-1; // Set end index to the middle index minus one
            }
        }
        return -1; // Return -1
    },
    exponentialIterative:function(arr, valueToFind){
        if(valueToFind == arr[0]){ // If the first value in the array is the value you're looking
            return 0; // Return 0
        }
        let i=1; // Initialize i to one
        // While i less than the length of the array and the element value at 
        // position i is less than the value we're looking for
        while(i < arr.length && valueToFind >= arr[i]){
            i*=2; // Double the value of i
        }
        return this.binaryRecursive(arr, valueToFind, i/2, Math.min(i, arr.length-1)); // Use binary search to find the value
    },
    exponentialRecursive:function(arr, valueToFind, i=1){
        if(valueToFind == arr[0]){ // If the first value in the array is the value you're looking
            return 0; // Return 0
        }
        // While i less than the length of the array and the element value at 
        // position i is less than the value we're looking for
        if(i < arr.length && valueToFind >= arr[i]){ 
            return this.exponentialRecursive(arr, valueToFind, i*2); // Recursive call passing the double of i
        }
        return this.binaryRecursive(arr, valueToFind, i/2, Math.min(i, arr.length-1)); // Use binary search to find the value
    },
    linearRecursive:function(arr, valueToFind, start=0){
        if(start > arr.length-1){ // Check if the start index is greater then or equal to the final index in the array
            return -1; // Return -1
        }
        if(valueToFind === arr[start]){ // If the value of the start index is equal to the value you're looking for
            return start; // Return start index
        } else {
            return this.linearRecursive(arr, valueToFind, start+1); // Recursive call setting a new start value
        }
    },
    linearIterative:function(arr, valueToFind){
        for(let i=0;i<arr.length;i++){ // Iterate through the given array
            if(valueToFind === arr[i]){ // Check during each iteration, if the current value is equal to the value you're looking for
                return i; // Return the current index
            }
        }
        return -1; // Return -1 if not found
    },
    jumpIterative:function(arr, valueToFind){
        let step = Math.floor(Math.sqrt(arr.length))-1; // Initialize the step to the square root of the total number of items in the array
        let start = 0; // Initialize the start of the block to be 0
        let end = step; // Set the end of the block equal to the initial step
        while(valueToFind > arr[start]){ // As long as the value we're looking for is greater than the first value in the block
            start += step; // Increment start by a step
            end += step; // Increment end by a step
            if(start > arr.length){ // If start is greater than the total elements in the array
                return -1; // Return -1 if not found
            }
        }
        // console.log(`Value is between ${start} and ${Math.min(end, arr.length-1)}`);
        for(let i=start;i<Math.min(end, arr.length);i++){ // Start at the beginning of the block and iterate until the end of the block or end of the array
            // console.log(valueToFind, arr[i]);
            if(valueToFind === arr[i]){ // If the value we're looking for is equal to the current index value
                return i; // Return the index
            }
        }
        return -1; // Return -1 if not found
    },
    interpolationIterative:function(arr, valueToFind) {
        let start = 0; // Set start index
        let end = arr.length-1; // Set end index
        let pos; // Initialize position

        // While the starting index is less than or equal to the end index 
        // and the value we're looking for is greater than or equal to the starting value 
        // and the value we're looking for is less or equal to than the ending value

        while(start <= end && valueToFind >= arr[start] && valueToFind <= arr[end]){
            // Use the Interpolation formula to calculate where the index would be if the values were evenly distributed
            pos = start + Math.floor((end - start) * (valueToFind - arr[start])/(arr[end] - arr[start]));

            // Indices are X
            // Values in each position are Y
            // X = X1 + (X2-X1) * ( (Y-Y1) / (Y2-Y1) ) // Interpolation formula

            if(valueToFind === arr[pos]){ // If the value of the position we chose is equal to the value we're looking 
                return pos; // Return the position index
            } else if(valueToFind > arr[pos]){ // If the value of the position we chose is greater than to the value we're looking
                start = pos+1; // Set the ending index to the position index minus one
            } else if(valueToFind < arr[pos]) { // If the value of the position we chose is less than to the value we're looking 
                end = pos-1; // Set the starting index to the position index minus one
            }
        }
        return -1; // Return -1
    },
    interpolationRecursive:function(arr, valueToFind, start=0, end=arr.length-1) {
        // While the starting index is less than or equal to the end index 
        // and the value we're looking for is greater than or equal to the starting value 
        // and the value we're looking for is less or equal to than the ending value
        // i.e. If out of range for this subArray
        if(start > end || valueToFind < arr[start] || valueToFind > arr[end]){
            return -1; // Return -1
        }
        // Use the Interpolation formula to calculate where the index would be if the values were evenly distributed
        let pos = start + Math.floor((end - start) * (valueToFind - arr[start])/(arr[end] - arr[start]));

        // Indices are X
        // Values in each position are Y
        // X = X1 + (X2-X1) * ( (Y-Y1) / (Y2-Y1) ) // Interpolation formula

        if(valueToFind === arr[pos]){ // If the value of the position we chose is equal to the value we're looking 
            return pos; // Return the position index
        } else if(valueToFind > arr[pos]){ // If the value of the position we chose is greater than to the value we're looking
            return this.interpolationRecursive(arr, valueToFind, pos+1, end); // Recursive call passing pos+1 as the new start index
        } else if(valueToFind < arr[pos]) { // If the value of the position we chose is less than to the value we're looking 
            return this.interpolationRecursive(arr, valueToFind, start, pos-1); // Recursive call passing pos-1 as the new end index
        }
    }
}
require.main === module && obj.init();
module.exports = obj;