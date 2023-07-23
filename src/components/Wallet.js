import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import IconBTC from '../assets/ICON_BITCOIN.png';
import './Wallet.css';

const Wallet = ({ isToggled, setIsToggled, BTCAmount, totalAmount, discount }) => {
  return (
    <div className="wallet">
      <div className="coin-type">
        <div className="coin-logo">
          <img src={IconBTC} alt="Icon Bitcoin" />
          <span>Bitcoin</span>
        </div>
        <span className="coin-symbol">BTC</span>
      </div>
      <div className="coin-amount">{BTCAmount} BTC</div>
      <div className="total-amount">
        <span>${totalAmount} USD</span>
        <div className="discount">- {discount}%</div>
      </div>
      <button>
        <FontAwesomeIcon icon={isToggled ? faAngleDown : faAngleUp} color='#aeb8c4' fontSize={30} onClick={() => {
          setIsToggled(!isToggled)
        }} />
      </button>
    </div>
  )
}

export default Wallet;