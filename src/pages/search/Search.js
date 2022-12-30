import { useLocation } from "react-router-dom";
import { useFetch } from "../../components/hooks/useFetch";
import RecipeList from "../../components/RecipeList";
import "./Search.css";
function Search() {
  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
  const query = queryParams.get("q");
  const url = "http://localhost:5000/recipes?q=" + query;
  const { isPending, error, data } = useFetch(url);
  return (
    <div>
      <h2 className="page-title"> Recipe including "{query}"</h2>
      {error && <p className="page-title">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
}

export default Search;
