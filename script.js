// API-endpoint
// En URL som pekar på en resurs
// I detta fallet en 'people' med id 1 från star wars
const endpoint = "https://swapi.py4e.com/api/people/1"; 
fetch(endpoint)
    .then(resp => resp.json()) // Omvandla svaret till ett objekt från json
    .then(data => console.log(data)) // TODO: Visa datan på sidan
    .catch(err => console.log("Something went wrong", err));


function renderData(data) {
    const resultDivEl = document.getElementById("result");
    // Ej Implementerad än
}