

console.log('hola')


var aa = new Date(2022,9,9).getTime();
var a = 604800000000000;
var b = new Date().getTime();
var c = a-b;
console.log(a)
console.log(b)
console.log(c)

var days = Math.floor(c / (1000 * 60 * 60 * 24));
var hours = Math.floor((c % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((c % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((c % (1000 * 60)) / 1000);
console.log(days)
console.log(hours)
console.log(minutes)
console.log(seconds)


/*
    document.getElementById("demo").innerHTML = "EXPIRED";

setInterval(() => {

    var f = c --;
    console.log(f)

    document.querySelector("#date").innerHTML= c
}, 1000);

setInterval(() => {

    let b = time.getDay(d)
    console.log(b)
    document.querySelector("#date").innerHTML= b
}, 1000);

setInterval(() => {
    counter--;
    console.log(counter)
    document.querySelector("#timer").innerHTML= counter
}, 1000);*/


