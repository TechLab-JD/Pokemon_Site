const api_base_link = "https://pokeapi.co/api/v2/"

let query = "pokemon/pikachu"

async function fetchAPI_Data(query) {
    try {
        const resp = await fetch(api_base_link+query);
        if (!resp.ok) {
            throw new Error(`HTTP error! \nStatus: ${resp.status}`);
        }
        const data = await resp.json();
        console.log(data)
    } catch(error) {
        console.error('Error fetching data: ', error);
    }
}

fetchAPI_Data(query);