import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getWaterTodayThunk } from '../../store/water/waterThunk';
import { waterSelector } from 'store/water/waterSelector';

import css from "./Today.module.css"

const Today = () => {
  const dispatch = useDispatch();
  const data = useSelector(waterSelector);
  useEffect(() => {
    dispatch(getWaterTodayThunk());
  }, [dispatch]);

  return (
    <>
      <div>
        <h2>Today</h2>
        <ul className={css.list_waters}>
          {data.waterRecords ? data.waterRecords.map(({id,consumedWater,date})=>{ 
            const dataS = new Date(date)
            return(
            <li className={css.list_item}><p>{consumedWater} ml</p> <p>{dataS.getHours()<10 && `0`}{dataS.getHours() }:{dataS.getMinutes()<10 && `0`}{ dataS.getMinutes()}</p><button>edit</button><button>delete</button></li>
          )
        }
          ) : null}
        </ul>
      </div>
    </>
  );
};

export default Today;
