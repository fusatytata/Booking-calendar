import React from "react";
import DateButton from "./DateButton";
import DecreaseButton from "./DecreaseButton";
import IncreaseButton from "./IncreaseButton";
import "./DateNavbar.css";
import moment from "moment/moment";

function DateNavbar({ date, setDate }) {
    const decreaseOne = () => {
        const newValue = date.clone().subtract(1, "d");
        setDate(newValue);
    };

    const increaseOne = () => {
        const newValue = date.clone().add(1, "d");
        setDate(newValue);
    };

    const formattedDate = (date) => {
        const today = moment();
        const tomorrow = moment().add(1, "d");

        if (date.isSame(today, "day")) {
            return "Today " + date.format("D.M.");
        } else if (date.isSame(tomorrow, "day")) {
            return "Tomorrow " + date.format("D.M.");
        } else {
            return date.format("dddd D.M.");
        }
    };
    return (
        <div className="DateNavbar">
            <DecreaseButton onDecrease={decreaseOne} disabled={date.isSame(moment(), "day")} />
            <DateButton date={formattedDate(date)} isActive={true} />
            <DateButton date={formattedDate(date.clone().add(1, "d"))} onClick={increaseOne} />
            <IncreaseButton onIncrease={increaseOne} />
        </div>
    );
}

export default DateNavbar;
