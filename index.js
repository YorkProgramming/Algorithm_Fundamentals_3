// #1.

/* Biggie Size
Given an array, write a function that changes all positive numbers in the array to “big”. 
Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1,"big","big",-5]. */

function biggieSize(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            arr[i] = "big";
        }
    }
    return arr;
}

console.log(biggieSize([-1, 3, 5, -5]));

/* We iterate through the arrary by the length of the array
If the value of the index is >= 0 then that index is replaced by "big" */

//#############################################

// #2.

/* Print Low, Return High
Create a function that takes in an array of numbers.  The function should print the lowest value in the array,
and return the highest value in the array. */

function printLowReturnHigh(arr) {
    var low = arr[0];
    var high = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < low) {
            low = arr[i];
        }
        if (arr[i] > high) {
            high = arr[i];
        }
    }
    console.log(low);
    return high;
}

console.log(printLowReturnHigh([1, 2, 3, 4, 5]));

/* We create two variables, low and high, and set them equal to the first index of the array
We iterate through the array by the length of the array
If the value of the index is less than the value of low, then low is replaced by the value of the index
If the value of the index is greater than the value of high, then high is replaced by the value of the index
We print the value of low and return the value of high */

//#############################################

// #3.

/* Print One, Return Another
Build a function that takes in an array of numbers.  The function should print the second-to-last value in the array,
and return the first odd value in the array. */

function printOneReturnAnother(arr) {
    console.log(arr[arr.length - 2]);
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            return arr[i];
        }
    }
}

console.log(printOneReturnAnother([1, 2, 3, 4, 5]));

/* We print the second to last value in the array by using the length of the array - 2
We iterate through the array by the length of the array
If the value of the index is not divisible by 2, then we return the value of the index */

//#############################################

// #4.

/* Double Vision
Given an array (similar to saying ‘takes in an array’ or ‘given an array’) create a function that returns a new array
where each value in the original array has been doubled.  Calling double([1,2,3]) should return [2,4,6] without changing
the original array. */

function doubleVision(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr.push(arr[i] * 2);
    }
    return newArr;
}

console.log(doubleVision([1, 2, 3]));
console.log(doubleVision([4, 12, 28]));

/* We create a new array
We iterate through the array by the length of the array
We push the value of the index multiplied by 2 into the new array
We return the new array */

//#############################################

// #5.

/* Count Positives
Given an array of numbers, create a function to replace the last value with the number of positive values found in the
array.  Example, countPositives([-1,1,1,1]) changes the original array to [-1,1,1,3] and returns it. */

function countPositives(arr) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            count += 1;
        }
    }
    arr[arr.length - 1] = count;
    return arr;
}

console.log(countPositives([-1, 1, 1, 1]));

/* We create a variable called count and set it equal to 0
We iterate through the array by the length of the array
If the value of the index is greater than 0, then we add 1 to count
We set the last index of the array equal to count
We return the array */

//#############################################

// #6.

/* Evens and Odds
Create a function that accepts an array.  Every time that array has three odd values in a row, print “That’s odd!”
Every time the array has three evens in a row, print “Even more so!” */

function evensAndOdds(arr) {
    var oddCount = 0;
    var evenCount = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0 && arr[i + 1] % 2 !== 0 && arr[i + 2] % 2 !== 0) {
            console.log("That's odd!");
        }
        if (arr[i] % 2 === 0 && arr[i + 1] % 2 === 0 && arr[i + 2] % 2 === 0) {
            console.log("Even more so!");
            if (arr[i] % 2 === 0 && arr[i + 1] % 2 === 0 && arr[i + 3] % 2 === 0) {
                return "Even more so!";
            }
        }
    }
}

evensAndOdds([1, 3, 5, 2, 4, 6, 8, 10, 12, 14, 16]);

/* We create two variables, oddCount and evenCount, and set them equal to 0
We iterate through the array by the length of the array
If the value of the index is not divisible by 2 and the value of the index + 1 is not divisible by 2 and the value of the index + 2 is not divisible by 2, then we print "That's odd!"
If the value of the index is divisible by 2 and the value of the index + 1 is divisible by 2 and the value of the index + 2 is divisible by 2, then we print "Even more so!" */

//#############################################

// #7.

/* Increment the Seconds
Given an array of numbers arr, add 1 to every other element, specifically those whose index is odd (arr[1], arr[3],
arr[5], etc).  Afterward, console.log each array value and return arr. */

function incrementTheSeconds(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (i % 2 !== 0) {
            arr[i] += 1;
        }
        console.log(arr[i]);
    }
    return arr;
}

console.log(incrementTheSeconds([1, 2, 3, 4, 5]));

/* We iterate through the array by the length of the array
If the index is not divisible by 2, then we add 1 to the value of the index
We print the value of the index
We return the array */

//#############################################

// #8.

/* Previous Lengths
You are passed an array containing strings.  Working within that same array, replace each string with a number – the
length of the string at the previous array index – and return the array. */

function previousLengths(arr) {{
        for (var i = arr.length - 1; i > 0; i--) {
            arr[i] = arr[i - 1].length;
        }

    }
    return arr;
}

console.log(previousLengths(["hello", "dojo", "awesome"]));
console.log(previousLengths(["hello", "dojo", "awesome", "coding", "dojo"]));
console.log(previousLengths(["hello", "dojo", "awesome", "coding", "dojo", "dojo"]));
console.log(previousLengths(["hello", "dojo", "awesome", "coding", "dojo", "dojo", "dojo"]));


/* We iterate through the array by the length of the array
We set the value of the index equal to the length of the value of the index - 1
We return the array */

//#############################################

// #9.

/* Add Seven to Most
Build function that accepts array.  Return a new array with all values except first, adding 7 to each.  Do not alter the
original array. */

function addSevenToMost(arr) {
    var newArr = [];
    for (var i = 1; i < arr.length; i++) {
        newArr.push(arr[i] + 7);
    }
    return newArr;
}

console.log(addSevenToMost([1, 2, 3, 4, 5]));

/* We create a new array
We iterate through the array by the length of the array starting at index 1
We push the value of the index + 7 into the new array
We return the new array */

//#############################################

// #10.

/* Reverse Array
Given an array, write a function that reverses values, in-place.  Example: reverse([3,1,6,4,2]) returns the same array,
but now contains values reversed like so… [2,4,6,1,3].  Do this without creating an empty temporary array.  (Hint: you’ll
need to swap values). */

function reverseArray(arr) {
    var temp = 0;
    for (var i = 0; i < arr.length / 2; i++) {
        temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - i - 1] = temp;
    }
    return arr;
}

console.log(reverseArray([3, 1, 6, 4, 2]));

/* We create a variable called temp and set it equal to 0
We iterate through the array by the length of the array divided by 2
We set temp equal to the value of the index
We set the value of the index equal to the value of the array length - 1 - i
We set the value of the array length - i - 1 equal to temp
We return the array */

//#############################################

// #11.

/* Outlook: Negative
Given an array, create and return a new one containing all the values of the provided array, made negative 
(not simply multiplied by -1).  Given [1,-3,5], return [-1,-3,-5]. */

function outlookNegative(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            newArr.push(arr[i] * -1);
        } else {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(outlookNegative([1, -3, 5]));

/* We create a new array
We iterate through the array by the length of the array
If the value of the index is greater than 0, then we push the value of the index * -1 into the new array
If the value of the index is less than 0, then we push the value of the index into the new array
We return the new array */

//#############################################

// #12.

/* Always Hungry
Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food".
If no array elements are "food", then print "I'm hungry" once. */

function alwaysHungry(arr) {
    var foodCount = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === "food") {
            console.log("yummy");
            foodCount++;
        }
    }
    if (foodCount === 0) {
        console.log("I'm hungry");
    }
}

console.log(alwaysHungry(["food", "food", "food", "food", "food", "food", "food", "food", ]));
console.log(alwaysHungry(["FULL", "FULL", "FULL", "FULL", "FULL", "FULL", "FULL", "FULL", ]));


/* We create a variable called foodCount and set it equal to 0  
We iterate through the array by the length of the array
If the value of the index is equal to "food", then we print "yummy" and increment foodCount by 1
If foodCount is equal to 0, then we print "I'm hungry" */

//#############################################

// #13.

/* Swap Toward the Center
Given array, swap first and last, third and third-to-last, etc.  Input[true,42,"Ada",2,"pizza"] becomes
["pizza",42,"Ada",2,true].  Change [1,2,3,4,5,6] to [6,2,4,3,5,1]. */

function swapTowardTheCenter(arr) {
    var temp = 0;
    for (var i = 0; i < arr.length / 2; i += 2) {
        temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - i - 1] = temp;
    }
    return arr;
}

console.log(swapTowardTheCenter([true, 42, "Ada", 2, "pizza"]));
console.log(swapTowardTheCenter([1, 2, 3, 4, 5, 6]));

/* We create a variable called temp and set it equal to 0
We iterate through the array by the length of the array divided by 2
We increment i by 2
We set temp equal to the value of the index
We set the value of the index equal to the value of the array length - 1 - i
We set the value of the array length - i - 1 equal to temp
We return the array */

//#############################################

// #14.

/* Scale the Array
Given an array arr and a number num, multiply all values in the array arr by the number num, and return the
changed array arr.  For example, scaleArray([1,2,3],3) should return [3,6,9]. */    

function scaleTheArray(arr, num) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] *= num;
    }
    return arr;
}

console.log(scaleTheArray([1, 2, 3], 3));   

/* We iterate through the array by the length of the array
We set the value of the index equal to the value of the index * num
We return the array */

//#############################################