import React from "react";
import PropTypes from "prop-types";
import { setSelectedCity } from "../actions";
import { connect } from "react-redux";
import LocationList from "../components/LocationList";

const LocationListContainer = (props) => {
  const handleSelectedLocation = (city) => {
    props.setCity(city);
  };

  return (
    <LocationList
      cities={props.cities}
      onSelectedLocation={handleSelectedLocation}
    />
  );
};

LocationListContainer.propTypes = {
  setCity: PropTypes.func.isRequired,
  cities: PropTypes.array.isRequired,
};
// inyectar propiedades al Componente
const mapDispatchToProps = (dispatch) => ({
  setCity: (value) => dispatch(setSelectedCity(value)),
});

// highOderComponent
export default connect(null, mapDispatchToProps)(LocationListContainer);
