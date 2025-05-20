function addNums(num1, num2){
    return num1 + num2
}
function subtractNums(num1, num2){
    return num1 - num2
}
function isNums(num){
    return Boolean(parseInt(num))
}
function multiplyNums(num1, num2){
    return num1 * num2
}

module.exports = {
    addNums,
    subtractNums,
    isNums,
    multiplyNums
}
