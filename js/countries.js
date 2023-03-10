const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}
loadCountries();

const displayCountries = countries => {
    // for(country of countries){
    // }
    const countriesDiv = document.getElementById('countries');
    countries.forEach(country => {
        // console.log(country)
        const div = document.createElement('div');
        div.classList.add('country');

        div.innerHTML = `
        <h3> ${country.name.common}</h3>
        <p>${country.capital}</p>
        <button onclick ="loadCountryByName('${country.name.common}')">Show Details</button>
        `
        // const h3 = document.createElement('h3');
        // h3.innerText = `Name: ${country.name.common}`;
        // div.appendChild(h3);
        // const p = document.createElement('p');
        // p.innerText = `Capital: ${ country.capital}`;
        // div.appendChild(p);
        countriesDiv.appendChild(div);
    });
} 

const loadCountryByName = name =>{
    const url = `https://restcountries.com/v3.1/name/${name}
    `
    fetch(url)
    .then(res => res.json())
    .then(data=> displayCountriesDetails(data[0]))
}
const displayCountriesDetails = country => {
    console.log(country);
    const countryDiv = document.getElementById('countryDetail');
    countryDiv.innerHTML = `<h4> ${country.name.common} </h4>
    <p> Population : ${country.population}</p>`;

}