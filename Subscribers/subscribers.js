const WANTED_API = `https://api.fbi.gov/wanted/v1/list`;

async function getWanted() {
    loader.innerHTML = `<img id ="loading_gif" src='https://thilaldavid.com/wp-content/uploads/2021/10/loading-1.gif'>`;
    try {
        return await fetch(WANTED_API).then(response => response.json());

    } 
    catch (error) {
        console.log("error");
    }
    finally {
        loader.innerHTML = ""
    }
}

getWanted().then(res => console.log(res.items))



function print() {
    getWanted().then(res =>
        res.items.forEach((item) => {
            my_div1.innerHTML += `
            <div class="card col-4" style="width: 20rem;">
            <img src="../imges/monkey_img -1.png" class="card-img-top" alt="...">
            <div class="card-body">
                <p class="card-text">Title: ${item.title}</p>
                <p class="card-text">Aliases: ${item.aliases}</p>
                <p class="card-text">Dates of birth: ${item.dates_of_birth_used}</p>
                <p class="card-text">Description: ${item.description}</p>
                <p class="card-text">Languages: ${item.languages}</p>
                <p class="card-text">Nationality: ${item.nationality}</p>
                <p class="card-text">Place of birth: ${item.place_of_birth}</p>
            </div>
            </div>
            `
        }));
}
print();