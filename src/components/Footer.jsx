import React from "react";
import "./Styles/Footer.scss";
export default function Footer({ setCityName }) {
  return (
    <footer className="footer">
      <div
        className="button-71"
        role="button"
        onClick={(event) => setCityName(event.target.textContent)}
      >
        Yerevan
      </div>
      <div
        className="button-71"
        role="button"
        onClick={(event) => setCityName(event.target.textContent)}
      >
        Hrazdan
      </div>
      <div
        className="button-71"
        role="button"
        onClick={(event) => setCityName(event.target.textContent)}
      >
        Dilijan
      </div>
      <div
        className="button-71"
        role="button"
        onClick={(event) => setCityName(event.target.textContent)}
      >
        Gyumri
      </div>
    </footer>
  );
}
