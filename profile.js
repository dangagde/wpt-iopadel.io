const jugadores = [

    {
        name:"Dani",
        ranking:"0",
        country: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Flag_of_Spain_(Civil).svg/2560px-Flag_of_Spain_(Civil).svg.png",
        profile: "img/dani.jpeg",
        points: 3,
        match: 6,


    },

    {
        name:"enrique",
        ranking:"0",
        country: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Flag_of_Spain_(Civil).svg/2560px-Flag_of_Spain_(Civil).svg.png",
        profile: "img/enrique-jeque.jpeg",
        points: 4,
        match: 6,

    },

    {
        name:"Manolo",
        ranking:"0",
        country: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Flag_of_Spain_(Civil).svg/2560px-Flag_of_Spain_(Civil).svg.png",
        profile: "data:image/jpeg;base64,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",
        points: 2,
        match: 6,
 
    },

    {
        name:"pepote",
        ranking:"0",
        country: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Flag_of_Spain_(Civil).svg/2560px-Flag_of_Spain_(Civil).svg.png",
        profile: "data:image/jpeg;base64,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",
        points: 1,
        match: 6,

    },

    {
        name:"marco",
        ranking:"0",
        country: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Flag_of_Spain_(Civil).svg/2560px-Flag_of_Spain_(Civil).svg.png",
        profile: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAFwAXAMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAABwEGAwQFCAL/xAA7EAACAQQAAwUEBggHAAAAAAABAgMABAURBhIhEzFBUXEHImGBCBQykqGxFSMzQoKR0eElVGJyssHw/8QAGQEBAAMBAQAAAAAAAAAAAAAAAAECBAMF/8QAHhEAAgMBAQADAQAAAAAAAAAAAAECAxESITFRwUH/2gAMAwEAAhEDEQA/AHhU1FFAFFFUf2ucV3XC3DSSY1gl9dzdjFIVB7MaJZgD03oaHxNAd3iPijFcOogv5+a4lBMNrEOaWX0Xy+J0B4mq/dcX5yztY8pJjMdLYyn3LeK8InA/3EcjN5gaA7tnvpV4L63c4N8vcZS0t5pbh2nvb5O1dz0Gtn0HTr8NePSn41xaY6PHz56eSSNOlza2gG3J6n7PxOx4661wm7G1x8f02Qpr5Tn+IavD/HuAzjpBHdNaXjHQtL1eykJ8hvo3yJq0V5c4onsL7E49rbLrk5YnaOQtF2T8pGwSngOn96eXsnzM+a4LtJbyQyXNuzQSOx2W5T7pPx5dV1T0z2QUX4XKoooqxzJqNUUUAUVNFARSl+kRaySYHEXKAlI7wo2vNkOv+NNs0qvbtYfXrfBo1zMim4kHZKfcY8hOz/q6aHwJo3npKWvBM4+0jllWGRDcSLsBSxKJ17h/7+tWaHhhGiB+qxA66/qhXNxuKSzcES3byIdv2S6jU+RPjVy+vCTGGJoyDrXfWWcn9m6EFnwUDLYdbaUgxrE4HutF0/Du/L1pl+wPiK3R7zh642t28jXER/dkAVQQPIjW/n8Kqf6JVt8+PDRk/tFmPN66+FWT2fyW+H43gkeBOzntDCZuTZDl15evhvZ38vKrxsx42cp1NrUh40UUV3MoVFTUUAUVNFARS69rtuXGKuGJ7OKRyBzHXNoddefKXpjVx+KcImexTWhZUkDc8bsNhW7vyJqs1qwvXJRkmxRLCOw2Na1v1rWQxJavuUiQPrQXYA+PwokilQzY95ik0TNE514qdH8q2sXb2aWq/WjcpLobjjhXW9eBJ6isaW+M9KL+jLbrDLErkgHuOjsbra4VtEvOIY0I2IpY+mu/qWP8tCuYtp2M00+igcgIh1vXmddN1ePZXZwyQX9+YwZRcdkrnw0oJ196ojDqeFbLOI6X+ipqK3nmBRU0UBFFFTQBUUMQoJJAA8TVQ4m9pHDPDyOs1+l1dDera0YSPvyOui/M0BRvazE+I4lGQgj/AFN1CryADucHRPzAFV2PiXGTQgzTdny6IUHR3WriMzc8VZTKXuUkLSXEoZYydrEmjyqvwHd+NbUGAshO6XVspI+yQveKyT57em6rrhYYbniB8jLHHYx8yA/tG8/Om17LOSDDz2/aAv23Pon3jsDZ18qomPw8COW7NVRe4AaricczRWYtbmJ2hv4X57WaJtMmu8j8KpCSViwWR2D1no2opacF+1zE5aO3s82xsL8ooaaTQgkfXXTb93fkdeWzTJjdZEDxsGRhsMp2CK3GE+6iipoDRzOVssJjZsjk51gtYBt5CCdddAADqSSQNUnc77dJ2kmiwGIjWMHUdzduSSPPsxrX3j/1XT+kPljDhsZiY30bqYzSAeKoBoH+Jgf4aRgA5d1OA6fEnFuf4jf/ABfJTTx94hB5Ih/AOn864KaV1J6LvrVww/BE2U4b/TZvUiSS6S2iiEZc7aRULN5AbPQbrW4i4QmwNgl5Newyq78ioInVifn8OtThGnKxN/Nh8ikqE6B06j95abmPmS/t0u7Z1dNeHWko8jFFXp06A+OvKtzD5PIY2VzY3BQEbdWPutXG2rv1Haq3jxjkyGRgx1iZ7mQKPAeJ+FKvMXs2cyLTTHlVugXwRB4Vy7zIZDJTB7q5eRgdrs9F9B4Vs2yyKjc7KebyHWohWoev5Jss78RiI5iemgfCunhs1lsI4fEZG5tNdeWKQhD6r9k/MUWGKvck0wsLWScwxtLJyD7KKNk/2761CuhVio1uG/bTdQah4jsBcr/mLTSuPVCdH1BHpTY4e4ixvEWNTIYyfnhZipDjlZWHeCD3H+teUFYb6ju61KXUig8juo3v3WIqVpR4Xv6Q0srcY2kbfs48ehT5u+/yFLNX36apkfSEctxpCp7lx8WvvSUsYj4V0RUteN40ubDhZsElpEyi4WeOZm3rThirLrqOnmK5eaz1/mzH9eePkiJKRxRhVXf4nuHfXMAFZURTQGLl3WSKBXVyza13DXfWdY18qyJAhUHqD8DQGGJQnrW5CyhlLrzKCNrvWx5brX5QD4msgOhVWiyYycH7Qcdi7aK2tsZPaRIQQsRSQbAIBOwCTonZ6kg6O+hFFy62K3sv6LeR7Q9U7ROQrvvXXkO75VpcxqSSVquE6YOcLzelfMJ2grBcMecDwr7hJES+lWKn/9k=",
        points: 4,
        match: 6,

    },

    {
        name:"tomas",
        ranking:"0",
        country: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Flag_of_Spain_(Civil).svg/2560px-Flag_of_Spain_(Civil).svg.png",
        profile: "data:image/jpeg;base64,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",
        points: 1,
        match: 3,

    },

    {
        name:"metralla",
        ranking:"0",
        country: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Flag_of_Spain_(Civil).svg/2560px-Flag_of_Spain_(Civil).svg.png",
        profile: "img/foto_curriculum.jpeg",
        points: 1,
        match: 6,
 
    },

    {
        name:"ezequiel",
        ranking:"0",
        country: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Flag_of_Spain_(Civil).svg/2560px-Flag_of_Spain_(Civil).svg.png",
        profile: "data:image/jpeg;base64,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",
        points: 6,
        match: 6,
 
    }



];

const suplentes = [

    {
        name:"j.diego",
        ranking: "0",
        country: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Flag_of_Spain_(Civil).svg/2560px-Flag_of_Spain_(Civil).svg.png",
        profile: "data:image/jpeg;base64,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",
        points: 0
    },

    {
        name:"jorge",
        ranking: "0" ,
        country: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Flag_of_Spain_(Civil).svg/2560px-Flag_of_Spain_(Civil).svg.png",
        profile: "data:image/jpeg;base64,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",
        points: 2
    }

];




let players = jugadores.sort((a,b) => {return b.points - a.points;});
let suplente = suplentes.sort((a,b) => {return b.points - a.points;});


const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const player = urlParams.get('id')


var mess= document.getElementById('prueba');
console.log(jugadores[player]);




function playerTemplate(p){
    return `

    <div class="block-profile">
    <div class="block-profile-up">
        <div class="profile-name">
            <h3>${p.name}</h3>
        </div>
        <div class="name-ranking-profile">
            <h5>Puesto</h5>
            <h5>Puntos</h5>
        </div>
        <div class="name-ranking-profile">
            <h3>${players.findIndex(x => x.name == p.name)+1}</h3>
            <img class="profile-img" src=${p.profile}>
            <h3>${p.points}</h3>

        </div>
        

    </div>

    <div class="block-profile-down">
        <div class="block-player-stats">
            <ul class="player-stats">
                <li>
                    <span>Partidos jugados</span>
                    <span>${p.match}</span>
                </li>
                <li>
                    <span>Partidos ganados</span>
                    <span>${p.points}</span>
                </li>
                <li>
                    <span>Partidos perdidos</span>
                    <span>${p.match-p.points}</span>
                </li>
                <li>
                    <span>Efectividad</span>
                    <span>${((p.points*100)/p.match).toFixed(2)}</span>
                </li>
            </ul>
        </div>                 
        
    </div>


    `
}
document.getElementById("prueba").innerHTML=`
${(playerTemplate(players[player]))}`






































