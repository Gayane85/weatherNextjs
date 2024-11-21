// "use client";
// import React from "react";
// import { Line } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   LineElement,
//   PointElement,
//   LinearScale,
//   CategoryScale,
//   Filler,
// } from "chart.js";

// ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Filler);

// const ChartForToday = () => {
//   const data = {
//     labels: [
//       "Точка 1",
//       "Точка 2",
//       "Точка 3",
//       "Точка 4",
//       "Точка 5",
//       "Точка 6",
//       "Точка 7",
//     ], // Метки на оси X
//     datasets: [
//       {
//         label: "Пример графика с 4 вершинами",
//         data: [20, 40, 25, 45, 30, 50, 35], // Данные для 4-х бугров
//         borderColor: "white", // Цвет линии
//         backgroundColor: "#8989D366", // Фиолетовая заливка
//         fill: true, // Включить заливку под линией
//         tension: 0.4, // Сглаживание линии
//         pointBackgroundColor: "white", // Цвет точек
//         pointBorderColor: "white",
//         pointRadius: 8, // Размер точек
//         pointHoverRadius: 10, // Размер точек при наведении
//       },
//     ],
//   };

//   const options = {
//     plugins: {
//       legend: {
//         display: false, // Скрыть легенду
//       },
//     },
//     scales: {
//       x: {
//         grid: {
//           display: false, // Скрыть сетку по оси X
//         },
//         ticks: {
//           display: false, // Скрыть подписи оси X
//         },
//       },
//       y: {
//         grid: {
//           display: false, // Скрыть сетку по оси Y
//         },
//         ticks: {
//           display: false, // Скрыть подписи оси Y
//         },
//       },
//     },
//   };

//   return (
//     <div className="w-full">
//       <Line data={data} options={options} />
//     </div>
//   );
// };

// export default ChartForToday;

"use client";
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Filler,
} from "chart.js";

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Filler);

const ChartForToday = () => {
  const data = {
    labels: ["Morning", "Afternoon", "Evening", "Night"], // Метки оси X
    datasets: [
      {
        label: "Temperature",
        data: [12, 18, 15, 10], // Данные температуры (высота точек)
        borderColor: "white", // Цвет линии
        backgroundColor: "rgba(105, 151, 206, 0.5)", // Цвет заливки
        fill: true, // Включить заливку
        tension: 0.4, // Сглаживание линии
        pointBackgroundColor: "white", // Цвет точек
        pointBorderColor: "white",
        pointRadius: 6, // Размер точек
        pointHoverRadius: 8, // Размер точек при наведении
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false, // Скрыть легенду
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Скрыть сетку по оси X
        },
        ticks: {
          color: "white", // Цвет подписей оси X
          font: {
            size: 14, // Размер текста
          },
        },
      },
      y: {
        grid: {
          display: false, // Скрыть сетку по оси Y
        },
        ticks: {
          display: false, // Скрыть подписи оси Y
        },
      },
    },
  };

  return (
    <div
      className="w-[462px] h-[138px]"
      style={{
        width: "462px",
        height: "138px",
      }}
    >
      <Line data={data} options={options} />
    </div>
  );
};

export default ChartForToday;
