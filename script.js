// API-endpoint
// En URL som pekar på en resurs
// I detta fallet en 'people' med id 1 från star wars
const endpoint = "https://swapi.py4e.com/api/people/1"; 
fetch(endpoint)
    .then(resp => resp.json()) // Omvandla svaret till ett objekt från json
    .then(data => renderData(data)) // TODO: Visa datan på sidan
    .catch(err => console.log("Something went wrong", err));

const formEl = document.getElementById("form");
formEl.addEventListener("submit", (evt) => {
    evt.preventDefault();
    const urlEl = document.getElementById("url");
    console.log(urlEl.value);

    // Kalla på API-endpunkten som användare har skrivit in
    const endpointFromUser = urlEl.value;
    fetch(endpointFromUser)
        .then(resp => resp.json()) // Omvandla svaret till ett objekt från json
        .then(data => renderData(data)) // TODO: Visa datan på sidan
        .catch(err => console.log("Something went wrong", err));
})

function renderData(data) {
    const resultDivEl = document.getElementById("result");
    console.log(data);
    // Ej Implementerad än

    // const obj = {a: 1, b: 2, c: 3};
    // for (const prop in obj) {
    //     const num = obj[prop];
    // }

    // Undersök vilka properties som finns i data
    // genom att loopa med for .. in
    resultDivEl.innerHTML = "<ul>";
    for (const prop in data) {
        console.log(prop, data[prop]);

        resultDivEl.innerHTML += `<li>${prop}: ${data[prop]}</li>`;
    }
    resultDivEl.innerHTML += "</ul>";



    // resultDivEl.innerHTML = `<div>
    //                             <h2>${data.name}</h2>
    //                             <p>${data.hair_color}</p>
    //                             <p>${data.height}</p>
    //                         </div>`;
}