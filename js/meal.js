const searchFood = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log(searchText);
    // Clear data 
    searchField.value = '';
    
    
    // load data 
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}
    `
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data.meals));
}


const displaySearchResult = meals => {
    const searchResult = document.getElementById('search-result');
    searchResult.innerHTML = '';
    if(meals.length == 0){
      const forSorry = document.getElementById('sorry');
      forSorry.innerHTML = `<h1> soykot</h1>`
    }
    meals.forEach(meal => {
        // console.log(meal);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div onclick="loadMealDetails(${meal.idMeal})" class="card h-100">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${meal.strMeal}</h5>
              <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
            </div>
            <div class="card-footer">
              <small class="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>`;
          searchResult.appendChild(div);
    });
}

const loadMealDetails = mealId => {
  // console.log(mealId);
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
  fetch(url)
  .then( res => res.json())
  .then(data => displayMealDetail(data.meals[0]));
}

const displayMealDetail = meal =>{
  console.log(meal);
  const mealDetails = document.getElementById('meal-detail');
  const div =  document.createElement('div');
  div.classList.add('card');
  div.innerHTML = `
            <img src="${ meal.strMealThumb}" class="card-img-top" alt="...">
         <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>`
          mealDetails.appendChild(div);
}