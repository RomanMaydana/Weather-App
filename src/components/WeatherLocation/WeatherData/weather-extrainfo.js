import React from 'react'
import PropTypes from 'prop-types'
import './styles.css'

const WeatherExtrainfo = ({humidity,wind}) =>(
    <div className="weatherExtraInfoCont">
        <span className="extraInfoText">{`Humendad: ${humidity} %`}</span>
        <span className="extraInfoText">{`Vientos: ${wind} wind`}</span>
    </div>
)

WeatherExtrainfo.propTypes = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired, 
}
export default WeatherExtrainfo