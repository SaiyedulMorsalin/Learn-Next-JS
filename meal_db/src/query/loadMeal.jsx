

export const loadMeal = async () =>{
    const res = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
    const data = res.json()
    return data
}



const loadSingleMeal = async (id)=>{
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    const data = res.json()

    return data
}


export const mealDetails = async (id)=>{
    const mealData =await loadSingleMeal(id)
    const meal = mealData.meals[0];
    return meal;
}