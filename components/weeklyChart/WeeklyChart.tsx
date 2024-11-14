"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
interface WeeklyChartProps {
  data: Array<{
    date: string;
    rain: number;
    sun: number;
  }>;
}

const WeeklyChart: React.FC<WeeklyChartProps> = ({ data }) => {
  const labels = data.map((day) => day.date);
  const rainData = data.map((day) => day.rain);
  const sunData = data.map((day) => day.sun);

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Rain (mm)",
        data: rainData,
        backgroundColor: "rgba(135, 206, 235, 0.6)",
        borderColor: "rgba(135, 206, 235, 1)",
        borderWidth: 1,
      },
      {
        label: "Sun (°C)",
        data: sunData,
        backgroundColor: "rgba(255, 215, 0, 0.6)",
        borderColor: "rgba(255, 215, 0, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: "Date",
        },
      },
      y: {
        title: {
          display: true,
          text: "Measurement",
        },
      },
    },
    plugins: {
      title: {
        display: true,
        text: "Weekly Rainfall and Sunshine",
      },
    },
  };

  return (
    <div className=" h-50 items-center justify-center bg-white mx-20 my-20 rounded-[14px] py-[20px] px-[26px]">
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default WeeklyChart;
