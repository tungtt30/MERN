import style from './weather.module.css'
import React, { useEffect, useState } from 'react';

import axios from 'axios';

const Weather = () => {
  const [data, setData] = useState({})
  const [value, setValue] = useState('ha noi')
  let apiURL = `https://api.weatherapi.com/v1/current.json?q=${value}&key=559d7d2674004eec987164748220101`

  const fet = async () => {
    const data = await axios.get(apiURL)
    setData(data)
  }
  useEffect(() => {
    fet()
  }, [])

  const handleInput = (e) => {
    setValue(e.target.value)
  }

  const handleBlur = () => {
    fet()
  }
  const handleKeypress = (e) => {
    if (e.code === 'Enter') {
      fet()
    }
  }

  let fetchdata = data.data


  return (
    <div className={style["body"]}>
      <div id={style['weather']}>
        <div id="weather">
          <input type="text" onKeyPress={handleKeypress} onChange={handleInput} onBlur={handleBlur} className={style["search"]} placeholder="nhap ten thanh pho" />
          <div className={style["content"]}>
            <div className={style["capital"]}>
              <span className={style["city"]}>{ }</span>
              <span>{fetchdata?.location.name},</span>
              <span className={style["country"]}>{fetchdata?.location.country}</span>
            </div>
            <div className={style["time"]}></div>
            <div className={style["temp"]}>
              <span className={style["value"]}></span>{fetchdata?.current.temp_c}<sup> o</sup>C
            </div>
            <div className={style["short-desc"]}>{fetchdata?.current.condition.text}</div>
            <img src={fetchdata?.current.condition.icon} />
            <div className={style["more-desc"]}>
              <div className={style["visibility"]}>
                <i className="far fa-eye"></i>
                <span>{fetchdata?.current.vis_km} km</span>
              </div>
              <div className={style["wind"]}>
                <i className="fas fa-wind"></i>
                <span>{fetchdata?.current.wind_kph} kph</span>
              </div>
              <div className={style["sun"]}>
                <i className="fas fa-tint"></i>
                <span>{fetchdata?.current.humidity} %</span>
              </div>
            </div>
          </div>
        </div>
      </div>;
    </div>

  )
};

export default Weather;
