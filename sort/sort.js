let obj = {
    unSortedArr:[3,2,50,9,2,4,10,44,663,32,100],
    init:function(){
        var terminalArgs = process.argv.slice(2);
        let alg;
        switch(terminalArgs[0]){
            case "bi":
                alg = "bubbleIterative";
                break;
            case "ii": 
                alg = "insertionIterative";
                break;
            case "si": 
                alg = "selectionIterative";
                break;
            case "bii": 
                alg = "binaryInsertionIterative";
                break;
            case "qr": 
                alg = "quickRecursive";
                break;
            case "mi": 
                alg = "mergeIterative";
                break;
            default:
                console.log(
                    `Please provide an abbreviation as a terminal argument: 
                    (bi) - Bubble Iterative
                    (ii) - Insertion Iterative
                    (si) - Selection Iterative
                    (bii) - Binary Insertion Iterative
                    (qr) - Quick Recursive
                    (mr) - Merge Recursive`
                )
                return;
        }
        let result = this[alg](this.unSortedArr);
        console.log(result);
    },
    bubbleIterative:function(){

    },
    insertionIterative:function(){

    },
    selectionIterative:function(){

    },
    binaryInsertionIterative:function(){   

    }, 
    quickRecursive:function(){

    },
    mergeIterative:function(){

    }
}

require.main === module && obj.init();
module.exports = obj;