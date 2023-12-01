import React, { useState, useEffect } from "react";
import Styles from "./Home.module.scss";
import Heads from "../NavbarSection/Header";
import CurrentTem from "../ArticalSection/currentTem";
import Heading from "../CommonH3/heading";
import UpcomingInfo from "../ArticalSection/nxtDyForCast";
import AirIndexDetails from "../AsideSection/AirIndex";
import SunriseSunsetTime from "../AsideSection/SunriseSunset";
import HumidityArea from "../AsideSection/Humidity";
import UpdateWeather from "../DayUpdate/UpdateOurs";
import axios from "axios";
import moment from "moment";
// http://api.openweathermap.org/data/2.5/air_pollution?lat={lat}&lon={lon}&appid={API key}
// .................................................................................................................//
const Homes = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [city, setCity] = useState("");
  const [daily, setDaily] = useState(null);
  const [hours, setHours] = useState(null);
  const [air, setAir] = useState(null);

  // ................................API fetch section...............................................//
  const apiKey = "2f9adeffcf0df077e7b043a6e6a45fae";
  const checkWeather = async () => {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    setCity("");
    try {
      const apiData = await axios.get(apiUrl);
      const lat = apiData.data.coord.lat;
      const lon = apiData.data.coord.lon;
      const temperature = Math.floor(apiData.data.main.temp / 10);
      const country = apiData.data.sys.country;
      const city = apiData.data.name;
      const temScaleHum = apiData.data.main.humidity;
      const temScalePre = apiData.data.main.humidity;
      const temScaleViw = Math.floor(apiData.data.visibility / 1000);
      const feel = Math.floor(apiData.data.main.feels_like - 273.15);
      const description = apiData.data.weather[0].main;
      ///////////////////////// sun section  //////////////////
      const sunrises = apiData.data.sys.sunrise;
      const sunsets = apiData.data.sys.sunset;
      const sunrise = new Date(sunrises * 1000).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
      const sunset = new Date(sunsets * 1000).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
      setWeatherData({ temperature, city, country, sunset, sunrise, temScaleHum, temScalePre, temScaleViw, feel, description, lat, lon });
    } catch (error) {
      window.confirm("search valid city...");
      console.log(error);
    }
  };
  // ..................................................................................................................

  const getData = async (lat, lon) => {
    const newApiKey = "3050828d775a7c1de9a5bc06bf111c01";
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${newApiKey}&exclude=minutely&units=metric`);
      const polution = await axios.get(` http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`);
      setAir(polution.data.list[0].components);
      setDaily(response.data.daily);
      setHours(response.data.hourly);
    } catch (error) {
      console.log(`not fetch api:=>  ${error}`);
    }
  };
  console.log(air);
  useEffect(() => {
    if (weatherData?.lat && weatherData?.lon) {
      getData(weatherData?.lat, weatherData?.lon);
    }
  }, [weatherData]);

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      axios
        .get(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}`)
        .then((res) => {
          const lat = res.data.coord.lat;
          const lon = res.data.coord.lon;
          const temperature = Math.floor(res.data.main.temp / 10);
          const country = res.data.sys.country;
          const city = res.data.name;
          const temScaleHum = res.data.main.humidity;
          const temScalePre = res.data.main.humidity;
          const temScaleViw = Math.floor(res.data.visibility / 1000);
          const feel = Math.floor(res.data.main.feels_like - 273.15);
          const description = res.data.weather[0].main;
          ///////////////////////// sun section  //////////////////
          const sunrises = res.data.sys.sunrise;
          const sunsets = res.data.sys.sunset;
          const sunrise = new Date(sunrises * 1000).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
          const sunset = new Date(sunsets * 1000).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
          setWeatherData({ temperature, city, country, sunset, sunrise, temScaleHum, temScalePre, temScaleViw, feel, description, lat, lon });
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }, []);
  // ................................Input Section Section...............................................//
  const inputHandler = (e) => {
    setCity(e.target.value);
  };
  // ................................print Data Section...............................................//
  return (
    <>
      <div className={Styles.container}>
        <Heads inputHandler={inputHandler} checkWeather={checkWeather} value={city} />
        <main className={Styles.container__main}>
          {/* artical section  */}
          <article className={Styles.container__main__articalSection}>
            <div className={Styles.container__main__articalSection__currentData}>
              <CurrentTem
                nowTemp={weatherData.temperature}
                city={weatherData.city}
                code={weatherData.country}
                date={moment().format("D")}
                month={moment().format("MMMM")}
                day={moment().format("dddd")}
                desWeather={weatherData.description}
              />
            </div>
            <div className={Styles.container__main__articalSection__forcastHeading}>
              <Heading text={"8 days forcast"} />
            </div>
            <div className={Styles.container__main__articalSection__forcastData}>
              <div className={Styles.container__main__articalSection__forcastData__wrapperData}>
                {/* ...................... */}
                {daily
                  ? daily.map((item) => {
                      const unixTimestamp = item.dt;
                      const dates = new Date(unixTimestamp * 1000);
                      const month = dates.toLocaleDateString("en-US", { month: "short" });
                      const Weak = dates.toLocaleDateString("en-US", { weekday: "short" });
                      const date = dates.toLocaleDateString("en-US", { day: "numeric" });
                      return (
                        <div key={item.dt}>
                          <UpcomingInfo nxtDayTemp={Math.floor(item.feels_like.day)} date={date} Weak={Weak} month={month} iconName="fa-solid fa-sun" />
                        </div>
                      );
                    })
                  : "Loading...."}
              </div>
            </div>
          </article>
          {/* aside section  */}
          <aside className={Styles.container__main__asideSection}>
            <div className={Styles.container__main__asideSection__todayHighlights}>
              <Heading text={"Today Highlights"} color={"#524b4b"} />
              <div className={Styles.container__main__asideSection__todayHighlights__flexBox}>
                <div className={Styles.container__main__asideSection__todayHighlights__flexBox__same}>
                  <AirIndexDetails pm25={air?.pm2_5} so2={air?.so2} no2={air?.no2} o3={air?.o3} />
                </div>
                <div className={Styles.container__main__asideSection__todayHighlights__flexBox__same}>
                  <SunriseSunsetTime sunset={weatherData.sunset} sunrise={weatherData.sunrise} />
                </div>
                <div className={Styles.container__main__asideSection__todayHighlights__flexBox__wind}>
                  <div>
                    <HumidityArea textHeading={"Humidity"} className="fa-solid fa-droplet" temScale={`${weatherData.temScaleHum} %`} />
                  </div>
                  <div>
                    <HumidityArea textHeading={"Pressure"} className="fa-solid fa-water" temScale={`${weatherData.temScalePre} hPa`} />
                  </div>
                </div>
                <div className={Styles.container__main__asideSection__todayHighlights__flexBox__wind}>
                  <div>
                    <HumidityArea textHeading={"Visibility"} className="fa-regular fa-eye" temScale={`${weatherData.temScaleViw} km`} />
                  </div>
                  <div>
                    <HumidityArea textHeading={"Feels Like"} className="fa-solid fa-temperature-low" temScale={`${weatherData.feel} °C`} />
                  </div>
                </div>
              </div>
            </div>
            <Heading text={"Today at"} margin={"10px 0"} color={"#524b4b"} />
            <div className={Styles.container__main__asideSection__todayAtTime}>
              <div className={Styles.container__main__asideSection__todayAtTime__flex}>
                {hours
                  ? hours.map((item) => {
                      const times = item.dt;
                      const formateTime = new Date(times * 1000);
                      const time = formateTime.toLocaleTimeString("en-US", {
                        hour: "numeric",
                        minute: "2-digit",
                        hour12: true, // Set to 'true' to use 12-hour format || set to 'false' to use 12 hours format
                      });
                      return (
                        <div key={item.dt}>
                          <UpdateWeather time={time} Icon={"fa-solid fa-cloud"} tempInDeg={Math.floor(item.temp)} />
                        </div>
                      );
                    })
                  : "Loading..."}
              </div>
            </div>
          </aside>
        </main>
      </div>
    </>
  );
};

export default Homes;
