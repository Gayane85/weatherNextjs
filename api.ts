import axios from "axios";

const BASE_URL = "https://api.weatherapi.com/v1/forecast.json";
const API_Key = "df8d4c3da9814867a09121219241311";

export interface Location {
  name: string;
  country: string;
  temperature: number;
  wind_speed: number;
  icon: string;
  humidity: number;
  pressure_hpa: number;
  description: string;
}
export interface CurrentWeather {
  temp_c: number;
  wind_kph: number;
  icon: string;
  humidity: number;
  pressure_hpa: number;
  uv_index: number;
  description: string;
}
export interface HourlyDada {
  time: string;
  temp_c: number;
  icon: string;
}
export interface DailyData {
  data: string;
  maxTemp: number;
  minTemp: number;
  icon: string;
  conditionText: string;
  dayOfWeek: string;
  dayOfMonth: string;
  month: string;
  rain: number;
  sun: number;
  rainChance: number;
  uvIndex: number;
  avgTemp: number;
}
export interface WeatherData {
  location: Location;
  currentWeather: CurrentWeather;
  dailyData: DailyData[];
  hourlyData: HourlyDada[];
}

export const getCityWeather = async (city: string): Promise<WeatherData> => {
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
    icon: hour.condition.icon,
    text: hour.condition.text,
  }));

  const dailyData = weeklyData.map((day: any) => {
    const date = new Date(day.date);
    const dayOfWeek = date.toLocaleString("default", { weekday: "long" });
    const dayOfMonth = date.getDate();
    const month = date.toLocaleString("default", { month: "long" });
    const icon = day.day.condition.icon;
    const conditionText = day.day.condition.text;
    const rain = day.day.totalprecip_mm;
    const sun = day.day.avgtemp_c;
    const maxTemp = day.day.maxtemp_c;
    const minTemp = day.day.mintemp_c;
    const rainChance = day.day.daily_chance_of_rain;
    const uvIndex = day.day.uv;
    const avgTemp = day.day.avgtemp_c;

    const hourlyTemps = todayData.hour.map((hour: any) => ({
      time: hour.time.split(" ")[1],
      temp_c: hour.temp_c,
    }));

    return {
      date: day.date,
      rain,
      sun,
      dayOfWeek,
      dayOfMonth,
      month,
      maxTemp,
      minTemp,
      hourlyTemps,
      conditionText,
      icon,
      rainChance,
      uvIndex,
      avgTemp,
    };
  });

  return {
    location,
    currentWeather: {
      temp_c: currentWeather.temp_c,
      wind_kph: currentWeather.wind_kph,
      icon: currentWeather.condition.icon,
      humidity: currentWeather.humidity,
      pressure_hpa: currentWeather.pressure_mb,
      uv_index: currentWeather.uv,
      description: currentWeather.condition.text,
    },
    hourlyData,
    dailyData,
  };
};
