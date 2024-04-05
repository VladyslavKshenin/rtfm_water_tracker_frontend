import { AddWaterModal } from 'components/AddWaterModal/AddWaterModal';
import Modal from 'components/Modal/Modal';
import { useState } from 'react';

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
      <div>
        <div>Today</div>
        <div>waterRate</div>
      </div>
      <button onClick={() => handleClick()}>Add Water</button>
      {showModal ? (
        <Modal>
          <AddWaterModal closeModal={closeModal} />
        </Modal>
      ) : null}
    </>
  );
};
