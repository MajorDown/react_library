import React, { useState } from 'react';

const VisualTap = () => {
  const [bpm, setBpm] = useState(120);
  const [intervalId, setIntervalId] = useState(null);
  const [isTapping, setIsTapping] = useState(false);

  const handleStart = () => {
    const newIntervalId = setInterval(tap, calculateInterval());
    setIntervalId(newIntervalId);
    setIsTapping(true);
  };

  const handleStop = () => {
    clearInterval(intervalId);
    setIntervalId(null);
    setIsTapping(false);
  };

  const calculateInterval = () => {
    return 60000 / bpm;
  };

  const tap = () => {
    const clic = document.getElementById('clic');
    clic.style.background = 'green';
    setTimeout(() => {
      clic.style.background = 'black';
    }, 200);
  };

  const handleBpmChange = (event) => {
    setBpm(event.target.value);
    if (isTapping) {
      handleStop();
      handleStart();
    }
  };

  const styles = {
    visualTap: {
      width: '375px',
      height: '375px',
      background: 'black',
      borderRadius: '10px',
      border: 'solid 3px #477375',
      display: 'flex',
      flexDirection: 'column',
      color: 'white',
    },
    appTitle: {
      borderRadius: '10px',
      borderBottom: 'solid 3px #477375',
      textAlign: 'center',
      fontFamily: "'Rock Salt', cursive",
      color: 'white',
    },
    bpmBox: {
      borderRadius: '10px',
      display: 'flex',
      height: '10%',
      justifyContent: 'center',
      padding: '5% 0px 5% 0px',
      fontSize: '28px',
    },
    bpmInput: {
      width: '15%',
      background: 'black',
      border: 'none',
      color: 'white',
      fontSize: '20px',
    },
    tapBox: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '5%',
    },
    button: {
      width: '25%',
      height: '15%',
      borderRadius: '10px',
      background: 'white',
      color: 'black',
      fontWeight: 'bold',
      border: 'solid #477375 3px',
      cursor: 'pointer',
    },
    clic: {
      margin: '0px auto',
      width: '200px',
      height: '200px',
      borderRadius: '50%',
      border: 'none',
      backgroundColor: 'black',
    },
  };

  return (
    <div style={styles.visualTap}>
      <div style={styles.appTitle}>- Visual Tap -</div>
      <div style={styles.bpmBox}>
        <label htmlFor="bpm">bpm : </label>
        <input
          type="number"
          id="bpm"
          value={bpm}
          onChange={handleBpmChange}
          style={styles.bpmInput}
        />
      </div>
      <div style={styles.tapBox}>
        <button id="start" onClick={handleStart} style={styles.button}>
          start
        </button>
        <button id="stop" onClick={handleStop} style={styles.button}>
          stop
        </button>
        <div id="clic" style={styles.clic}></div>
      </div>
    </div>
  );
};

export default VisualTap;
