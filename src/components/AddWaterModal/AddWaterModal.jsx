import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { waterSelector } from '../../store/water/waterSelector';
import { addWaterThunk } from '../../store/water/waterThunk';
import { Svg } from 'components/Icons/Icons';
import css from './AddWaterModal.module.css';

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

  const handleSubmit = async event => {
    event.preventDefault();

    const [hours, minutes] = date.split(':').map(Number);
    const currentDate = new Date();
    currentDate.setHours(hours);
    currentDate.setMinutes(minutes);
    const isoDate = currentDate.toISOString();

    try {
      const result = await dispatch(addWaterThunk({ amount, date: isoDate }));
      if (result.meta.requestStatus === 'fulfilled') {
        closeModal();
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className={css.container}>
      <div className={css.firstblock}>
        <h2 className={css.title}>Add water</h2>
        <button className={css.exit} type="button" onClick={closeModal}>
          <Svg id={'#close'} width={24} height={24} />
        </button>
      </div>

      <p className={css.description}> Choose a value:</p>

      <div className={css.secondblock}>
        <p className={css.desc}>Amount of water:</p>
        <div className={css.amount}>
          <button
            className={css.btn}
            onClick={decreaseDose}
            disabled={amount === 0}
          >
            <Svg id={'#minus'} width={14} height={2} className={css.icon} />
          </button>
          <span className={css.span}>{amount}ml</span>
          <button className={css.btn} onClick={increaseDose}>
            <Svg id={'#plus'} width={14} height={14} className={css.icon} />
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className={css.thirdblock}>
          <p className={css.desc}>Recording time:</p>
          <div>
            <select value={date} onChange={handleTime} className={css.select}>
              {timeOptions()}
            </select>
          </div>
        </div>

        <div className={css.fourthblock}>
          <label className={css.label}>
            Enter the value of the water used:
          </label>
          <input
            className={css.input}
            type="text"
            value={inputWaterDose}
            onChange={handleInputWaterDoseChange}
            onBlur={handleInputWaterDoseBlur}
          />
        </div>

        <div className={css.fifthblock}>
          <p className={css.amn}>{amount}ml</p>
          <button className={css.save} type="submit">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};
