import { AddWaterModal } from 'components/AddWaterModal/AddWaterModal';
import Modal from 'components/Modal/Modal';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { todaySelector } from '../../store/water/waterSelector';
import { getWaterTodayThunk } from '../../store/water/waterThunk';
import css from './WaterProgress.module.css';

export const WaterProgress = () => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const waterData = useSelector(todaySelector);

  useEffect(() => {
    dispatch(getWaterTodayThunk());
  }, [dispatch]);

  const handleClick = () => {
    setShowModal(!showModal);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className={css.flex}>
        <div>
          <p className={css.title}>Today</p>
          <div className={css.progressBar}>
            {!waterData ? (
              <div className={css.progress} style={{ width: `0%` }}></div>
            ) : (
              <div
                className={css.progress}
                style={{ width: `${Math.min(waterData.waterPercent, 100)}%` }}
              ></div>
            )}
          </div>
        </div>
        <button className={css.button} onClick={() => handleClick()}>
          Add Water
        </button>
      </div>

      {showModal ? (
        <Modal active={showModal} onClose={closeModal}>
          <AddWaterModal closeModal={closeModal} />
        </Modal>
      ) : null}
    </>
  );
};
