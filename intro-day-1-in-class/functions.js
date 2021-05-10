const returnEmptyString = function () {
    return ''
};

const returnZeroNumber = function () {
    return 0
};

const returnEmptyArray = function () {
    return []
};

const returnEmptyObject = function () {
    return {}};

const returnAbcString = function (value) {
    return value
};

const returnSumOfTen = function (arg1, arg2) {
    return arg1+arg2
};

const subtraction = function (arg1, arg2) {
    return arg1-arg2
};

const multiplication = function (arg1, arg2) {
    return arg1*arg2
};

const division = function (arg1, arg2) {
    return arg1/arg2
};

const returnArray = function (arg1) {
    return arg1
};

const returnFirstIndex = function (arg1) {
    return arg1[0]
};

const returnSecondIndex = function (arg1) {
    return arg1[1]

};

const returnArrayLength = function (arg1) {
    return arg1.length
};

const arraySum = function (arg1) {
    let sum=0
    for (const num of arg1){
        sum+=num
    }
    return sum
};

const arraySubtraction = function (arg1) {
    let sub=0
    for (const num of arg1){
        sub-=num
    }
    return sub
};

const multiplicationArray = function (arg1) {
    let mul=1
    for (const num of arg1){
        mul*=num
    }
    return mul
};

const divisionArray = function (arg1) {
    let div=1
    for (const num of arg1){
        div/= parseInt(num)
    }
    return +div.toFixed(3)
};

const oddArray = function (arg1) {
    let arr=[]
    for (const num of arg1){
        if (num%2===1){
            arr.push(num)
        }
    }
    return arr
};

const evenArray = function (arg1) {
    let arr=[]
    for (const num of arg1){
        if (num%2===0){
            arr.push(num)
        }
    }
    return arr
};

const returnFruits = function (arg1) {
    let arr=[]
    for (const item of arg1){
        if(item==="apple" || item==="orange"){
            arr.push(item)
        }
    }
    return arr
};
