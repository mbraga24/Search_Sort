let obj = {
    unSortedArr:[3,2,50,9,2,4,10,44,663,32,100],
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
            result = this[methodToRun](this.unSortedArr);
        } else {
            let methodCommandList = Object.entries(commands).map((method)=>`\n(${method[0]}) - ${method[1]}`);
            result = `Please provide an abbreviation as a terminal argument:` + methodCommandList;
        }
        console.log(result);
        //// DO NOT NEED TO EDIT ////
    },
    bubbleIterative:function(arr){
        for (let i = 0; i < arr.length; i++) { // Iterate through the array
            let isSwapped = false; //  Create a boolean flag to determine if a swap happened
            for (let j = 0; j < arr.length-i; j++) { // Start an inside iteration
              if (arr[j] > arr[j + 1]) { // Check if the current value is greater than next value
                let temp = arr[j + 1]; // Swap values in array
                arr[j + 1] = arr[j];
                arr[j] = temp;
                isSwapped = true; // Set swap variable to true
              }
            }
            if (!isSwapped) { // If there's no swap, the arr is fully sorted and can exit there, we break.
              break;
            }
        }
        return arr;
    },
    insertionIterative:function(arr){
        for(let i = 0; i < arr.length; i++) { // Iterate through the array --Boundary
            let currentValue = arr[i]; // Set a variable to the current value of the iteration
            // Run only if j is greater than or equal to 0 and the value of index position j 
            // is greater than the current value of the iteration
            for(var j = i-1; j >= 0 && arr[j] > currentValue; j--){
                arr[j+1] = arr[j]; // Set the value of j+1 to the current value of index position j
            }
            arr[j+1] = currentValue; // Set the value of j+1 to the current value of the iteration
        }
        return arr;
    },
    selectionIterative:function(arr){
        for(let i = 0; i<arr.length; i++){ // Iterate through the array --Boundary
            let minIndex = i; // Set placeholder value to of minIndex

            for(let j = i+1; j<arr.length; j++){ // Iterate through the right of the boundary
                if(arr[j]<arr[minIndex]){
                    minIndex = j;
                }
            }

            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
        return arr;
    },
    binaryInsertionIterative:function(arr){    
        for (let i = 1; i < arr.length; i++) { //--Boundary
            let current = arr[i];
            let start = 0;
            let end = i;
            // Binary Search
            while (start <= end) {
                let middle = Math.floor((start + end)/2);
                if (arr[middle] <= current) {
                    start = middle + 1;
                } else if (arr[middle] > current) {
                    end = middle - 1;
                }
            }
            let j;
            for (j = i; j > start; j--) {
                arr[j] = arr[j - 1];
            }
            arr[j] = current;
        }
        return arr;
    }, 
    quickRecursive:function(arr, low=0, high=arr.length-1){
        if(low >= high){ //Base Case
            return;
        }
        // console.log("Before: ", arr);
        /* pi is partitioning index, arr[pi] is now
        at right place */
        pi = partition(arr, low, high);

        this.quickRecursive(arr, low, pi - 1);  // Before pi
        this.quickRecursive(arr, pi + 1, high); // After pi

        function partition (arr, low, high){
            // Helpful printing to see what the current array elements are in this method call
            // console.log("Partition ", arr.slice(low, high+1)); 

            // pivot (Element to be placed at right position)
            let pivotIndex = high;
            let pivotValue = arr[high];
            // console.log("Pivot Value", pivotValue);
        
            let i = (low - 1);  // Index of smaller element
            // console.log("Lower index ", i);

            for (j = low; j < high; j++){
                // console.log("Value of j", arr[j], "Value of i", i);
                // If current element is smaller than the pivot
                if (arr[j] < pivotValue){
                    i++;    // increment index of smaller element
                    // console.log("Swap ", arr[i], arr[j]);
                    let temp = arr[i]; // Swap values in array
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
            // console.log("Swap ", arr[i+1], arr[high]);
            let temp = arr[i+1];
            arr[i+1] = arr[pivotIndex];
            arr[pivotIndex] = temp;
            // console.log("After: ", arr);
            return (i + 1);
        }
        return arr;
    },
    mergeRecursive:function(arr){
        const half = Math.floor(arr.length/2);

        // Base case or terminating case
        if(arr.length < 2){
            return arr;
        }
        
        const leftArr = arr.slice(0, half);
        const rightArr = arr.slice(half, arr.length);
        // console.log("Left split: ", leftArr, ", Right split: ", rightArr);
        return merge(this.mergeRecursive(leftArr), this.mergeRecursive(rightArr));
        
        function merge(leftArr, rightArr) {
            // console.log("Combine Function: Left Array: ", leftArr, ", Right Array: ", rightArr);
            let arr = [];
            // Break out of loop if any one of the array gets empty
            while (leftArr.length && rightArr.length) {
                // Pick the smaller among the smallest element of left and right sub arrays 
                if (leftArr[0] < rightArr[0]) {
                    arr.push(leftArr.shift());
                } else if(rightArr[0] <= leftArr[0]) {
                    arr.push(rightArr.shift());
                }
            }
            // Concatenating the leftover elements
            return [ ...arr, ...leftArr, ...rightArr ];
        }
    },
    // heapRecursive:function(){

    // },  
    // intro:function(){

    // },
    // tim:function(){

    // },
    // tree:function(){

    // },
    // shell:function(){

    // },
    // bucket:function(){

    // },
    // radix:function(){

    // },
    // cube:function(){

    // }
}

require.main === module && obj.init();
module.exports = obj;