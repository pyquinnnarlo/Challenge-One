
import { Popup } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'; // Import Semantic UI CSS
import HoverSound from '../assets/interface-124464.mp3';

function Data() {
  const playHoverSound = () => {
    const audio = new Audio(HoverSound);
    audio.play();
  };

  return (
    <div className="data-wrapper">
      <Popup
        trigger={<div className="data" onMouseEnter={playHoverSound}></div>}
        content="Mars is smaller than Earth."
        position="top center"
        style={{ background: 'rgba(63, 63, 63)', color: 'white', border: 'rgba(63, 63, 63)' }}
      />

      <Popup
        trigger={<div className="data" onMouseEnter={playHoverSound}></div>}
        content="Mars has no rings."
        position="top center"
        style={{ background: 'rgba(63, 63, 63)', color: 'white', border: 'rgba(63, 63, 63)' }}
      />

      <Popup
        trigger={<div className="data" onMouseEnter={playHoverSound}></div>}
        content="A Martian day is a little longer than Earth's; Mars' year is almost two times Earth's."
        position="top center"
        style={{ background: 'rgba(63, 63, 63)', color: 'white', border: 'rgba(63, 63, 63)' }}
      />

      <Popup
        trigger={<div className="data" onMouseEnter={playHoverSound}></div>}
        content="Mars' surface has been altered by volcanoes, impact, winds, and crustal movement."
        position="top center"
        style={{ background: 'rgba(63, 63, 63)', color: 'white', border: 'rgba(63, 63, 63)' }}
      />
    </div>
  );
}

export default Data;
