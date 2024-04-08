import Icons from './../../images/icons.svg';
import css from "./SettingModal.module.css";

const SettingModal = ({ isOpen, children, onClose }) => {

  // if (!isOpen) {
  //   return null;
  // } else {

  return (
    <>
        <aside className={css.modal_wrap}>
          <div className={css.modal_settings}>
            <div className={css.header_settings_modal}>
              <h2 className={css.header_settings_subscription}>Setting</h2>
                  <span className={css.button_close} onClick={onClose}>
                    <svg>
                      <use href={Icons + '#close'}></use>
                    </svg>
                  </span>
            </div>
            <div>
              {children}
            </div>
          </div>
        </aside>
    </>
  );
}


export default SettingModal;