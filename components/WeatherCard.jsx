"use client"

import React, { useEffect, useState } from "react";
import "@styles/index.css";
import Image from "next/image";


const WeatherCard = ({ dayData }) => {
  const [randomImageUrl, setRandomImageUrl] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRandomImage = async () => {
      const category = 'nature';
      const apiKey = 'Nh7lHcqzVqzbmjzLJG50gw==IrSVCemi1C2rHLGo'; 

      try {
        const response = await fetch(`https://api.api-ninjas.com/v1/randomimage?category=${category}`, {
          headers: {
            'X-Api-Key': apiKey,
            'Accept': 'image/jpg'
          }
        });

        if (response.ok) {
          const resultBlob = await response.blob();
          const imageUrl = URL.createObjectURL(resultBlob);
          setRandomImageUrl(imageUrl);
        } else {
          setError(`Failed to fetch random image: ${response.statusText}`);
        }
      } catch (error) {
        setError(`Error fetching random image: ${error.message}`);
      }
    };

    fetchRandomImage();
  }, []);
  function weatherType(tp){
    if(tp==="Clouds"){
      return <Image height={40} width={40} src={"/cloudy.png"}/>
    }
    if(tp==="Snow"){
      return <Image height={40} width={40} src={"/snowy.png"}/>
    }
    if(tp==="Rain"){
      return <Image height={40} width={40} src={"/rainy.png"}/>
    }
    if(tp==="Clear"){
      return <Image height={40} width={40} src={"/sunny.png"}/>
    }
  }

  return (
    <div className="movie">
      <div>
        <p>{dayData.dt_txt}</p>
        <p><b>Humidity: </b>{dayData.main.humidity}%</p>
        
      </div>
    
      <div>
        <img className="weather-image" src={randomImageUrl} alt={dayData.weather.main} />
      </div>

      <div>
        <span className=" text-green-600">{weatherType(dayData.weather[0].main)}</span><br/>
        <span><b>MIN-TEMP: </b>{Number(dayData.main.temp_min-273.15).toFixed(1)}</span><br/>
        <span><b>MAX-TEMP: </b>{Number(dayData.main.temp_max-273.15).toFixed(1)}</span><br/>
        <h3>{dayData.weather[0].main}</h3>
        <span><b>DESCRIPTION: </b>{dayData.weather[0].description}</span>
      </div>
    </div>
  );
};

export default WeatherCard;


// Nh7lHcqzVqzbmjzLJG50gw==IrSVCemi1C2rHLGo
