import React from "react";
import Info from "./components/Info"
import Form from "./components/Form"
import Weather from "./components/Weather"

const API_KEY = "a76efa0956d43ba14872707af0aa81be";
let city = "London";

class App extends React.Component
{

  gettingWeather = async (e) => {
    e.preventDefault();

    const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
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