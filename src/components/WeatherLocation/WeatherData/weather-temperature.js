import React from "react";
import WeatherIcons from "react-weathericons";
import PropTypes from "prop-types";
import {
  CLOUD,
  SUN,
  RAIN,
  SNOW,
  THUNDER,
  DRIZZLE,
} from "../../../constants/weather";
import "./styles.css";

const icons = {
  [CLOUD]: "cloud",
  [SUN]: "day-sunny",
  [RAIN]: "rain",
  [SNOW]: "snow",
  [THUNDER]: "day-thunderstore",
  [DRIZZLE]: "day-showers",
};
const sizeIcon = "4x";
const getWeatherIcon = (weatherState) => {
  const icon = icons[weatherState];

  if (icon)
    return <WeatherIcons className="wicon" name={icon} size={sizeIcon} />;
  else
    return <WeatherIcons className="wicon" name="day-sunny" size={sizeIcon} />;
};
const WeatherTemperature = ({ temperature, weatherState }) => (
  <div className="weatherTemperatureCont">
    <span>{getWeatherIcon(weatherState)}</span>
    <div>
      <span className="temperature">{`${temperature}`}</span>
      <span className="temperatureType"> {`C`}</span>
    </div>
  </div>
);

WeatherTemperature.propTypes = {
  temperature: PropTypes.number.isRequired,
  weatherState: PropTypes.string.isRequired,
};

export default WeatherTemperature;
