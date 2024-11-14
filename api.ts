import axios from "axios";

const BASE_URL = "https://api.weatherapi.com/v1/forecast.json";
const API_Key = "df8d4c3da9814867a09121219241311";

export const getCityWeather = async (city: string) => {
  const response = await axios.get(BASE_URL, {
    params: {
      q: city,
      key: API_Key,
      days: 7,
    },
  });
  const location = response.data.location;
  const currentWeather = response.data.current;
  const todayData = response.data.forecast.forecastday[0];
  const weeklyData = response.data.forecast.forecastday;

  const hourlyData = todayData.hour.map((hour: any) => ({
    time: hour.time.split(" ")[1],
    temp_c: hour.temp_c,
  }));

  const dailyData = weeklyData.map((day: any) => ({
    date: day.date,
    rain: day.day.totalprecip_mm,
    sun: day.day.avgtemp_c,
  }));

  console.log("im hamar:", weeklyData);

  return {
    location,
    currentWeather,
    hourlyData,
    dailyData,
  };
};
