const resultDivEl = document.getElementById("result");

const formEl = document.getElementById("form");
formEl.addEventListener("submit", (evt) => {
    evt.preventDefault();
    resultDivEl.innerHTML = "";
    const urlEl = document.getElementById("url");
    console.log(urlEl.value);

    // Kalla på API-endpunkten som användare har skrivit in
    const endpointFromUser = urlEl.value;
    fetch(endpointFromUser)
        .then(resp => resp.json()) // Omvandla svaret till ett objekt från json
        .then(data => renderData(data)) // DONE: Visa datan på sidan
        .catch(err => console.log("Something went wrong", err));
})

function renderData(data) {
    console.log(data);
    // Ej Implementerad än

    // const obj = {a: 1, b: 2, c: 3};
    // for (const prop in obj) {
    //     const num = obj[prop];
    // }

    // Undersök vilka properties som finns i data
    // genom att loopa med for .. in
    resultDivEl.innerHTML += "<ul>";
    for (const prop in data) {
        console.log(prop, data[prop]);

        
        resultDivEl.innerHTML += `<li><span class="prop">${prop}:</span> ${data[prop]}</li>`;
        
    }
    resultDivEl.innerHTML += "</ul>";
}