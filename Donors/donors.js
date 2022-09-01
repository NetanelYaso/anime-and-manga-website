const USERS_API = "https://my-json-server.typicode.com/Jeck99/fake-server/users";

async function getUsers() {
    loader.innerHTML = `<img width ='150' id ="loading_gif" src='https://thilaldavid.com/wp-content/uploads/2021/10/loading-1.gif'>`
    try {
        return await fetch(USERS_API)
            .then(res => res.json())
    }
    catch (error) {
        console.log("error");
    }
    finally {
        loader.innerHTML = ``
    }
}

getUsers().then(response => console.log(response))

const usersArray = [
    "https://m.media-amazon.com/images/M/MV5BMTY4OTAxMjkxN15BMl5BanBnXkFtZTgwODg5MzYyMTE@._V1_UY1200_CR84,0,630,1200_AL_.jpg",
    "https://hips.hearstapps.com/hmg-prod/images/prince-harry-duke-of-sussex-visits-croke-park-home-of-news-photo-1658937573.jpg",
    "https://resizing.flixster.com/zopIntvwKGW7Q2i_JkdiF1DhCJM=/218x280/v2/https://flxt.tmsimg.com/assets/235135_v9_bb.jpg",
    "https://www.rollingstone.com/wp-content/uploads/2018/06/rs-3885-rectangle.jpg?resize=1800,1200&w=1800",
    "https://data.mothership.tools/mothershiptools-ukprod/wp-content/uploads/2018/11/chris-brown-square.jpg",
    "https://www.nme.com/wp-content/uploads/2022/02/rihanna-2000x1270-1.jpg",
    "https://imagez.tmz.com/image/72/4by3/2020/02/19/724de2994aaa45848243f45c900b8e4e_xl.jpg",
    "https://cdn.britannica.com/92/211792-050-E764F875/American-singer-Ariana-Grande-2018.jpg",
    "https://media1.popsugar-assets.com/files/thumbor/zan-t_Me63if8oqWYE9ENiPLlhA/0x224:2826x3050/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2020/02/11/894/n/1922398/87f6bb525e430e7bd44e40.22278576_/i/Drake.jpg",
    "https://www.biography.com/.image/t_share/MTM2OTI2NTY2Mjg5NTE2MTI5/justin_bieber_2015_photo_courtesy_dfree_shutterstock_348418241_croppedjpg.jpg",
]

const namesArray = [
    "Kevin Hart",
    "Prince Harry",
    "Dwein Jonson(The Rock)",
    "Beyonce",
    "Rihhana",
    "Pop Smoke",
    "Drake",
    "Jusin Biber",

]
let counter1 = 0;
let counter2 = 0
function printUsers() {
    getUsers().then(res => {
        res.forEach(user => {
            usersDiv.innerHTML += `
            <div class="card col-4" style="width: 18rem;">
            <img src="${usersArray[counter1++]}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${namesArray[counter2++]}</h5>
                    <p class="card-text">Age: ${user.age}</p>
                    <p class="card-text">Email: ${user.email}</p>
                    <p class="card-text">Phone Number: ${user.phone}</p>
                </div>
            </div>
            `
        })
    })
}

printUsers();