import { useCallback } from 'react';
import { useEffect } from 'react'
import css from "./Modal.module.css"

const Modal = ({ active, onClose, children}) => {

    const handlerClick = useCallback((e) => {
       
        if (e.code === 'Escape') onClose();
        // console.log('first', e.currentTarget)
        // console.log('second', e.target)
        if (e.currentTarget === e.target) onClose();
    }, [onClose])

    useEffect(() => {
        document.addEventListener('keydown', handlerClick)
        
        return (() => {
            document.removeEventListener('keydown', handlerClick);
        })
    }, [handlerClick])
    return (
        <div className={active ? css.backdrop + " " + css.backdropActive : css.backdrop} onClick={handlerClick}>
            <div className={active ? css.modalContent + " " + css.modalContentActive : css.modalContent} onClick={(e)=>{ e.stopPropagation()}}>
                {children}
            </div>
        </div>
    )
}


export default Modal