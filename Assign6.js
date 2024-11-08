function perform()
{
let star1 = document.querySelector("#str1").value;
let star2 = document.querySelector("#str1").value;

star2 = star2.length;
star1 = star1.length;

let lengthSize = star1 + star2;
document.querySelector("#result").innerText=`Size of length : ${lengthSize}`;
}