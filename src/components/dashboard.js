import React from 'react';

import data from '../data/data.json';
import ColumnChart from './chart';

import '../styles/Dashboard.scss';

export default function Dashboard() {
  console.log(data);

  const days = data.map((item) => item.day);
  const amounts = data.map((item) => item.amount);

  console.log('days', days);
  console.log('amounts', amounts);

  return (
    <section className="dashboard">
      <div className="chart">
        <div className="title">
          <span>Spending - Last 7 days</span>
        </div>

        <div className="data-display">
          {/*           <ul>
            <li>
              <div className="amount">
                <div className='column'></div>
                <span className='tooltip'></span>
              </div>
              <p className="day">mon</p>
            </li>
            <li>
              <p className="amount"></p>
              <p className="day">tue</p>
            </li>
            <li>
            <div className="amount">
                <div className='column wed'></div>
                <span className='tooltip'></span>
              </div>
              <p className="day">wed</p>
            </li>
            <li>
              <p className="amount"></p>
              <p className="day">thu</p>
            </li>
            <li>
              <p className="amount"></p>
              <p className="day">fri</p>
            </li>
            <li>
              <p className="amount"></p>
              <p className="day">sat</p>
            </li>
            <li>
              <p className="amount"></p>
              <p className="day">sun</p>
              </li>
            </ul> */}
        <ColumnChart data={data} />
        </div>
      </div>

      <div className="total">
        <div className="month-total">
          <p className="title">Total this month</p>
          <span className="amount">$478.33</span>
        </div>

        <div className="amount-variation">
          <span className="amount">+2.4%</span>
          <p className="title">from last month</p>
        </div>
      </div>
    </section>
  );
}
