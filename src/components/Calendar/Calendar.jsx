import React, { useState } from 'react';
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

const CalendarContainer = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

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

  // Поки використаємо статичне значення 0 для кожної дати
  const backendData = Array(daysOfMonth.length).fill(0);

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
            >
              {format(day, 'd')}
            </div>
            <div>{backendData[index]}%</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarContainer;
