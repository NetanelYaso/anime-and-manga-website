const WANTED_API = `https://api.fbi.gov/wanted/v1/list`

async function getWanted() {
    try {
        return await fetch(WANTED_API).then(response => response.json());

    } catch (error) {
        console.log("error");
    }
    finally { }
}

getWanted().then(res => console.log(res.items))



onload = function print() {
    getWanted().then(res =>
        res.items.forEach((item) => {
            my_div1.innerHTML += `
            <div class="card bg-success" style="width: 18rem;">
            <img src="/imges/scamer-1.png" class="card-img-top" alt="...">
            <div class="card-body">
            <p class="card-text text-white">Aliases: ${item.aliases}</p>
            <p class="card-text text-white">Title: ${item.title}</p>
            <p class="card-text text-white">Dates of birth: ${item.dates_of_birth_used}</p>
            <p class="card-text text-white">Description: ${item.description}</p>
            <p class="card-text text-white">Eyes: ${item.eyes}</p>
            <p class="card-text text-white">Hair: ${item.hair}</p>
            <p class="card-text text-white">Languages: ${item.languages}</p>
            <p class="card-text text-white">Nationality: ${item.nationality}</p>
            <p class="card-text text-white">Place of birth: ${item.place_of_birth}</p>
            <p class="card-text text-white">Race: ${item.race}</p>
            </div>
            </div>
            `
        }))

}