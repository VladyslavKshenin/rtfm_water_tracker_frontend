import { useCallback } from 'react';
import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { showModal } from 'store/modal/modalSlice';

const Modal = ({ children}) => {

    const dispatch = useDispatch()

    const handlerClick = useCallback((e) => {
        if (e.code === 'Escape') dispatch(showModal());
        if (e.currentTarget === e.target) dispatch(showModal());
    }, [dispatch])

    useEffect(() => {
        window.addEventListener('keydown', handlerClick)

        return (() => {
             document.removeEventListener('keydown', handlerClick);
        })
    }, [handlerClick])

    return (
        <div 
        // className={css.Overlay} 
        onClick={handlerClick}>
            <div
                // className={css.Modal}  
                onClick={handlerClick}>
                {children}
            </div>
        </div>
    )
}


export default Modal