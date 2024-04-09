import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getWaterTodayThunk, deleteWaterTodayThunk } from '../../store/water/waterThunk';
import { waterListSelector } from 'store/water/waterSelector';

import css from "./Today.module.css"

const Today = () => {
  const dispatch = useDispatch();
  const data = useSelector(waterListSelector);
  const [showModalDel, setShowModalDel] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);
  useEffect(() => {
    dispatch(getWaterTodayThunk());
  }, [dispatch]);
  const delHandleChange = (e)=>{
    console.log( e.currentTarget.dataset.iditems)
    dispatch(deleteWaterTodayThunk(e.currentTarget.dataset.iditems));
  }

  return (
    <>
      <div>
        <h2>Today</h2>
        <ul className={css.list_waters}>
          {data.waterRecords ? data.waterRecords.map(({id,consumedWater,date})=>{ 
            const dataS = new Date(date)
            return(
            <li className={css.list_item}><p>{consumedWater} ml</p> <p>{dataS.getHours()<10 && `0`}{dataS.getHours() }:{dataS.getMinutes()<10 && `0`}{ dataS.getMinutes()}</p><button data-iditems={id}>edit</button><button data-iditems={id} onClick={delHandleChange}>delete</button></li>
          )
        }
          ) : null}
        </ul>
      </div>
    </>
  );
};

export default Today;
