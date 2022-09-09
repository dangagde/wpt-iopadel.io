
setInterval(() => {

    const a = new Date('9 9, 2022 03:09:00');
    var b = new Date();

    var days = a.getDate() - b.getDate();
    var hours = a.getHours()-b.getHours();
    var minutes = a.getMinutes()-b.getMinutes();
    var seconds = a.getSeconds()-b.getSeconds();
    if(minutes<0){
        minutes = minutes + 60;
        hours = hours - 1;
    }
    if(seconds<0){
        minutes = minutes -1;
        seconds = seconds+60;
    }
    if(b<a){
        m= days+'D : '+hours+'h : '+minutes+'min : '+seconds+'s'; 
    }else{
        a.setDate(a.getDate()+7)
        console.log(a)
        m= days+'D : '+hours+'h : '+minutes+'min : '+seconds+'s'; 
    }
    document.querySelector("#date").innerHTML= m
    

}, 1000);


/*
m= 'La jornada actual finalizará en: '+'';

setInterval(() => {
    var t=time++;
    var h = Math.floor((t / (1000 * 60 * 60)) % 24);
    var m = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    var s = Math.floor((t % (1000 * 60)) / 1000);
    console.log(h+'; '+m+': '+s)
    
}, 1000);*/