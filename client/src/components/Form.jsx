import { useState } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

function Form(props) {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [topping, setTopping] = useState("");

  const history = useHistory();
  const params = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newSmoothie = {
      title, 
      ingredients,
      topping,
    }
    await axios.post("https://morning-badlands-84169.herokuapp.com/", newSmoothie);
    props.setToggleFetch((curr) => !curr);
    history.push("/");
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input
        id="title"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="ingredients">Ingredients:</label>
      <input
        id="ingredients"
        type="text"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
      />
      <label htmlFor="topping">Topping:</label>
      <input
        id="topping"
        type="text"
        value={topping}
        onChange={(e) => setTopping(e.target.value)}
      />
      <input type="submit"/>
    </form>
  );
}

export default Form;