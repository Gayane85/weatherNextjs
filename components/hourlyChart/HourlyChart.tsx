"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface HourlyChartProps {
  data: { time: string; temp_c: number }[];
}
const HourlyChart: React.FC<HourlyChartProps> = ({ data }) => {
  const chartData = {
    labels: data.map((hour) => hour.time),
    datasets: [
      {
        label: "Temperature (°C)",
        data: data.map((hour) => hour.temp_c),
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: "Time",
        },
      },
      y: {
        title: {
          display: true,
          text: "Temperature (°C)",
        },
        suggestedMin: 0,
        suggestedMax: 40,
      },
    },
    plugins: {
      title: {
        display: true,
        text: "Hourly Forecast",
      },
    },
  };

  return (
    <div className="w-[793px] h-[436px] top-[855px] mt-10 left-[288px] bg-white rounded-[14px] bg-white/90 px-[126px] py-[34px] gap-[10px] ">
      <Line data={chartData} options={options} />
    </div>
  );
};

export default HourlyChart;
