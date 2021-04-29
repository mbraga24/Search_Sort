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
    binaryRecursive:function(){

    },
    binaryIterative:function(){

    },
    exponentialIterative:function(){

    },
    exponentialRecursive:function(){

    },
    linearRecursive:function(){

    },
    linearIterative:function(){

    },
    jumpIterative:function(){

    },
    interpolationIterative:function() {

    },
    interpolationRecursive:function() {

    }
}
require.main === module && obj.init();
module.exports = obj;