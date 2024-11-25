// Find the Largest element in an array

/*
Example 1:
Input:
 arr[] = {2,5,1,3,0};
Output:
 5
Explanation:
 5 is the largest element in the array. 

Example2:
Input:
 arr[] = {8,10,5,7,9};
Output:
 10
Explanation:
 10 is the largest element in the array. 
*/

function sortArr(arr) {
    arr.sort((a, b) => a - b);
    return arr[arr.length - 1];
  }
const arr1 = [2,5,1,3,0];

console.log("the largest number of array is " + sortArr(arr1) )
