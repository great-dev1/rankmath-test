import EditIcon from '../assets/context_edit.png';
import InfoIcon from '../assets/context_info.png';
import ShareIcon from '../assets/context_share.png';
import RemoveIcon from '../assets/context_remove.png';
import './ContextMenu.css';

const ContextMenu = ({ className, onContextBgClick }) => {
  return (
    <div className={"context-bg " + className} onClick={() => onContextBgClick()}>
      <div className="contextmenu" onClick={e => e.stopPropagation()}>
        <div className="item"><span>Edit</span><img src={EditIcon} alt="Context Edit" /></div>
        <div className="item"><span>Courier info</span><img src={InfoIcon} alt="Context Info" /></div>
        <div className="item"><span>Share</span><img src={ShareIcon} alt="Context Share" /></div>
        <div className="item last red"><span>Remove</span><img src={RemoveIcon} alt="Context Remove" /></div>
      </div>
    </div>
  )
}

export default ContextMenu;