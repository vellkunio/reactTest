import React from "react";
import Info from "./components/Info"
import Form from "./components/Form"
import Weather from "./components/Weather"

const API_KEY = "a76efa0956d43ba14872707af0aa81be";

class App extends React.Component
{

  gettingWeather = async (e) => {
    e.preventDefault();
    const CITY = e.target.elements.city.value;
    const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}`);
    const data = await api_url.json();
    console.log(data);

  }

  render()
  {
    return(
      <div>
        <Info />
        <Form weatherMethod = {this.gettingWeather} />
        <Weather />
      </div>
    );
  }
}

export default App;