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
        console.log(country)
        const div = document.createElement('div');
        div.classList.add('country');
        const h3 = document.createElement('h3');
        h3.innerText = `Name: ${country.name.common}`;
        div.appendChild(h3);
        const p = document.createElement('p');
        p.innerText = `Capital: ${ country.capital}`;
        div.appendChild(p);
        countriesDiv.appendChild(div);
    });
} 