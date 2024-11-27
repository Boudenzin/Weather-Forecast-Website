import React from 'react';
import { Line }from 'react-chartjs-2';
import './WeatherChart.css';


const WeatherChart = ({ dadoFuturo }) => {
    const horas = dadoFuturo.list.slice(0,12).map(item => {
        const data = new Date(item.dt * 1000); //TimeStamp convertido para data multiplicando por 1000
        return '${data.getHours()}:00';
    });

    const temperaturas = forecastData.list.slice(0,12).map(item => item.main.temp);
    const data = {
        labels: horas,
        datasets: [
          {
            label: 'Temperatura (°C)',
            data: temperaturas,
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderWidth: 2,
            pointBackgroundColor: 'rgba(75, 192, 192, 1)',
          },
        ],
      };
    
      const options = {
        responsive: true,
        plugins: {
          legend: {
            display: true,
            position: 'top',
          },
        },
      };
    
      return (
        <div className="weather-chart">
          <h3>Previsão para as próximas 12 horas</h3>
          <Line data={data} options={options} />
        </div>
      );
};

export default WeatherChart