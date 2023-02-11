import "./Styles/Container.scss";
import { useEffect, useState } from "react";
import MainInfo from "./MainInfo";
import Header from "./Header";
import Footer from "./Footer";

function Container() {
  const [cityName, setCityName] = useState("Yerevan");
  const [data, setData] = useState({});
  const [style, setStyle] = useState({});

  const url = (city) =>
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=06f3dcb475d6e5de9977690a312c895b`;

  const urlUNSPLASH = (city) =>
    `https://api.unsplash.com/search/photos?client_id=CA872Hg7BfRubYizhumgFtIg5xvKPntvuVe9UK010Jw&query=${city}&orientation=landscape`;

  async function getInfoByCity(city = cityName) {
    const resp = await fetch(url(city));
    const data = await resp.json();

    const respImage = await fetch(urlUNSPLASH(city));
    const dataIamge = await respImage.json();

    addDataUpdate(dataIamge, data);
  }

  function addDataUpdate(dataIamge, data) {
    let randIndex = Math.trunc(Math.random() * dataIamge.results.length);
    setStyle({
      backgroundImage: `url("${dataIamge.results[randIndex].urls.full}")`,
    });

    setData({
      weather: data.weather[0].main,
      images: data.weather[0].icon,
      clouds: `${data.clouds.all} %`,
      speed: `${data.wind.speed} m/s`,
      name: data.name,
      humidity: `${data.main.humidity} %`,
      temp: `${Math.round(data.main.temp - 273.15)}°C`,
      fTemp: `${Math.round((data.main.temp - 273.15) * (9 / 5) + 32)}°F`,
      sunrise: `
      ${
        new Date(data.sys.sunrise * 1000).getHours() < 10
          ? "0" + new Date(data.sys.sunrise * 1000).getHours()
          : new Date(data.sys.sunrise * 1000).getHours()
      } :
      ${
        new Date(data.sys.sunrise * 1000).getMinutes() < 10
          ? "0" + new Date(data.sys.sunrise * 1000).getMinutes()
          : new Date(data.sys.sunrise * 1000).getMinutes()
      }`,
      sunset: `
      ${new Date(data.sys.sunset * 1000).getHours()} :
      ${new Date(data.sys.sunset * 1000).getMinutes()}`,
    });
  }

  useEffect(() => {
    if (cityName.length > 2) {
      let setID = setTimeout(() => {
        getInfoByCity(cityName);
      }, 600);
    } else {
      setCityName("Yerevan");
    }
    return (setID) => clearTimeout(setID);
  }, [cityName]);

  return (
    <main className="main" style={style}>
      <div className="container">
        <Header setCityName={setCityName} />
        <MainInfo {...data} />
        <Footer setCityName={setCityName} />
      </div>
    </main>
  );
}

export default Container;
