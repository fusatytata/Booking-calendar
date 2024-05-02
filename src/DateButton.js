import React from "react";
import "./DateButton.css";

function DateButton({ today, tomorrow }) {
    return (
        <div className="DateButton">
            <button className="DateButton-Today">{today}</button>
            <button className="DateButton-Tomorrow">{tomorrow}</button>
        </div>
    );
}

export default DateButton;

/* TODO: jak funkci z DayTimeButton - zelenání poslat zde nebo třeba do MainNavbar? */
