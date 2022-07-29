// const options1 = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': '6fbf725860msh864ad3405b51ab0p182dfcjsn21c057c83c4d',
//         'X-RapidAPI-Host': 'fraudsentinel.p.rapidapi.com'
//     }
// };

// async function getFraudSentinel() {
//     try {
//         return await fetch('https://fraudsentinel.p.rapidapi.com/sentinel.json?ip=127.0.0.1', options1)
//             .then(response => response.json())

//     }
//     catch (error) {
//         console.error("err");
//     }
//     finally { }
// }
// getFraudSentinel().then(response => console.log(response));



const WANTED_API = `https://api.fbi.gov/wanted/v1/list`

async function getWanted() {
    try {
        return await fetch(WANTED_API).then(response => response.json());

    } catch (error) {
        console.log("error");
    }
    finally { }
}

getWanted().then(res=>console.log(res.items))



function print(){
getWanted().then(res=>
    res.items.forEach((item)=>{

    }))

}