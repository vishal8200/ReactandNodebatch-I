//1.
const factorial = (...nums) =>{
    return nums.reduce((fact,num) => fact*num,1);
}
console.log(factorial(1,2,3,4,5));


//2.
const maximum = (...nums) =>{
    return nums.reduce((maxi,num) => (num>maxi ? num:maxi),0);
}
maximum(18,25,35,45,20);