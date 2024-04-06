import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { waterSelector } from '../../store/water/waterSelector';
import { addWaterThunk } from '../../store/water/waterThunk';
import { Svg } from 'components/Icons/Icons';

export const AddWaterModal = ({ closeModal }) => {
  // const dose = useSelector(waterSelector);
  const dispatch = useDispatch();
  const [amount, setWaterDose] = useState(0);
  const [inputWaterDose, setInputWaterDose] = useState('');
  const [date, setTime] = useState(currentTime());

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
    setInputWaterDose(amount.toString());
  }, [amount]);

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

    const [hours, minutes] = date.split(':').map(Number);

    const currentDate = new Date();
    currentDate.setHours(hours);
    currentDate.setMinutes(minutes);

    const isoDate = currentDate.toISOString();

    dispatch(addWaterThunk({ amount, date: isoDate }));
  };
  return (
    <>
      <button type="button" onClick={closeModal}>
        <Svg id={'#close'} width={24} height={24} />
      </button>
      <h2>Add water</h2>
      <p>Choose a value:</p>
      <div>
        <p>Amount of water:</p>
        <div>
          <button onClick={decreaseDose} disabled={amount === 0}>
            -
          </button>
          {amount}ml
          <button onClick={increaseDose}>+</button>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <p>Recording time:</p>
          <div>
            <select value={date} onChange={handleTime}>
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
          <p>{amount}ml</p>
          <button type="submit">Save</button>
        </div>
      </form>
    </>
  );
};
