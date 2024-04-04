import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { waterSelector } from '../../store/water/waterSelector';
import { addWaterThunk } from '../../store/water/waterThunk';

export const AddWaterModal = () => {
  // const dose = useSelector(waterSelector);
  const dispatch = useDispatch();
  const [waterDose, setWaterDose] = useState(0);
  const [inputWaterDose, setInputWaterDose] = useState('');
  const [time, setTime] = useState(currentTime());

  function currentTime() {
    const now = new Date();
    const hours = String(now.getHours());
    const minutes = String(now.getMinutes()).padStart(2, '0');

    return `${hours}:${minutes}`;
  }

  const decreaseDose = () => {
    setWaterDose(prev => Math.max(prev - 50, 0));
  };
  const increaseDose = () => {
    setWaterDose(prev => prev + 50);
  };

  const handleTime = event => {
    setTime(event.target.value);
  };

  const handleInputWaterDoseChange = event => {
    setInputWaterDose(event.target.value);
  };

  const handleInputWaterDoseBlur = () => {
    let newWaterDose = Math.round(Number(inputWaterDose) / 50) * 50;
    setWaterDose(Number(inputWaterDose));
    setInputWaterDose(newWaterDose.toString());
  };

  useEffect(() => {
    setInputWaterDose(waterDose.toString());
  }, [waterDose]);

  const timeOptions = () => {
    const options = [];
    for (let h = 0; h < 24; h++) {
      for (let m = 0; m < 60; m += 5) {
        const timeString = `${h.toString()}:${m.toString().padStart(2, '0')}`;
        options.push(
          <option key={timeString} value={timeString}>
            {timeString}
          </option>
        );
      }
    }
    return options;
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(addWaterThunk({ waterDose, time }));
  };
  return (
    <>
      <h2>Add water</h2>
      <p>Choose a value:</p>
      <form onSubmit={handleSubmit}>
        <div>
          <p>Amount of water:</p>
          <div>
            <button onClick={decreaseDose} disabled={waterDose === 0}>
              -
            </button>
            {waterDose}ml
            <button onClick={increaseDose}>+</button>
          </div>
        </div>
        <div>
          <p>Recording time:</p>
          <div>
            <select value={time} onChange={handleTime}>
              {timeOptions()}
            </select>
          </div>
        </div>
        <div>
          <label>Enter the value of the water used:</label>
          <input
            type="text"
            value={inputWaterDose}
            onChange={handleInputWaterDoseChange}
            onBlur={handleInputWaterDoseBlur}
          />
        </div>
        <div>
          <p>{waterDose}ml</p>
          <button type="submit">Save</button>
        </div>
      </form>
    </>
  );
};
