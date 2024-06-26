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
import { Svg } from 'components/Icons/Icons';
import { getWaterMonthThunk } from 'store/month/monthThunk';
import { format } from 'date-fns';

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

    // dispatch(deleteWaterTodayThunk(e.currentTarget.dataset.iditems));
  };
  const editHandleChange = e => {
    //console.log(e.currentTarget.dataset.iditems);
    document.body.style.overflow = 'hidden';
    setIdItem(e.currentTarget.dataset.iditems);
    setShowModalEdit(true);

    // dispatch(deleteWaterTodayThunk(e.currentTarget.dataset.iditems));
  };
  const onClose = () => {
    setShowModalDel(false);
    setShowModalEdit(false);
    document.body.style.overflow = '';
  };
  const deleteHandleChange = async () => {
    setShowModalDel(false);
    document.body.style.overflow = '';
    setIdItem('');
    await dispatch(deleteWaterTodayThunk(idItem));
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
    if(amount ===0){
      return
    }
    dispatch(editWaterTodayThunk({ amount, date: isoDate, id: idItem }));
  };

  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    setShowModal(!showModal);
  };

  const closeModal = () => {
    setShowModal(false);
    setShowModalEdit(false);
    setShowModalDel(false);
  };
  useEffect(() => {
    if (!data?.waterRecords && data.waterRecords?.length === 0) return;
    const fetchData = async () => {
      try {
        await dispatch(getWaterMonthThunk(format(new Date(), 'yyyy-MM')));
      } catch (error) {
        console.error('Error fetching month data:', error);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data.waterRecords]);

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
          {data.waterRecords?.length > 0 ? (
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
            })
          ) : (
            <li>
              <p className={css.waterItem}>No notes yet</p>
            </li>
          )}
        </ul>
        {showModalDel && (
          <Modal active={setShowModalDel} onClose={onClose}>
            <div className={css.containerDel}>
              <div className={css.firstblock}>
                <h2 className={css.title}>Delete entry</h2>
                <button className={css.exit} type="button" onClick={closeModal}>
                  <Svg id={'#close'} width={24} height={24} />
                </button>
              </div>
              <p className={css.textDel}>
                Are you sure you want to delete the entry?
              </p>
              <div className={css.containerBtnDel}>
                <button
                  className={css.btnCancellDel}
                  type="button"
                  onClick={onClose}
                >
                  Cancel
                </button>
                <button
                  className={css.btnDeletelDel}
                  type="button"
                  onClick={deleteHandleChange}
                >
                  Delete
                </button>
              </div>
            </div>
          </Modal>
        )}

        {showModalEdit && (
          <Modal active={showModalEdit} onClose={onClose}>
            <div className={css.container}>
              <div className={css.firstblock}>
                <h2 className={css.title}>Edit the entered amount of water</h2>
                <button className={css.exit} type="button" onClick={closeModal}>
                  <Svg id={'#close'} width={24} height={24} />
                </button>
              </div>

              {data.waterRecords &&
                data.waterRecords.map(({ id, consumedWater, date }) => {
                  const dataS = new Date(date);
                  if (id === idItem)
                    return (
                      <div className={css.list_item} key={id}>
                        <div className={css.waterItemblokEdit}>
                          <svg className={css.iconGlas} width="26" height="26">
                            <use href={Icons + '#glas'}></use>
                          </svg>
                          <div className={css.contentItemblokEdit}>
                            <p className={css.waterItem}>{consumedWater} ml</p>{' '}
                            <p className={css.timeItem}>
                              {dataS.getHours() < 10 && `0`}
                              {dataS.getHours()}:
                              {dataS.getMinutes() < 10 && `0`}
                              {dataS.getMinutes()}{' '}
                              {dataS.getHours() < 12 ? `AM` : `PM`}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  else return null;
                })}

              <p className={css.description}>Correct entered data:</p>
              <div className={css.secondblock}>
                <p className={css.desc}>Amount of water:</p>
                <div className={css.amount}>
                  <button
                    className={css.btn}
                    onClick={decreaseDose}
                    disabled={amount === 0}
                  >
                    <Svg id={'#minus'} width={10} height={14} />
                  </button>
                  <span className={css.span}>{amount}ml</span>
                  <button className={css.btn} onClick={increaseDose}>
                    <Svg id={'#plus'} width={14} height={14} />
                  </button>
                </div>
              </div>
              <form onSubmit={handleSubmit}>
                <div className={css.thirdblock}>
                  <p className={css.desc}>Recording time:</p>
                  <div>
                    <select
                      value={date}
                      onChange={handleTime}
                      className={css.select}
                    >
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
