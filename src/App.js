import { useEffect, useState } from 'react';
import { Navbar, BTCButton, BTCChart, Wallet } from './components'
import './App.css';

const tabs = ['Day', 'Week', 'Month', 'Year'];

function App() {
  const [tab, setTab] = useState('Day');
  const [isToggled, setIsToggled] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    fetch('/data.json').then(res => res.json()).then(data => setData(data))
  }, [])

  const { BTCAmount, totalAmount, discount, oneBTCPrice } = data;
  return (
    <div className="app-container">
      <Navbar />
      <div className="app-content">
        <Wallet isToggled={isToggled} setIsToggled={setIsToggled} BTCAmount={BTCAmount} totalAmount={totalAmount} discount={discount} />
        <div className={`${isToggled ? "fadein" : "fadeout"}`}>
          <div className="tabs">
            {tabs.map((e, i) => <div className={`tab ${e === tab ? 'active' : null}`} key={i} onClick={() => setTab(e)}>{e}</div>)}
          </div>
          <BTCChart data={data[tab]} oneBTCPrice={oneBTCPrice} />
          <div className="trade-btns">
            <div className="trade-btn buy">
              <BTCButton type="buy" />
            </div>
            <div className="trade-btn">
              <BTCButton type="sell" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;