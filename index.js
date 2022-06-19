const myEach= (testArr, alert) => {
    Object.values(testArr).forEach(element => {
        alert(element)
    })
    return testArr

}
const myMap = (testArra, callbackfunc) => {
    const objValues = Object.values(testArra)
    return objValues.map(x => x * 3)
}
const myReduce = (collection, callback, acc) => {
    if (acc){
    const objValues = Object.values(collection)     
    let sum = objValues.reduce(function(previousValue, currentValue) {
        return previousValue + (currentValue * 3)
    },acc)
    return sum;
}else {
    const objValues = Object.values(collection)     
    let sum = objValues.reduce(function(previousValue, currentValue) {
        return previousValue + (currentValue * 3)
    })
    return sum;
}

}
function myFind(testArr, target){
    testArr = Object.values(testArr)
    for(let i = 0; i < testArr.length; i++)
    if (target(testArr[i])) return testArr[i]
    return undefined
}
const myFilter= (collection, predicate) => {
    const objValues = Object.values(collection)
   return objValues.filter(num => num > 10)

}
const mySize= (collection) =>{
    const objectValues = Object.values(collection)
    const newArray = new Set(objectValues)
    return newArray.size;
}
function myFirst(testArr, n) {
    let objValues = Object.values(testArr)
    if (n) {
        return objValues.slice(0, 3)
    }
    return objValues[0]
}
function myLast(testArr, n) {
    let objValues = Object.values(testArr)
    if (n) {
        return objValues.slice(-3)
    }
    return objValues[3]
}
const myKeys = (object) => {
    return Object.keys(object)
}
const myValues = (object) => {
    return Object.values(object)
}