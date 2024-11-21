"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import IconaMoon from "../icons/iconamoon/IconaMoon";
import BurgerIcon from "../icons/burgerIcon/BurgerIcon";
import SettingsList from "../settingsList/SettingsList";
import { useQuery } from "@tanstack/react-query";
import { DailyData, getCityWeather, HourlyDada, Location } from "@/api";

export interface WeatherData {
  location: Location;

  currentWeather: {
    temp_c: number;
    wind_kph: number;
    icon: string;
    description: string;
    pressure_hpa: number;
    humidity: number;
  };
  hourlyData: HourlyDada[];
  dailyData: DailyData[];
}

interface TodayWeatherForecastProps {
  addLocation: (
    location: Location,
    dailyData: DailyData[],
    hourlyData: HourlyDada[]
  ) => void;
}

const TodayWeatherForecast: React.FC<TodayWeatherForecastProps> = ({
  addLocation,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [city, setCity] = useState("");
  const [queryCity, setQueryCity] = useState("Yerevan");
  const { data, isLoading, error } = useQuery<WeatherData>({
    queryKey: ["weather", queryCity],
    queryFn: () => getCityWeather(queryCity),
    enabled: !!queryCity,
  });

  useEffect(() => {
    if (data) {
      const location = {
        name: data.location.name,
        country: data.location.country,
        temperature: data.currentWeather.temp_c,
        wind_speed: data.currentWeather.wind_kph,
        icon: data.currentWeather.icon,
        description: data.currentWeather.description,
        pressure_hpa: data.currentWeather.pressure_hpa,
        humidity: data.currentWeather.humidity,
      };

      addLocation(location, data.dailyData, data.hourlyData);
      setCity("");
    }
  }, [data]);
  console.log("Today", data);

  const handleSearchCity = (e: React.FormEvent): void => {
    e.preventDefault();
    setQueryCity(city);
  };

  const burgerClick = (): void => {
    setIsOpen((prev) => !prev);
  };
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>Error: {error.message}</h1>;
  }

  return (
    <div className="relative w-full h-[542px]">
      <Image
        src="/todayForecast.jpeg"
        alt="Weather Forecast Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="absolute inset-0 rounded-[14px]"
      />

      <div
        onClick={burgerClick}
        className="absolute z-30 cursor-pointer right-4 mt-[1.5rem] mr-[1.5rem] top-4"
      >
        <BurgerIcon />
      </div>
      <div className="absolute z-20 top-1 right-0 overflow-hidden">
        <SettingsList isOpen={isOpen} />
      </div>
      <div className="relative  z-10 mt-[3.1rem] flex items-center justify-center h-full bg-black/30 rounded-[14px]">
        <div className="flex flex-col  items-start text-left text-white max-w-[40rem]">
          <h1 className="text-[2rem] pt-[3.7rem]  font-normal font-serif sm:text-5xl lg:text-6xl">
            Today Weather Forecast
          </h1>
          <p className="mt-4 text-xl sm:text-xl lg:text-2xl font-normal font-serif">
            Get the latest weather forecast for today with up-to-date
            information on temperature, precipitation, and more.
          </p>

          <div className="relative mt-8 mb-[15.1rem] w-full">
            <form onSubmit={handleSearchCity}>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Search for a Place"
                className="w-[33.3rem] py-3 pl-4 pr-10 text-base text-[#B5ADAD] bg-[#1810104D]/30 border border-gray-20 rounded-[14px] shadow-md focus:outline-none"
              />
              <span className="absolute inset-y-0 flex items-center right-[9rem]  text-[#B5ADAD]">
                <IconaMoon />
              </span>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodayWeatherForecast;
