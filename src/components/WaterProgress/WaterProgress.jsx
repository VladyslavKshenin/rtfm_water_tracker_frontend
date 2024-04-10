import { AddWaterModal } from 'components/AddWaterModal/AddWaterModal';
import Modal from 'components/Modal/Modal';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { todaySelector, waterSelector } from '../../store/water/waterSelector';
import { waterRateSelector } from '../../store/waterRate/waterRateSelector';
import { getWaterTodayThunk } from '../../store/water/waterThunk';
import { Svg } from 'components/Icons/Icons';
import css from './WaterProgress.module.css';

export const WaterProgress = () => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const waterData = useSelector(todaySelector);
  const newDose = useSelector(waterSelector);
  const waterRate = useSelector(waterRateSelector);

  useEffect(() => {
    dispatch(getWaterTodayThunk());
  }, [dispatch, newDose, waterRate]);

  const handleClick = () => {
    setShowModal(!showModal);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className={css.flex}>
        <div className={css.progressBarConteiner}>
          <p className={css.title}>Today</p>
          <div className={css.progressBar}>
            {!waterData ? (
              <div className={css.progress} style={{ width: `0%` }}></div>
            ) : (
              <div
                className={css.progress}
                style={{
                  width: `${Math.min(waterData.waterPercent, 100)}%`,
                }}
              ></div>
            )}
          </div>
          <div className={css.percent_bar}>
            <div
              className={
                waterData.waterPercent === 0
                  ? css.percent_num_current
                  : css.percent_num
              }
            >
              0%
            </div>
            <div
              className={
                waterData.waterPercent === 50
                  ? css.percent_num_current
                  : css.percent_num
              }
            >
              50%
            </div>
            <div
              className={
                waterData.waterPercent >= 100
                  ? css.percent_num_current
                  : css.percent_num
              }
            >
              {waterData.waterPercent <= 100
                ? '100%'
                : `${waterData.waterPercent}%`}
            </div>
          </div>
        </div>
        <button className={css.button} onClick={() => handleClick()}>
          <div className={css.icon}>
            <Svg id={'#circleplus'} width={24} height={24} />
          </div>
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
