import { Link } from "react-router-dom";

function Smoothies(props) {

  return (
    <div className="smoothie-card">
      <h3>{props.smoothie.title}</h3>
      <h4>{props.smoothie.ingredients}</h4>
      <h5>{props.smoothie.topping}</h5>
      <button type="submit" >Delete</button>
      <Link to={`/edit/${props.smoothie.id}`}>
        <button>Edit</button>
      </Link>
    </div>
  );
}

export default Smoothies;