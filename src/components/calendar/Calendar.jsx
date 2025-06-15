import { forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import s from './Calendar.module.css';

const CustomDateInput = forwardRef(function Calendar(
  { onClick, placeholder, value },
  ref,
) {
  return (
    <button
      className={s.dateInputButton}
      onClick={onClick}
      ref={ref}
      type="button"
    >
      <span>{value || placeholder}</span>
    </button>
  );
});

const Calendar = ({ value, onChange }) => {
  const formatDayName = dayName => {
    return dayName.substring(0, 3);
  };

  return (
    <DatePicker
      selected={value}
      onChange={onChange}
      dateFormat="dd.MM.yyyy"
      formatWeekDay={formatDayName}
      customInput={<CustomDateInput />}
      weekStartsOn={1}
      calendarStartDay={1}
      showPopperArrow={false}
      placeholderText="Booking date"
      minDate={new Date()}
    />
  );
};

export default Calendar;
