module.exports = function reverse (n) {
   
  let str=String(Math.abs(n));
  let num=Number(str.split('').reverse().join(''));
return num;

}
