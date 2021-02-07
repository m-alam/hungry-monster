fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
.then(response => response.json())
//.then(json => (json.meals))
.then(json => displayMeal(json))

function displayMeal(json){
    const imge = json.meals.map(img=>img.strMealThumb);
    console.log(imge);
}

//console.log(json.meals);