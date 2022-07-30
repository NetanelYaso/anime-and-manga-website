const Arcade_Alien = `https://rickandmortyapi.com/api/character/23`;
async function getRickAndMorty() {
    try {
        return await fetch(Arcade_Alien)
            .then(res => res.json());
    } catch (error) {
        console.log("err");
    }
    finally { }
}

getRickAndMorty().then(response => console.log(response));

function printToScreen() {
    getRickAndMorty()
        .then(res =>
            rick_And_Morty_Div.innerHTML = `
            <p>${res.name}</p>
            <p>${res.id}</p>
            <p>${res.gender}</p>
            <p>${res.species}</p>
            <p>${res.location.name}</p>
            <p>${res.status}</p>
            `
        );
}
printToScreen();