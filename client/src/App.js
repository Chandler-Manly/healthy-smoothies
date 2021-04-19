import { useEffect, useState } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import { baseURL } from "./services";
import Nav from "./components/Nav";
import Smoothies from "./components/Smoothies";
import Form from "./components/Form";
import './App.css';

function App() {

  const [smoothies, setSmoothies] = useState([])
  const [toggleFetch, setToggleFetch] = useState(false);

  useEffect(() => {
      const getSmoothies = async () => {
      const resp = await axios.get(baseURL);
      setSmoothies(resp.data);

    };
    getSmoothies();
  }, [toggleFetch]);

  return (
    <div className="App">
      <Nav />
      <h3>Delicious Smoothies</h3>
      <Route exact path="/">
      <div className="smoothies-container">
          {smoothies.map((smoothie) => (
            <Smoothies key={smoothie.id} smoothie={smoothie} setToggleFetch={setToggleFetch} />
        ))}
        </div>
      </Route>
      <Route path="/new">
        <Form smoothies={smoothies} setToggleFetch={setToggleFetch} />
      </Route>
      <Route path="/edit/title">
        <div className="custom">
      <Form smoothies={smoothies} setToggleFetch={setToggleFetch} />
      </div>
      </Route>
    </div>
  );
}

export default App;