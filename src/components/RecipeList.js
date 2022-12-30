import "./RecipeList.css";
import { Link } from "react-router-dom";
import { useTheme } from "./hooks/useTheme";
import Deletee from "../assets/Deletee.svg";
import { projectFirestore } from "../firebase/config";
function RecipeList({ recipes }) {
  const handleDelete = (id) => {
    projectFirestore.collection("recipes").doc(id).delete();
  };
  const { mode } = useTheme();
  if (recipes.length === 0)
    return <div className="error">No Recipies To Load...</div>;

  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div key={recipe.id} className={`card ${mode}`}>
          <h3>{recipe.title}</h3>
          <p>{recipe.cookingTime} to make</p>
          <div>{recipe.method.substring(0, 100)}... </div>
          <Link to={`/recipes/${recipe.id}`}>Cook this</Link>
          <img
            src={Deletee}
            alt="delete icon"
            className="delete"
            onClick={() => handleDelete(recipe.id)}
          />
        </div>
      ))}
    </div>
  );
}

export default RecipeList;
