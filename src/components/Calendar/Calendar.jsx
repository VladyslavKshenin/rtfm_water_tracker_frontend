import React, { useState, useEffect } from 'react';
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isToday,
  addMonths,
  subMonths,
} from 'date-fns';
import css from './Calendar.module.css';
import { getWaterMonthThunk } from 'store/month/monthThunk';
import { useDispatch, useSelector } from 'react-redux';
import { monthSelector } from 'store/month/monthSelector';
import { handleApdateSelector } from 'store/month/monthSelector';

const Popover = ({ date, dailyNorma, fulfillment, waterServings }) => {
  const formattedDate = format(date, 'd MMMM');
  console.log(formattedDate);
  return (
    <div className={css.popover}>
      <p className={css.popoverDate}>{formattedDate}</p>
      <p className={css.popoverList}>
        Daily norma: <span className={css.popoverDate}>{dailyNorma}L</span>
      </p>
      <p className={css.popoverList}>
        Fulfillment of the daily norm:{' '}
        <span className={css.popoverDate}>{fulfillment}%</span>
      </p>
      <p className={css.popoverList}>
        How many servings of water:{' '}
        <span className={css.popoverDate}>{waterServings}</span>
      </p>
    </div>
  );
};

const CalendarContainer = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [popoverData, setPopoverData] = useState(null);
  const [backendData, setBackendData] = useState([]);
  const dispatch = useDispatch();
  const monthData = useSelector(monthSelector);
  const hendleApdate = useSelector(handleApdateSelector);
  // console.log(format(currentDate, 'yyyy-MM'));
  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(getWaterMonthThunk(format(currentDate, 'yyyy-MM')));
      } catch (error) {
        console.error('Error fetching month data:', error);
      }
    };

    fetchData();
  }, [dispatch, currentDate, hendleApdate]);

  useEffect(() => {
    if (!monthData) {
      // console.log('monthData is null.');
      return;
    }

    const arrayMonth = monthData?.waterInfoForMonth || [];

    // console.log('monthData.waterInfoForMonth:', arrayMonth);

    const transformedData = arrayMonth.map(item => ({
      dailyNorma: item.waterRate / 1000,
      fulfillment: item.percentage,
      waterServings: item.totalIntake,
    }));

    setBackendData(transformedData);
  }, [monthData]);

  const handleNextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };

  const handlePrevMonth = () => {
    setCurrentDate(subMonths(currentDate, 1));
  };

  const firstDayOfMonth = startOfMonth(currentDate);
  const lastDayOfMonth = endOfMonth(currentDate);
  const daysOfMonth = eachDayOfInterval({
    start: firstDayOfMonth,
    end: lastDayOfMonth,
  });

  return (
    <div className={css.calendarContainer}>
      <div className={css.calendarHeader}>
        <h1 className={css.titleMonth}>Month</h1>
        <div className={css.monthNameContainer}>
          <button className={css.buttonMonth} onClick={handlePrevMonth}>
            &lt;
          </button>
          <p className={css.monthName}>{format(currentDate, 'MMMM yyyy')}</p>
          <button className={css.buttonMonth} onClick={handleNextMonth}>
            &gt;
          </button>
        </div>
      </div>
      <div className={css.calendarGrid}>
        {daysOfMonth.map((day, index) => (
          <div className={css.day} key={index}>
            <div
              className={`${css.calendarDay} ${isToday(day) ? css.today : ''}`}
              onMouseEnter={() =>
                setPopoverData({ ...backendData[index], date: day })
              }
              onMouseLeave={() => setPopoverData(null)}
            >
              {format(day, 'd')}
            </div>
            <div>{backendData[index]?.fulfillment}%</div>
          </div>
        ))}
        {popoverData && <Popover {...popoverData} date={popoverData.date} />}
      </div>
    </div>
  );
};

export default CalendarContainer;
