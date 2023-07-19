import React, { useState, useEffect } from 'react';
import CalcButton from '../components/button';
import buttons from '../utils/data/buttonData';
import Screen from '../components/screen';

export default function Calculator() {
  const [display, setDisplay] = useState(0);
  const [storedNum, setStoredNum] = useState('');

  useEffect(() => {
    setDisplay(0);
  }, []);

  const handleClick = (obj) => {
    if (obj.keyType === 'num') {
      setDisplay((prevState) => `${prevState}${obj.value}`);
    }
    if (obj.keyType === 'op') {
      setStoredNum(display);
      setDisplay(0);
    }
    if (obj.keyType === 'equal') {
      const result = display + storedNum;
      setDisplay(result);
    } else setDisplay((prevState) => prevState + 111111);
    console.warn(display);
  };

  return (
    <>
      <div>
        <Screen value={display} />
      </div>
      <div className="calc-btns">
        {buttons?.map((item) => (
          <CalcButton value={item.value} key={item.value} keyType={item.keyType} onClick={handleClick} />
        ))}
      </div>
    </>
  );
}
