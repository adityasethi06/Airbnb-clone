import React, {useState} from 'react';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import {DateRangePicker} from 'react-date-range';
import PeopleIcon from '@material-ui/icons/People';
import './DatePicker.css';
import { Button } from '@material-ui/core';

const DatePicker = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const selectionRange = {
        startDate,
        endDate,
        key: "selection"
    }

    const handleDateChange = (ranges) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    return (
        <div className="date_picker">
            <DateRangePicker 
                ranges={[selectionRange]}
                onChange={handleDateChange}/>
            <h2>
                Number of guests
                <PeopleIcon />
            </h2>
            <input min={0}
                defaultValue={2}
                type="number"/>
            <Button>Search Airbnb</Button>
        </div>
    )
}

export default DatePicker
