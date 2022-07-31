const animeImages = [
    "https://image.api.playstation.com/vulcan/ap/rnd/202106/1704/JzL1NLQvok7Pghe9W5PP2XNV.png",
    "https://cdn.myanimelist.net/images/anime/1160/122627.jpg",
    "https://pictures.betaseries.com/fonds/poster/825cf977639e529842dd9235d0b03157.jpg",
    "https://m.media-amazon.com/images/M/MV5BNTM4MzMxMWItYzc3NC00ODY0LTg0M2MtYjg4NDg0ZjM0MjdiXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg",
    "https://cdn.myanimelist.net/images/anime/1085/114792.jpg",
    "https://m.media-amazon.com/images/I/91AeOoGHOiL._SL1500_.jpg",
    "https://otakukart.com/wp-content/uploads/2021/08/Mo-Dao-Zu-Shi-Season-3-feature.jpg",
    "https://m.media-amazon.com/images/M/MV5BNGY4MTg3NzgtMmFkZi00NTg5LWExMmEtMWI3YzI1ODdmMWQ1XkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_.jpg",
    "https://pbs.twimg.com/media/Es7IpxxW4AI81bx.jpg:large",
    "https://demonslayer-anime.com/mugentrainarc/assets/img/kv.jpg",
    "https://www.denofgeek.com/wp-content/uploads/2020/09/Attack-on-Titan-Season-4-Poster.jpg?resize=725,1024",
    "https://i.pinimg.com/originals/47/2e/92/472e9277dae8a2750e32f493c0f08246.jpg",
    "https://image.tmdb.org/t/p/w500/3TUUTiiuvjKg8BcnrGbuuj2Ov5L.jpg",
    "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/6d86892597ad4992fafaf8e4f40ade38186a4508252de505ce20821a8ea09ffd._RI_V_TTW_.jpg",
    "https://occ-0-987-2186.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABYrXd8s6AwnptFZc_Racp5_-OCik1K3pe8pCFqMgbk57q-H4iDLCTIDh-5-nYHH0hyXifg3hTcvmQzrKgj23Gopho8ThQROmBnOL.jpg?r=c90",
    "https://static.bunnycdn.ru/i/cache/images/8/88/88598cb8a8d2abb0d4d59faaf23350ee.jpg",
    "https://i0.wp.com/www.monstersandcritics.com/wp-content/uploads/2020/05/Demon-Slayer-Season-3-How-the-Kimetsu-no-Yaiba-mangas-ending-affects-the-animes-final-season.jpg?resize=780%2C439&ssl=1",
    "https://cdn.myanimelist.net/images/anime/1948/120625.jpg",
    "https://lyricsfromanime.com/animes-info/hunter-x-hunter-2011/cover/hunter-x-hunter-2011-lyrics.jpg",
    "https://www.animegeek.com/wp-content/uploads/2020/03/Haikyuu-Season-5-release-date-Haikyuu-To-The-Top-Season-2-Part-2-summer-2020.jpg",
    "https://m.media-amazon.com/images/M/MV5BYzFmMjAwMDYtNzM0Zi00NjY2LWFjMjYtMGQ1OTRiZjk5YjJkXkEyXkFqcGdeQXVyMTMwODY5NDc2._V1_.jpg",
    "https://cdn.myanimelist.net/images/anime/4/9391.jpg",
    "https://upload.wikimedia.org/wikipedia/en/6/6f/Gintama_The_Final_poster.jpg",
    "https://i0.wp.com/www.monstersandcritics.com/wp-content/uploads/2020/02/That-Time-I-Got-Reincarnated-as-a-Slime-Season-2-Anime-Key-Visual.jpg?resize=780%2C1103&ssl=1",
    "https://kbimages1-a.akamaihd.net/555c1576-87c0-4a2f-aa95-aa865c00e006/1200/1200/False/grandmaster-of-demonic-cultivation-mo-dao-zu-shi-novel-vol-2.jpg",
    "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/3494/34943984_so.jpg",
    "https://m.media-amazon.com/images/M/MV5BM2ZkNzgwNzUtMzVkOC00MjUwLWI4YmMtNmViNTcxODZkM2EwXkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_.jpg",
    "https://i1.sndcdn.com/artworks-000187137348-7abilo-t500x500.jpg",
    "https://kiritonarukami.files.wordpress.com/2018/11/95051l.jpg?w=640",
    "https://m.media-amazon.com/images/I/710lLqCDiAL._AC_SY550_.jpg",
    "https://m.media-amazon.com/images/M/MV5BMDkxZTJjZTEtMDRjMy00Yzk1LWI5YjItMjIwYmVlYzhlZWZhXkEyXkFqcGdeQXVyNDQxNjcxNQ@@._V1_FMjpg_UX1000_.jpg",
    "https://cdn.myanimelist.net/images/anime/1972/111635.jpg",
    "https://i0.wp.com/www.monstersandcritics.com/wp-content/uploads/2020/03/Haikyuu-To-The-Top-Anime-Key-Visual-2-Haikyu-Season-4-724x1024.jpg?resize=724%2C1024&ssl=1",
    "https://m.media-amazon.com/images/M/MV5BMTYwYjYyZDgtMTQ3My00YTI4LThmZTUtZmU1MjllOWRlOTdhXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_.jpg",
]
let counter = 0
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '6fbf725860msh864ad3405b51ab0p182dfcjsn21c057c83c4d',
        'X-RapidAPI-Host': 'top-anime.p.rapidapi.com'
    }
};

// async function getAnimeAndMangaApi() {
//     try {
//         return await fetch('https://top-anime.p.rapidapi.com/anime/3/5', options)
//             .then(response => response.json())
//     }
//     catch (error) {
//         console.log("err");
//     }
//     finally { }
// }
// getAnimeAndMangaApi().then(response => console.log(response));

function printAnimeNews() {
    getAnimeAndMangaApi().then(res => {
        res.forEach(element => {
            console.log(element);
            animeNews.innerHTML += `
    <div class="card" style="width: 20rem;">
    <img src="${animeImages[counter++]}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${element.title}</h5>
            <p class="card-text">Address: ${element.address}</p>
            <p class="card-text">Title: ${element.title}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
    `
        });
    })
}
printAnimeNews()