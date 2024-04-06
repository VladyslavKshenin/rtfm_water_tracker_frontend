// import { useCallback } from 'react';
// import { useEffect } from 'react'
// import { useDispatch } from 'react-redux';
import css from "./Modal.module.css"


const Modal = ({ onClose, children}) => {

    // const handlerClick = useCallback((e) => {
    //     if (e.code === 'Escape') onClose();
    //     if (e.currentTarget === e.target) onClose();
    // }, [onClose])

    // useEffect(() => {
    //     window.addEventListener('keydown', handlerClick)
    
    //     return (() => {
    //          document.removeEventListener('keydown', handlerClick);
    //     })
    // }, [handlerClick])

    return (
        <div 
        className={css.backdrop + " " + css.backdropIsHidden} 
        // onClick={handlerClick}
        >
            <div
                className={css.modalCallback}  
                // onClick={handlerClick}
                >
                {children}
            </div>
        </div>
    )
}


export default Modal