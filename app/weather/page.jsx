"use client"
import React, { useEffect, useState } from "react";


import Image from "next/image";
import WeatherCard from "@components/WeatherCard";

const App = () => {
  const [city, setCity] = useState("");
  const [days, setDays] = useState({});

  useEffect(() => {
    setCity("");
  }, []);

  const fetchWeatherData = async (name) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${name}&appid=f327b58a5621ed3ed23d1a4332dec5ce`
    );
    const data = await response.json();
    console.log("Received data:", data);
    setDays(data);
  };

  return (
    <div className="app">
      <h1 className=" bg-black ">WeatherIt<span className=" text-green ">Is!</span></h1>


      <div className="search">
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Search for cities"
        />
        <Image
          src={"/search.svg"}
          width={40}
          height={40}
          alt="search"
          onClick={() => fetchWeatherData(city)}
        />
      </div>

      {days.list && days.list.length > 0 && (
        <>
          <div className="container">
            <WeatherCard dayData={days.list[8]} />
            <WeatherCard dayData={days.list[16]} />
            <WeatherCard dayData={days.list[24]} />
            <WeatherCard dayData={days.list[32]} />
            <WeatherCard dayData={days.list[39]} />
          </div>
        </>
      )}
    </div>
  );
};

export default App;
