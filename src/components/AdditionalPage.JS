"use client";
import React, { useState, useEffect } from 'react';
import { Chart, BarController, LinearScale, CategoryScale, BarElement, LineController, LineElement, PointElement, ArcElement, DoughnutController } from 'chart.js';

export default function AdditionalPage() {
  const [chartType, setChartType] = useState('ventas');

  useEffect(() => {
    Chart.register(BarController, LinearScale, CategoryScale, BarElement, LineController, LineElement, PointElement, ArcElement, DoughnutController);

    if (chartType === 'ventas') {
      const barCtx = document.getElementById('barChart').getContext('2d');
      new Chart(barCtx, {
        type: 'bar',
        data: {
          labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
          datasets: [{
            label: 'Ventas',
            data: [12, 19, 3, 5, 2],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
          }],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }

    if (chartType === 'ganancias') {
      const lineCtx = document.getElementById('lineChart').getContext('2d');
      new Chart(lineCtx, {
        type: 'line',
        data: {
          labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
          datasets: [{
            label: 'Ganancias',
            data: [10, 20, 15, 30, 25],
            borderColor: 'rgba(255, 99, 132, 1)',
            fill: false,
          }],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }

    if (chartType === 'inventario') {
      const pieCtx = document.getElementById('pieChart').getContext('2d');
      new Chart(pieCtx, {
        type: 'doughnut',
        data: {
          labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
          datasets: [{
            label: 'Inventario',
            data: [30, 20, 50, 10, 40],
            backgroundColor: ['red', 'blue', 'green', 'yellow', 'purple'],
          }],
        },
      });
    }
  }, [chartType]);

  return (
    <div className="container mx-auto p-4">
      <header className="bg-blue-600 p-2 text-white text-sm">
        <nav className="flex justify-around">
          <button onClick={() => setChartType('ventas')} className="bg-blue-400 p-1 rounded hover:bg-blue-500">Informe de Ventas</button>
          <button onClick={() => setChartType('ganancias')} className="bg-blue-400 p-1 rounded hover:bg-blue-500">Informe de Ganancias</button>
          <button onClick={() => setChartType('inventario')} className="bg-blue-400 p-1 rounded hover:bg-blue-500">Informe de Inventario</button>
        </nav>
      </header>
      <div className="mt-4">
        {chartType === 'ventas' && (
          <>
            <h2 className="text-lg mb-2">Informe de Ventas</h2>
            <div className="w-1/3 mx-auto">
              <canvas id="barChart" width="300" height="150"></canvas>
            </div>
          </>
        )}
        {chartType === 'ganancias' && (
          <>
            <h2 className="text-lg mb-2">Informe de Ganancias</h2>
            <div className="w-1/3 mx-auto">
              <canvas id="lineChart" width="300" height="150"></canvas>
            </div>
          </>
        )}
        {chartType === 'inventario' && (
          <>
            <h2 className="text-lg mb-2">Informe de Inventario</h2>
            <div className="w-1/3 mx-auto">
              <canvas id="pieChart" width="300" height="150"></canvas>
            </div>
          </>
        )}
      </div>
    </div>
  );
}