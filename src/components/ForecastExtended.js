import React from "react";
import PropTypes from "prop-types";
import ForcastItem from "./ForscastItem";

import "./styles.css";

const renderForcastItemDays = (forecastData) => {
  return forecastData.map((forcast) => (
    <ForcastItem
      key={`${forcast.weekDay}${forcast.hour}`}
      weekDay={forcast.weekDay}
      hour={forcast.hour}
      data={forcast.data}
    />
  ));
};

const renderProgress = () => {
  return <h3>"Cargando pronostico extendido"</h3>;
};

const ForecastExtended = ({ city, forecastData }) => {
  return (
    <div>
      <h2 className="forecast-title">Pronóstico Extendido para {city}</h2>
      {forecastData ? renderForcastItemDays(forecastData) : renderProgress()}
    </div>
  );
};

ForecastExtended.propTypes = {
  city: PropTypes.string.isRequired,
  forecastData: PropTypes.array,
};
export default ForecastExtended;
