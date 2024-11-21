"use client";
import { useQuery } from "@tanstack/react-query";
import IconaMoon from "../icons/iconamoon/IconaMoon";
import { DailyData, getCityWeather, HourlyDada, Location } from "@/api";
import { useEffect, useState } from "react";

export interface WeatherData {
  location: Location;

  currentWeather: {
    temp_c: number;
    wind_kph: number;
    icon: string;
  };
  hourlyData: HourlyDada[];
  dailyData: DailyData[];
}

interface SearchPlaceProps {
  addLocation: (
    location: Location,
    hourlyData: HourlyDada[],
    dailyData: DailyData[]
  ) => void;
}

const SearchPlace: React.FC<SearchPlaceProps> = ({ addLocation }) => {
  const [city, setCity] = useState("");
  const [queryCity, setQueryCity] = useState("Yerevan");

  const { data, error, isLoading } = useQuery<WeatherData>({
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
      };

      addLocation(location, data.hourlyData, data.dailyData);

      setCity("");
    }
  }, [data]);

  console.log("searchPlace:", data);
  const handleKeyEnter = (e: React.FormEvent): void => {
    e.preventDefault();
    setQueryCity(city);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching data</div>;
  }

  return (
    <div className="relative flex flex-col mx-auto sm:w-[500px] md:w-[600px] lg:w-[711px] w-[711px] h-[284px] items-center p-4 rounded-[14px] bg-opacity-10 backdrop-blur-[5px] bg-[#BACDD299] border focus:bg-[linear-gradient(91.39deg,_rgba(188,_93,_93,_0.4)_-_43.44%,_rgba(24,_16,_16,_0.2)_-_43.44%)] focus:outline-none">
      <h4 className="text-center text-[32px] sm:text-[28px] md:text-[32px] text-white w-[232px] h-[44px] pt-[37px] mx-auto">
        Find a Forecast
      </h4>
      <div className="relative">
        <form onSubmit={handleKeyEnter}>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-[499px] h-[44px] sm:w-[80%] md:w-[70%] lg:w-[499px] px-10 py-22 mt-[60px] rounded-lg border border-gray-300 bg-gray-600 bg-opacity-30 text-white placeholder-white"
            placeholder="Search for a Place"
          />

          <div className="absolute right-4 top-20 sm:right-16 sm:top-20 md:right-4 md:top-20  transform -translate-y-1/2">
            <IconaMoon />
          </div>
        </form>
      </div>

      <div className="blur-[20px] bg-[#BACDD299] rounded-[28px]"></div>
    </div>
  );
};

export default SearchPlace;
