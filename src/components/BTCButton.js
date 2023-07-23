import BuyIcon from '../assets/ICON_DOLLAR_BUY.png';
import SellIcon from '../assets/ICON_DOLLAR_SELL.png';
import './BTCButton.css';

const BTCButton = ({ type }) => {
  return (
    <div className="btc-btn">
      <img src={type === 'buy' ? BuyIcon : SellIcon} />
      {type === 'buy' ? <span>Buy BTC</span> : <span>Sell BTC</span>}
    </div>
  )
}

export default BTCButton;