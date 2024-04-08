import { AddWaterModal } from 'components/AddWaterModal/AddWaterModal';
import Modal from 'components/Modal/Modal';
import { useState } from 'react';
import css from './WaterProgress.module.css'

export const WaterProgress = () => {
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    setShowModal(!showModal);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <div className={css.flex}>
        <p className={css.title}>Today</p>
        <button className={css.button} onClick={() => handleClick()}>Add Water</button>
      </div>
      
      {showModal ? (
        <Modal active={showModal} onClose={closeModal}>
          <AddWaterModal closeModal={closeModal} />
        </Modal>
      ) : null}
    </>
  );
};
