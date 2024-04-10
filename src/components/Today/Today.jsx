import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteWaterTodayThunk,
  editWaterTodayThunk,
} from '../../store/water/waterThunk';
import {
  waterListSelector,
  waterErrorSelector,
  waterIsLoadingSelector,
} from 'store/water/waterSelector';

import css from './Today.module.css';
import Modal from 'components/Modal/Modal';
import { AddWaterModal } from 'components/AddWaterModal/AddWaterModal';
import Icons from '../../images/icons.svg';

const Today = () => {
  const dispatch = useDispatch();
  const data = useSelector(waterListSelector);

  const isLoading = useSelector(waterIsLoadingSelector);
  const error = useSelector(waterErrorSelector);

  const [idItem, setIdItem] = useState('');
  const [showModalDel, setShowModalDel] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);
  /*   useEffect(() => {
    dispatch(getWaterTodayThunk());
  }, [dispatch,idItem]); */
  const delHandleChange = e => {
    //console.log(e.currentTarget.dataset.iditems);
    document.body.style.overflow = 'hidden';
    setIdItem(e.currentTarget.dataset.iditems);
    setShowModalDel(true);
    console.log(showModalDel);

    // dispatch(deleteWaterTodayThunk(e.currentTarget.dataset.iditems));
  };
  const editHandleChange = e => {
    //console.log(e.currentTarget.dataset.iditems);
    document.body.style.overflow = 'hidden';
    setIdItem(e.currentTarget.dataset.iditems);
    setShowModalEdit(true);
    console.log(showModalDel);

    // dispatch(deleteWaterTodayThunk(e.currentTarget.dataset.iditems));
  };
  const onClose = () => {
    setShowModalDel(false);
    setShowModalEdit(false);
    document.body.style.overflow = '';
  };
  const deleteHandleChange = () => {
    setShowModalDel(false);
    document.body.style.overflow = '';
    setIdItem('');
    dispatch(deleteWaterTodayThunk(idItem));
  };

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
    setShowModalEdit(false);
    document.body.style.overflow = '';

    dispatch(editWaterTodayThunk({ amount, date: isoDate, id: idItem }));
  };

  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    setShowModal(!showModal);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className={css.todayContainer}>
        <div className={css.today_container}>
          <h2 className={css.todayTitle}>Today</h2>
          <div className={css.loader_container}>
            {isLoading && !error && <div className={css.loader}>loading</div>}
            {error && error}
          </div>
        </div>

        <ul className={css.list_waters}>
          {data.waterRecords &&
            data.waterRecords.map(({ id, consumedWater, date }) => {
              const dataS = new Date(date);
              return (
                <li className={css.list_item} key={id}>
                  <div className={css.waterItemblok}>
                    <svg className={css.iconGlas} width="26" height="26">
                      <use href={Icons + '#glas'}></use>
                    </svg>
                    <div className={css.contentItemblok}>
                      <p className={css.waterItem}>{consumedWater} ml</p>{' '}
                      <p className={css.timeItem}>
                        {dataS.getHours() < 10 && `0`}
                        {dataS.getHours()}:{dataS.getMinutes() < 10 && `0`}
                        {dataS.getMinutes()}{' '}
                        {dataS.getHours() < 12 ? `AM` : `PM`}
                      </p>
                    </div>
                  </div>
                  <div className={css.itemButtonblok}>
                    <button
                      className={css.editButton}
                      type="button"
                      data-iditems={id}
                      onClick={editHandleChange}
                    >
                      <svg className={css.iconEdit} width="16" height="16">
                        <use href={Icons + '#edit'}></use>
                      </svg>
                    </button>
                    <button
                      className={css.delButton}
                      type="button"
                      data-iditems={id}
                      onClick={delHandleChange}
                    >
                      <svg className={css.iconDel} width="16" height="13">
                        <use href={Icons + '#delete'}></use>
                      </svg>
                    </button>
                  </div>
                </li>
              );
            })}
        </ul>
        {showModalDel && (
          <Modal active={setShowModalDel} onClose={onClose}>
            <p>DELETE</p>
            <button type="button" onClick={onClose}>
              cancel
            </button>
            <button type="button" onClick={deleteHandleChange}>
              delete
            </button>
          </Modal>
        )}

        {showModalEdit && (
          <Modal active={showModalEdit} onClose={onClose}>
            <h2>Edit the entered amount of water</h2>

            {data.waterRecords &&
              data.waterRecords.map(({ id, consumedWater, date }) => {
                const dataS = new Date(date);
                if (id === idItem)
                  return (
                    <div className={css.list_item} key={id}>
                      <p>{consumedWater} ml</p>{' '}
                      <p>
                        {dataS.getHours() < 10 && `0`}
                        {dataS.getHours()}:{dataS.getMinutes() < 10 && `0`}
                        {dataS.getMinutes()}{' '}
                        {dataS.getHours() < 12 ? `AM` : `PM`}
                      </p>
                    </div>
                  );
                else return null;
              })}

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
          </Modal>
        )}
        <button className={css.button} onClick={() => handleClick()}>
          <div className={css.buttonblok}>
            <svg className={css.iconPlus} width="10" height="10">
              <use href={Icons + '#plus'}></use>
            </svg>
            <p className={css.buttonText}>Add Water</p>
          </div>
        </button>

        {showModal ? (
          <Modal active={showModal} onClose={closeModal}>
            <AddWaterModal closeModal={closeModal} />
          </Modal>
        ) : null}
      </div>
    </>
  );
};

export default Today;
