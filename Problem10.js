// 10. Write a JavaScript program to extract values at specified indexes from a specified array.

// let arra1 = ['a', 'b', 'c', 'd', 'e', 'f'];
// console.log(pull_at_Index(arra1, [1, 3]));
// let arra2 =  [1, 2, 3, 4, 5, 6, 7];
// console.log(pull_at_Index(arra2, [4]));

// Output : 

// ["b","d"]
// [5]

let arr1 = ['a', 'b', 'c', 'd', 'e', 'f'];
let pull_at_Index = (arr, index) => {
    let arr2 = [1];
    for (const key in arr) {
        if (index === key) {
            arr2.push("2")
        }
    }
    console.log(arr2);
}

pull_at_Index(arr1, 3)