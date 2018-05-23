// Sigma - Implement function sigma(num) that given a number, returns the sum of all positive integers up to number (inclusive).  Ex: sigma(3) = 6 (or 1+2+3); sigma(5) = 15 (or 1+2+3+4+5).

function sigma(arr){
    var sum = 0;
    for(var i = arr; i > 0; i--){
        sum = sum+i;
    }
    console.log(sum);
}

sigma(5);

// Factorial - Write a function factorial(num) that, given a number, returns the product (multiplication) of all positive integers from 1 up to number (inclusive).  For example, factorial(3) = 6 (or 1*2*3); factorial(5) = 120 (or 1*2*3*4*5).

function factorial(num){
    var sum = 1;
    for(var i = num; i > 0; i--){
        sum = sum*i;
    }
    console.log(sum);
}

factorial(5);


// Fibonacci - Create a function to generate Fibonacci numbers.  In this famous mathematical sequence, each number is the sum of the previous two, starting with values 0 and 1.  Your function should accept one argument, an index into the sequence (where 0 corresponds to the initial value, 4 corresponds to the value four later, etc).  Examples: fibonacci(0) = 0 (given), fibonacci(1) = 1 (given), fibonacci(2) = 1 (fib(0)+fib(1), or 0+1), fibonacci(3) = 2 (fib(1) + fib(2)3, or 1+1), fibonacci(4) = 3 (1+2), fibonacci(5) = 5 (2+3), fibonacci(6) = 8 (3+5), fibonacci(7) = 13 (5+8).  Do this without using recursion first.  If you don't know what a recursion is yet, don't worry as we'll be introducing this concept in Part 2 of this assignment.




console.log("not finished");

// Array: Second-to-Last: Return the second-to-last element of an array. Given [42, true, 4, "Liam", 7], return "Liam".  If array is too short, return null.

function sec2Last(arr){
    if(arr.length < 2){
        return "null";
    }
    else {
        return arr[arr.length-2];
    }
}

console.log(sec2Last([42,true,4,"liam",7]));
console.log(sec2Last([42]));

// Array: Nth-to-Last: Return the element that is N-from-array's-end.  Given ([5,2,3,6,4,9,7],3), return 4.  If the array is too short, return null.

function nthLast(arr,x){
    if(arr.length < x){
        return "null";
    }
    else {
        return arr[arr.length-x];
    }
}

console.log(nthLast([5,2,3,6,4,9,7],3));
console.log(nthLast([5,2],3));


// Array: Second-Largest: Return the second-largest element of an array. Given [42,1,4,3.14,7], return 7.  If the array is too short, return null.

function secondBiggest(arr){

if(arr.length < 2){
return "null";
}
if(arr.length === 2){
    if(arr[0]>arr[1]){
        console.log(arr[1]);
        return;
    }
    if(arr[1]>arr[0]){
        console.log(arr[0]);
        return;
    }
    else(console.log("Array has two indexes, both are the same value"))
    return;
}
if(arr.length > 2){
    var max = arr[0];
    var sec = arr[0];
    for(var i = 0; i < arr.length; i++){
        // if(arr[0] < max && arr[0] > sec){
        //     sec = arr[0];
        // }
        if(arr[i] > max && arr[i] != sec){
            sec = max;
            max = arr[i];
            // sec = arr[arr.length-1];
        }
        console.log("t");
        if(arr[i] < max && arr[i] < sec  && arr[0] > arr[i]){ 
            console.log("q");
            sec = arr[i]; 
        }
    }   
   
    console.log(max);
    console.log("make it another for loop, max AND min, you big dummy");
}
}


secondBiggest([12,11,10]);
    
    // Double Trouble: Create a function that changes a given array to list each existing element twice, retaining original order.  Convert [4, "Ulysses", 42, false] to [4,4, "Ulysses", "Ulysses", 42, 42, false, false].
    function doubleTrouble(arr){
        var q = arr.length;
        for(var i = q-1; i >= 0; i--){
            arr[i*2] = arr[i];
            arr[i*2+1] = arr[i];
        }
   console.log(arr);
}

doubleTrouble([4, "Ulysses", 42, false]);