const searchMeals = () => {
    const searchText = document.getElementById('search-input').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${searchText}`
    //console.log(url);
    // load data
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
        

    
}
const getMealItem = (id) => {
    const searchText = document.getElementById('search-input').value;
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    console.log(url);
    
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetails(data.meals))    
}

const displayMeals = meals => {           
    const meal_area = document.getElementById('meal-area');
     meal_area.innerHTML = '';
     meals.forEach(meal => {        
         const row = document.createElement('div');
         row.className = 'col-md-4';
         row.innerHTML = `
            <div onclick="getMealItem(${meal.idMeal})" class="item" id="meal">
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
 
const displayMealDetails = meal=>{
    const meal_search =document.getElementById('meal-search');
    meal_search.style.display="none"; 
    const meal_area = document.getElementById('meal-area');
    meal_area.innerHTML = '';
    meal.forEach(meal => {
        console.log(meal.idMeal);
        const div = document.createElement('div');
        div.className = 'singleItem';
        div.innerHTML = `
           
            <div class="meal-img">
                <img src="${meal.strMealThumb}" alt="" style="width:400px, height:100px">
            </div>
            <div class="meal-Ingredient">
                <h3>${meal.strIngredient1}</h3>
                <h3>${meal.strIngredient2}</h3>
                <h3>${meal.strIngredient3}</h3>
                <h3>${meal.strIngredient4}</h3>
                <h3>${meal.strIngredient5}</h3>
                <h3>${meal.strIngredient6}</h3>
            </div>
               
        `;
        meal_area.appendChild(div);
    });
    
}

