// const Arcade_Alien = `https://rickandmortyapi.com/api/character/23`;
// async function getRickAndMorty() {
//     try {
//         return await fetch(Arcade_Alien)
//             .then(res => res.json());
//     } catch (error) {
//         console.log("err");
//     }
//     finally { }
// }

// getRickAndMorty().then(response => console.log(response));

// function printToScreen() {
//     getRickAndMorty()
//         .then(res =>
//             rick_And_Morty_Div.innerHTML = `
//             <div class="card" style="width: 18rem;">
//             <img src="https://rickandmortyapi.com/api/character/avatar/23.jpeg" class="card-img-top" alt="...">
//             <div class="card-body">
//             <h5 class="card-title">${res.name}</h5>
//             <p class="card-text">${res.id}</p>
//             <p class="card-text">${res.gender}</p>
//             <p class="card-text">${res.species}</p>
//             <p class="card-text">${res.location.name}</p>
//             <p class="card-text">${res.status}</p>
//             </div>
//           </div>
//             `
//         );
// }
// printToScreen();
const mangaImageArray = [
    "https://qph.cf2.quoracdn.net/main-qimg-60611a407ced0479a2096a6cfac8fbfa-pjlq",
    "http://s1.narvii.com/image/ai3ot4uvv4253rwzac6tac3medltnyd3_00.jpg",
    "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/cd25de10e2f7c588f0abaa3d51ab25d2~c5_720x720.jpeg?x-expires=1659279600&x-signature=AVWQwda0MGpGPF4oYazLJ7B8rPQ%3D",
    "https://i.pinimg.com/736x/ef/c9/bf/efc9bf0457eec6121dbe6cd311953c6d.jpg",
    "https://static.wikia.nocookie.net/berserk/images/a/aa/TCG_Isidro.png/revision/latest?cb=20171017224222",
    "https://64.media.tumblr.com/389005b087395de07f52c81e7295be57/0bfba91f14515379-57/s500x750/01a31d020f93d3a820fc1d1617fa0cebfb6d3ec8.png",
    "https://cdn.myanimelist.net/images/characters/14/260687.jpg",
    "https://pbs.twimg.com/media/DzR0WKzW0AAXeT_.jpg",
    "https://cdn.myanimelist.net/images/characters/4/319066.jpg",
    "https://i.pinimg.com/originals/ae/30/50/ae30501433dcf2af07172dedeb442251.png",
    "https://image.myanimelist.net/ui/NMhxKjGdQ21NnPG4rzwny4VxGvmWFFDMttepC8AUVEwDCA0g9nNfwQB7fh44DidN",
];
let counter = 0;
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '6fbf725860msh864ad3405b51ab0p182dfcjsn21c057c83c4d',
        'X-RapidAPI-Host': 'jikan1.p.rapidapi.com'
    }
};

async function getManga() {
    try {
        loader.innerHTML = `<img id ="loading_gif" src='https://thilaldavid.com/wp-content/uploads/2021/10/loading-1.gif'>`;
        // return await fetch('https://jikan1.p.rapidapi.com/manga/2/characters', options)
        //     .then(response => response.json())
    }
    catch (error) {
        console.log("err");
    }
    finally{
        loader.innerHTML = ``;

    }
}
getManga().then(response => console.log(response))

function printMaga() {
    getManga()
        .then(res => {
            res.characters.forEach((element) => {
                manga_div.innerHTML += `
                <div class="card" style="width: 18rem;">
                    <img src="${mangaImageArray[counter++]}" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">${element.name}</h5>
                        <p class="card-text">${element.mal_id}</p>
                        <p class="card-text">${element.role}</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                    `
                    if(counter==10){
                        counter=0;
                    }
            })
        })
}
printMaga()
