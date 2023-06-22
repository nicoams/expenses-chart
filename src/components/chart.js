import React from 'react';
import Chart from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: true,
      position: 'nearest',
      displayColors: false,
      callbacks: {
        title: () => {return ''},
        label: (context) => {
          const amount = context.dataset.data[context.dataIndex];
          return '$' + amount;
        },
      },
    },
  },
  scales: {
    y: {
      display: false,
    },
    x: {
      border: {
        display: false,
      },
      grid: {
        display: false,
      },
    },
  },
};

const ColumnChart = (props) => {
  const { data } = props;

  const tooltipOptions = Chart.defaults.plugins.tooltip;
  console.log('tool', tooltipOptions);

  const currentDay = new Date()
    .toLocaleDateString('en-US', { weekday: 'short' })
    .toLowerCase();
  console.log('currentDay', currentDay);
  const days = data.map((item) => item.day);
  const amounts = data.map((item) => item.amount);

  const userData = {
    labels: days,
    datasets: [
      {
        label: 'amount',
        data: amounts,
        backgroundColor: days.map((day) =>
          day === currentDay ? 'hsl(186, 34%, 60%)' : 'hsl(10, 79%, 65%)'
        ),
        hoverBackgroundColor: days.map((day) =>
          day === currentDay
            ? 'hsla(186, 34%, 60%, 0.7)'
            : 'hsla(10, 79%, 65%, 0.7)'
        ),
        borderSkipped: false,
        borderRadius: 5,
      },
    ],
  };

  return (
    <div>
      <Bar
        data={userData}
        options={options}
      />
    </div>
  );
};

export default ColumnChart;
