import React from "react";
import "./DayTimeButton.css";

function DayTimeButton({ value, capacity, originalCapacity, onClick, isSelected}) {
    const backgroundColor = isSelected ? "#bada55" : "transparent";
    return (
        <div className="DayTimeButton">
            <button
                className="DayTimeButton-Button"
                onClick={onClick}
                style={{ backgroundColor }}
            >
                <div className="DayTimeButton-Capacity">({capacity} / {originalCapacity})</div> 
                {value}
            </button>
        </div>
    );
}

export default DayTimeButton;
