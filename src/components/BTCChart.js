import { useEffect, useState } from 'react';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';
import ElipseIcon from '../assets/Elipse.png';
import './BTCChart.css';

const CustomizedDot = (props) => {
  const { cx, cy, stroke, payload, value } = props;
  if (payload.dotVisible) {
    return (
      <svg x={cx - 10} y={cy - 10} width={20} height={20} fill="#ffc743" viewBox="0 0 1024 1024">
        <path d="M 517.12 53.248 q 95.232 0 179.2 36.352 t 145.92 98.304 t 98.304 145.92 t 36.352 179.2 t -36.352 179.2 t -98.304 145.92 t -145.92 98.304 t -179.2 36.352 t -179.2 -36.352 t -145.92 -98.304 t -98.304 -145.92 t -36.352 -179.2 t 36.352 -179.2 t 98.304 -145.92 t 145.92 -98.304 t 179.2 -36.352 z z z z" />
      </svg>
    );
  }
};

const BTCChart = ({ data, oneBTCPrice }) => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);

  useEffect(() => {
    if (data) {
      let min = data[0].uv;
      let max = data[0].uv;
      for (let i = 1; i < data.length; i++) {
        const e = data[i].uv;
        if (e < min) {
          min = e;
        }
        if (e > max) {
          max = e;
        }
      }
      setMinPrice(min);
      setMaxPrice(max);
    }
  }, [data])
  return (
    <div className="btc-chart-section">
      <div className="btc-range">
        <span>
          <span className="dot red"></span>Lower: ${minPrice / 1000}
        </span>
        <span>
          <span className="dot green"></span>
          Higher: ${maxPrice / 1000}
        </span>
      </div>
      <div className='chart'>
        <ResponsiveContainer width="95%" height="100%">
          <AreaChart
            width={200}
            height={60}
            data={data}
            margin={{
              top: 5,
              right: 10,
              left: 0,
              bottom: 5,
            }}
          >
            <defs>
              <linearGradient id="colorUv" x1="1" y1="1" x2="0" y2="0">
                <stop offset="30%" stopColor="#ff8f17" stopOpacity={0.5} />
                <stop offset="70%" stopColor="#ffc743" stopOpacity={0.5} />
              </linearGradient>
            </defs>
            <Area type="monotone" dataKey="uv" strokeWidth={3} stroke="url(#colorUv)" fill="#fff7ee" dot={<CustomizedDot />} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="btc-price">
        <img src={ElipseIcon} alt="Elipse" />
        1 BTC = ${oneBTCPrice}
      </div>
    </div>
  )
}

export default BTCChart;