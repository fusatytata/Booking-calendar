import React from 'react';
import "./DateButton.css";

function DateButton({ date, isActive }) {
    const active = isActive ? "#bada55" : "transparent";

    return (
        <div className="DateButton">
            <button className="DateButton-Button" style={{ backgroundColor: active }}>
                {date}
            </button>
        </div>
    );
}

export default DateButton;

/* TODO: jak funkci z DayTimeButton - zelenání poslat zde nebo třeba do MainNavbar? */


