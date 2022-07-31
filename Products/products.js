const WANTED_API = `https://api.fbi.gov/wanted/v1/list`;

async function getWanted() {
    try {
        loading_gif.innerHTML = `https://mir-s3-cdn-cf.behance.net/project_modules/max_632/04de2e31234507.564a1d23645bf.gif`;
        return await fetch(WANTED_API).then(response => response.json());

    } catch (error) {
        console.log("error");
    }
    finally {
        loading_gif.innerHTML = " ";
     }
}

getWanted().then(res => console.log(res.items))



onload = function print() {
    getWanted().then(res =>
        res.items.forEach((item) => {
            my_div1.innerHTML += `
            <div class="card col-4" style="width: 20rem;">
            <img src="./imges/monkey_img -1.png" class="card-img-top" alt="...">
            <div class="card-body">
                <p class="card-text">Aliases: ${item.aliases}</p>
                <p class="card-text">Title: ${item.title}</p>
                <p class="card-text">Dates of birth: ${item.dates_of_birth_used}</p>
                <p class="card-text">Description: ${item.description}</p>
                <p class="card-text">Eyes: ${item.eyes}</p>
                <p class="card-text">Hair: ${item.hair}</p>
                <p class="card-text">Languages: ${item.languages}</p>
                <p class="card-text">Nationality: ${item.nationality}</p>
                <p class="card-text">Place of birth: ${item.place_of_birth}</p>
                <p class="card-text">Race: ${item.race}</p>
            </div>
            </div>
            `
        }));
}