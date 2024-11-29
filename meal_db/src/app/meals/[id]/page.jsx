import { mealDetails } from "@/query/loadMeal";
import Image from "next/image";


const  MealDetails = async ({params})=>{
    const {id} = await params;
    const {idMeal,strMeal,strCategory,strInstructions,strMealThumb,strTags} = await mealDetails(id);
    
    return (
        <>
        <div className="container mx-auto">
            <Image src={strMealThumb} alt={strMeal} width={300} height={200}></Image>
        </div>
        </>
    )
}



export default MealDetails;