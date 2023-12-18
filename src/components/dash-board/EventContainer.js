import styles from './EventContainer.module.css';
import map_logo from '../../asset/map_logo.png';
import snowy_icon from '../../asset/snowy_icon.png'
import clock from '../../asset/clock.png';
import React, { useState, useEffect } from 'react';

const EventContainer = () => {

    const [dateObject, setDateObject] = useState(new Date());

    useEffect(() => {
        let timer = setInterval(() => {
            setDateObject(new Date());
        }, 1000);

        return function cleanup() {
            clearInterval(timer);
        }
    }, []);

    const zeroPad = (num, places) => String(num).padStart(places, '0');

    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=${process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY}&units=metric`)
            .then(response => response.json())
            .then(data => setWeatherData(data))
            .catch(error => console.error(error));
    }, []);



    return (
        <div className={styles.eventContainer}>
            <div className={styles.lectureData}>
                <img src={map_logo} alt="Logo" />
                <h3 className={styles.paragraph}>숭덕경상관 02112</h3>
                <h4>(PC실습실)</h4>
            </div>
            <div className={styles.weatherContainer}>
                <div className={styles.weather}>
                    <img src={snowy_icon} alt="weather-icon" />
                    <h2>{weatherData ? weatherData.main.temp : 'Loading...'}˚</h2>
                </div>
        
                <div className={styles.temperatures}>
                    <span>최고 : </span>
                    <span>{weatherData ? weatherData.main.temp_max : 'Loading...'}˚</span>
                    <span>최저 : </span>
                    <span>{weatherData ? weatherData.main.temp_min : 'Loading...'}˚</span>
                </div>
            </div>
            <div className={styles.timeContainer}>
                <img src={clock} alt="Logo" />
                <h1 className={styles.nowTime}>{zeroPad(dateObject.getHours(), 2)}:{zeroPad(dateObject.getMinutes(), 2)}</h1>
                <p>{dateObject.getFullYear()}/{zeroPad(dateObject.getMonth() + 1, 2)}/{zeroPad(dateObject.getDate(), 2)}</p>
            </div>
        </div>
    );
};

export default EventContainer;