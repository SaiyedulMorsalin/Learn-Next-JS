import Image from "next/image";
import Link from "next/link";



const MealCard = (props) =>{
    const {meal} = props;
    const {idMeal,strMeal,strCategory,strInstructions,strMealThumb}  = meal;

    return (
        <>
           <div className="p-2 border-2 flex">
            <div>
            <Image src={strMealThumb} alt={strMeal} width={300} height={300}></Image>
            </div>
            <div>
            <h2>Title : {strMeal}</h2>
            <h2>Category : {strCategory}</h2>
            <h2>Instructions : {strInstructions}</h2>
             <button className="p-2 bg-red-400 rounded-md "><Link href={`/meals/${idMeal}`}>See Details</Link></button>
            </div>
           </div>
          
        </>
    )
}



export default MealCard;