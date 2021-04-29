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
        // Iterate through the array
        // Create a boolean flag to determine if a swap happened
        // Start an inside iteration
        // Check if the current value is greater than next value
        // Swap values in array
        // Set swap variable to true
        // If there's no swap, the arr is fully sorted and can exit there, we break.
    },
    insertionIterative:function(arr){
        // Iterate through the array --Boundary
        // Set a variable to the current value of the iteration
        // Run only if j is greater than or equal to 0 and the value of index position j 
        // is greater than the current value of the iteration
        // Set the value of j+1 to the current value of index position j
        // Set the value of j+1 to the current value of the iteration
    },
    selectionIterative:function(arr){
        // Iterate through the array --Boundary
        // Set placeholder value to of minIndex
        // Iterate through the right of the boundary
        // if the value of postion j is less than the minIndex
        // Reassign the minIndex with j
        // Swap the value at index position i and the value at the minIndex
    },
    binaryInsertionIterative:function(arr){    

    }, 
    quickRecursive:function(arr, low=0, high=arr.length-1){

    },
    mergeRecursive:function(arr){

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