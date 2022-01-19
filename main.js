let str = document.querySelector('.text').innerHTML;

str = str.replace(/\B'/g, '"');
document.querySelector('.text').innerHTML = str;
console.log(str);