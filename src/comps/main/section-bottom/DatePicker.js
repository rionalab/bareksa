import { useState } from 'react';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {  DateRange } from 'react-date-range';

function DatePicker() {
    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: null,
            key: 'selection',
        },
    ]);
    return (
        <>
            <DateRange
                editableDateInputs={true}
                onChange={(item) => setState([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={state}
            />
            <div className="text-center">
                <button className='btn btn-white'>Cancel</button>
                <button className='btn btn-green'>Filter</button>
            </div>
        </>
    );
}

export default DatePicker;
