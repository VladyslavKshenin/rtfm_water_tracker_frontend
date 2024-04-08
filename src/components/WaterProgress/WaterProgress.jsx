import { AddWaterModal } from 'components/AddWaterModal/AddWaterModal';
import Modal from 'components/Modal/Modal';
import { useState } from 'react';
import css from './WaterProgress.module.css'

export const WaterProgress = () => {
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    setShowModal(!showModal);
  };
  return (
    <>
      <div className={css.flex}>
        <p className={css.title}>Today</p>
        <button className={css.button} onClick={() => handleClick()}>Add Water</button>
      </div>
      
      {showModal ? (
        <Modal>
          <AddWaterModal />
        </Modal>
      ) : null}
    </>
  );
};
