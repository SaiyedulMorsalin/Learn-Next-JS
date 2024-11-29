import MealCard from "@/components/MealCard"

const { loadMeal } = require("@/query/loadMeal")



const MealsPage = async ()=>{


    const mealsData = await loadMeal()
    const meals = mealsData.meals
    return (
        <>
            <h1 className="text-center text-2xl font-semibold">All Meals Here.....</h1>

            <div className="container mx-auto gap-4">
            {
                meals && meals?.map(meal =><MealCard key={meal.idMeal} meal={meal}>
                    
                </MealCard>)
                
            }
            </div>
        </>
    )
}


export default MealsPage;