// const arr = [6, 1,2,3,4,5]

// const result = arr.map((item) => {
//     return item + 1;
// }).map((item) => item * 2)
// .map((item) => item - 2)
// .map((item) => item / 3)
// .map((item) => Math.floor(item))
// .filter((item) => item >= 2)
// .filter((item) => item < 3)

// console.log(result)

// console.log(arr.map((item, index) => { 
//     return item + 1 
// }))

// const result = arr.sort((a, b) => a - b).sort((a, b) => b - a)

// console.log(result)

// const arr1 = ['st', 'str', 'str', 'sssssssssssss']

// const result = arr1.map((item, index) => item + index)
// .map((item) => item.slice(1))
// .filter((item) => item.length > 2)
// .filter((item) => item.length < 10)

// console.log(result)

// const arr = ['tr1', 'str2', 'str3', 'str1111111111111111114']

// const result = arr.reduce((acc, curr, index) => {
//     if(curr.length > 3 && curr.length < 10) acc.push(curr.slice(1) + index) 
    
//     return acc;
// }, [])

// console.log(result)

// const arr = [1,2,3,4,5,6]

// const arr = ['tr1', 'str2', 'str3', 'str1111111111111111114']




// const sum = arr.reduce((acc, curr, idx) => {
//     if( idx < 2) return acc.length + curr.length
   
//     return acc
// })

// console.log(sum)

// const arr = [1,2,3,7,4,5,6]

// const biggest = arr.reduce((acc, curr) => {
    
//     return acc > curr  ? acc : curr;
// })

// const arr = ['tr1', 'str2', 'axstr3', 'str1111111111111111114' , 'axstr3']

// const biggest = arr.reduce((acc, curr) => {
    
//     return acc.length > curr.length  ? acc : curr;
// })

// arr.forEach(item => console.log(item))

const arr = [1,2,3,7,4,5,6]

// const findItem = (list, item) => {
//     return list.some((listItem) => listItem === item )
// }

// const findItem = (list, item) => {
//     return !!list.find((listItem) => listItem === item )
// }

const findItem = (list, item) => {
    return list.filter((listItem) => listItem === item).length > 0
}


console.log(findItem(arr, 3))
console.log(findItem(arr, 10))





