import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getWaterTodayThunk,
  deleteWaterTodayThunk,
  editWaterTodayThunk,
} from '../../store/water/waterThunk';
import { waterListSelector,waterErrorSelector,waterIsLoadingSelector } from 'store/water/waterSelector';

import css from './Today.module.css';
import Modal from 'components/Modal/Modal';

const Today = () => {
  const dispatch = useDispatch();
  const data = useSelector(waterListSelector);

  const isLoading = useSelector(waterIsLoadingSelector);
  const error = useSelector(waterErrorSelector);

  const [idItem,setIdItem]=useState('');
  const [showModalDel, setShowModalDel] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);
/*   useEffect(() => {
    dispatch(getWaterTodayThunk());
  }, [dispatch,idItem]); */
  const delHandleChange = e => {
    //console.log(e.currentTarget.dataset.iditems);
    document.body.style.overflow = "hidden";
    setIdItem(e.currentTarget.dataset.iditems)
    setShowModalDel(true);
    console.log(showModalDel);

   // dispatch(deleteWaterTodayThunk(e.currentTarget.dataset.iditems));
  };
  const editHandleChange = e => {
    //console.log(e.currentTarget.dataset.iditems);
    document.body.style.overflow = "hidden";
    setIdItem(e.currentTarget.dataset.iditems)
    setShowModalEdit(true);
    console.log(showModalDel);

   // dispatch(deleteWaterTodayThunk(e.currentTarget.dataset.iditems));
  };
  const onClose = () => {
    setShowModalDel(false)
    setShowModalEdit(false)
    document.body.style.overflow = "";
  }
  const deleteHandleChange =()=>{
    setShowModalDel(false);
    document.body.style.overflow = "";
    setIdItem('')
    dispatch(deleteWaterTodayThunk(idItem));
  }




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
    setShowModalEdit(false)

    dispatch(editWaterTodayThunk({ amount, date: isoDate, id: idItem}));
  };
  



  return (
    <>
      <div>
        <h2>Today</h2>
        <ul className={css.list_waters}>
          {data.waterRecords
            && data.waterRecords.map(({ id, consumedWater, date }) => {
                const dataS = new Date(date);
                return (
                  <li className={css.list_item} key={id}>
                    <p>{consumedWater} ml</p>{' '}
                    <p>
                      {dataS.getHours() < 10 && `0`}
                      {dataS.getHours()}:{dataS.getMinutes() < 10 && `0`}
                      {dataS.getMinutes()}
                    </p>
                    <button type="button" data-iditems={id} onClick={editHandleChange}>edit</button>
                    <button type="button" data-iditems={id} onClick={delHandleChange}>
                      delete
                    </button>
                  </li>
                );
              })
            }
        </ul>
        {isLoading && !error && <b>Request in progress...</b>}
      {error && error}
        {showModalDel && <Modal active={setShowModalDel} onClose={onClose}>
          <p>DELETE</p>
          <button type="button" onClick={onClose}>cancel</button>
          <button type="button" onClick={deleteHandleChange}>delete</button>
        </Modal>}


        {showModalEdit && <Modal active={showModalEdit} onClose={onClose}>

          <h2>Edit the entered amount of water</h2>
          
          {data.waterRecords
            && data.waterRecords.map(({ id, consumedWater, date }) => { 
                const dataS = new Date(date);
                if(id===idItem)
                return (
                  <div className={css.list_item} key={id}>
                    <p>{consumedWater} ml</p>{' '}
                    <p>
                      {dataS.getHours() < 10 && `0`}
                      {dataS.getHours()}:{dataS.getMinutes() < 10 && `0`}
                      {dataS.getMinutes()}
                    </p>

                  </div>
                );
              })
            }
          
      <p>Correct entered data:</p>
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

        </Modal>}
      </div>
    </>
  );
};

export default Today;
