// https://www.geeksforgeeks.org/analysis-of-algorithms-set-4-analysis-of-loops/


function constantAlgoFunc(arr){ // O(1)
    console.log(arr[0]);
}
function logAlgoFunc(arr){ // O(log(n))
    for (let i=1;i<=arr.length-1; i*=2){
        console.log(arr[i]);
    }
}
function linearAlgoFunc(arr){ // O(n)
    for(let i=0;i<arr.length-1;i++){
        console.log(i);
    }
}
function nLogAlgoFunc(arr){ // O(n log(n))
    let n = arr.length;
    for (let i=1;i<=n;i++){
        for(let j=1;j<n;j*=2) {
            console.log(arr[i], arr[j]);
        }
    } 
}
function quadraticAlgoFunc(arr){ // O(n^2)
    let n = arr.length-1;
    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            console.log(i, j);
        }
    }
}
function exponentialAlgoFunc(arr){ // O(2^n)
    let n = arr.length-1;
    for (let i=0;i<Math.pow(2,n); i++){
        console.log(arr[i], arr[j]);
    }
}