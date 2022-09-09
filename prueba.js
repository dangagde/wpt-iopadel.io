
/*
const startTiming = 90
let time = startTiming*60

setInterval(UpdateTimer,1000)
function UpdateTimer(){

    const minutes = Math.floor((time/60)%60)
    let hours = Math.floor(((time/60/60)%60))
    let seconds = time%60
    console.log((time/60/60)%60)

    document.querySelector("#date").innerHTML= `${hours} : ${minutes} : ${seconds}` 
    time--
}*/
/*

setInterval(() => {

    const startTiming = 90
    let time = startTiming*60

    const a = new Date('9 9, 2022 16:40:00');
    var b = new Date();

    var days = a.getDate() - b.getDate();
    var hours = a.getHours()-b.getHours();
    var minutes = a.getMinutes()-b.getMinutes();
    var seconds = a.getSeconds()-b.getSeconds();
    if(hours<0){
        hours = hours + 24;
        days = days-1;
    }
    if(minutes<0){
        minutes = minutes + 60;
        hours = hours - 1;
    }
    if(seconds<0){
        minutes = minutes -1;
        seconds = seconds+60;
    }

    if(b>a){
        
        a.setHours(a.getHours()+1)
        a.setMinutes(a.getMinutes()+1)

        var days = a.getDate() - b.getDate();
        if(hours<0){
            hora = 24 + hours;
            days = days-1;
        }
        var hours = a.getHours()-b.getHours();
        var minutes = a.getMinutes()-b.getMinutes();
        if(minutes<0){
            minutes = minutes + 60;
            hours = hours - 1;
        }
        var seconds = a.getSeconds()-b.getSeconds();
        if(seconds<0){
            minutes = minutes -1;
            seconds = seconds+60;
        }

        m = 'partido';
    }else{
        
        console.log(a)
        m= days+'D : '+hora+'h : '+minutes+'min : '+seconds+'s'; 
    }
    document.querySelector("#date").innerHTML= m
    

}, 1000);*/


/*
setInterval(() => {

    const a = new Date('9 9, 2022 13:02:00');
    var b = new Date();

    var days = a.getDate() - b.getDate();
    var hours = a.getHours()-b.getHours();
    var minutes = a.getMinutes()-b.getMinutes();
    var seconds = a.getSeconds()-b.getSeconds();
    if(hours<0){
        hours = hours + 24;
        days = days-1;
    }
    if(minutes<0){
        minutes = minutes + 60;
        hours = hours - 1;
    }
    if(seconds<0){
        minutes = minutes -1;
        seconds = seconds+60;
    }
    if(b>a){
        a.setDate(a.getDate()+7)
        var days = a.getDate() - b.getDate();
        if(hours<0){
            hora = 24 + hours;
            days = days-1;
            console.log(hora)
        }
        var hours = a.getHours()-b.getHours();
        var minutes = a.getMinutes()-b.getMinutes();
        if(minutes<0){
            minutes = minutes + 60;
            hours = hours - 1;
        }
        var seconds = a.getSeconds()-b.getSeconds();
        if(seconds<0){
            minutes = minutes -1;
            seconds = seconds+60;
        }
        
        m= days+'D : '+hora+'h : '+minutes+'min : '+seconds+'s'; 
    }else{
        
        console.log(a)
        m= days+'D : '+hora+'h : '+minutes+'min : '+seconds+'s'; 
    }
    document.querySelector("#date").innerHTML= m
    

}, 1000);

*/

/*
m= 'La jornada actual finalizará en: '+'';

setInterval(() => {
    var t=time++;
    var h = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60 * 60));
    var m = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    var s = Math.floor((t % (1000 * 60)) / 1000);
    console.log(h+'; '+m+': '+s)
    
}, 1000);*/






setInterval(() => {
    var a = new Date('9, 9, 2022 14:26:00');
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
    }
    if(b>a){
        a.setHours(a.getHours()+1)
        a.setMinutes(a.getMinutes()+30)
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
            m= `La jornada actual finalizará en: <br><br> ${hours} : ${minutes} : ${seconds}`
        }else{
            a.setDate(a.getDate()+7)
            m= days+'D : '+hours+'h : '+minutes+'min : '+seconds+'s'
            console.log(a) 
            }
        }

    document.querySelector("#date").innerHTML= m

    
    
}, 1000);