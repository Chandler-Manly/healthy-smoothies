import { Link } from "react-router-dom";

function Nav(){
  return (
    <nav>
      <div className="company-logo">
      <img src="https://res.cloudinary.com/dygk00sc0/image/upload/v1618100818/Minimalist_Circle_Healthy_Cafe_Logo_suw4fg.png" alt="company-logo"/>
      </div>
        <Link to="/">Home</Link>
      <Link to="/new"> Add Smoothies</Link>
    </nav>
  )
}

export default Nav;