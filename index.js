const str1 = 'string'

// for(let i = str.length -1; i >= 0; i--){
//     console.log(str[i])
// }

// let strInvers = ''

// for(let i = 0; i < str.length; i++){
//     strInvers = strInvers + str[str.length - 1 - i]
// }

// console.log(strInvers)

// const result = str.split('').reverse().join('')

// console.log(result)

const polindrom = 'level' 

const checkPolindrom = (str) => {
    for(let i = 0; i < str.length/2; i++) {
        if(str[i] !== str[str.length - 1 - i]) return false
    }

    return true;
}

console.log(checkPolindrom(polindrom))



