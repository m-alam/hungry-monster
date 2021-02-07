const searchMeals = () => {
    const searchText = document.getElementById('search-input').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${searchText}`
    console.log(url);
    // load data
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
        //.then(data=>console.log(data.meals))
        .catch(error => displayError('Something Went Wrong!! Please try again later!'));

    
}

const displayMeals = meals => {
    //meals.forEach(res=>console.log(res));
        
    const meal_area = document.getElementById('meal-area');
     meal_area.innerHTML = '';
     meals.forEach(meal => {
         const row = document.createElement('div');
         row.className = 'col-md-4';
         row.innerHTML = `
            <div onclick="moreDetails('${meal}')" class="item" id="meal">
                <div class="meal-img">
                    <img src="${meal.strMealThumb}" alt="" style="width:100%">
                </div>
                <div class="meal-name">
                    <h3>${meal.strMeal}</h3>
                </div>
            </div>    
         `;
         meal_area.appendChild(row);
     })
}
 
const mealDetails = meal=>{
    console.log(meal[0]);
}


const displayError = error => {
    const errorTag = document.getElementById('error-message');
    errorTag.innerText = error;
}