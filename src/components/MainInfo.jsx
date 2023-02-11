import "./Styles/MainInfo.scss";
import {
  BsFillCalendarDateFill,
  BsSunriseFill,
  BsSunsetFill,
} from "react-icons/bs";
import { IoMdCloudy } from "react-icons/io";
import { GiPaperWindmill } from "react-icons/gi";
import { WiHumidity } from "react-icons/wi";
import { useState } from "react";

export default function MainInfo({
  weather,
  images,
  clouds,
  speed,
  name,
  humidity,
  temp,
  fTemp,
  sunrise,
  sunset,
}) {
  const [date] = useState(
    `${
      new Date().getMonth() + 1 < 10
        ? `0${new Date().getMonth() + 1}`
        : new Date().getMonth() + 1
    }/${
      new Date().getDate() < 10
        ? `0${new Date().getDate()}`
        : new Date().getDate()
    }/${new Date().getFullYear()}`
  );
  return (
    <div className="main_info">
      <h1 className="city_name">{name}</h1>
      <div className="city_info">
        <p className="weather_info">{weather}</p>
        <div className="weather_icon">
          <img
            src={`https://openweathermap.org/img/wn/${images}@2x.png`}
            className="weather_icon_image"
            alt="weather icon"
          />
        </div>
      </div>
      <div className="weather_temp_celsius">
        {temp}
        <p className="weather_temp_faren">{fTemp}</p>
      </div>
      <div className="another_info">
        <div className="info_block">
          <div className="info">
            <span className="info_icon">
              <IoMdCloudy />
            </span>
            <span className="info_text">{clouds}</span>
          </div>

          <div className="info">
            <span className="info_icon">
              <GiPaperWindmill />
            </span>
            <span className="info_text">{speed}</span>
          </div>

          <div className="info">
            <span className="info_icon">
              <WiHumidity />
            </span>
            <span className="info_text">{humidity}</span>
          </div>
        </div>

        <div className="info_block">
          <div className="info">
            <span className="info_icon">
              <BsSunsetFill />
            </span>
            <span className="info_text">{sunset}</span>
          </div>
          <div className="info">
            <span className="info_icon">
              <BsSunriseFill />
            </span>
            <span className="info_text">{sunrise}</span>
          </div>
          <div className="info">
            <span className="info_icon">
              <BsFillCalendarDateFill />
            </span>
            <span className="info_text">{date}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
