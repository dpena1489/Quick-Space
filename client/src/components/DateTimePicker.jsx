import { useState } from 'react';
import DatePicker from "react-datepicker";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

function DateTimePicker() {
    const [startDate, setStartDate] = useState(
        new Date()
    );

    const filterPassedTime = (time) => {
        const currentDate = new Date();
        const selectedDate = new Date(time);

        return currentDate.getTime() < selectedDate.getTime();
    };

    return (
        <div className='text-black'>
            <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                showTimeSelect
                showIcon
                filterTime={filterPassedTime}
            />
        </div>
    );
}

export default DateTimePicker;