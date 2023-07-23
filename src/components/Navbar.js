import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import ContextMenu from './ContextMenu';
import './Navbar.css';

const Navbar = () => {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <div className="navbar">
      <span className="title">Bitcoin Wallet</span>
      <button className="expand-btn" onClick={() => setIsToggled(true)}><FontAwesomeIcon icon={faEllipsisV} fontSize={34} color='#aeb8c4' /></button>
      <ContextMenu className={`${isToggled ? "fadein" : "fadeout"}`} onContextBgClick={() => setIsToggled(false)} />
    </div>
  )
}

export default Navbar;