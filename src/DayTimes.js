import React from "react";
import { useState, useEffect } from "react";
import DayTimeButton from "./DayTimeButton";
import "./DayTimes.css";
import data from "./data";

function DayTimes ({date}){
    const [selectedButtonIds, setSelectedButtonIds] = useState({});

    useEffect(() => {
        const dateString = date.format("YYYY-MM-DD");
        if (!(dateString in selectedButtonIds)) {
            setSelectedButtonIds((prevIds) => ({
                ...prevIds,
                [dateString]: null,
            }));
        }
    }, [date, selectedButtonIds])

    const taskHandler = (id) => {
        const dateString = date.format("YYYY-MM-DD");
        setSelectedButtonIds((prevIds) => ({
            ...prevIds,
            [dateString]: prevIds[date.format("YYYY-MM-DD")] === id ? null : id,
        }));
    };


    const isSelected = (uniqueId) => {
        return selectedButtonIds[date.format("YYYY-MM-DD")] === uniqueId;
    };

    const times = data.map(({ Id, Time, Capacity, OriginalCapacity }) => {
        const uniqueId = `${Id}-${Time}`;
        return (
            <DayTimeButton
                key={uniqueId}
                value={Time}
                capacity={Capacity}
                originalCapacity={OriginalCapacity}
                onClick={() => taskHandler(uniqueId)}
                isSelected={isSelected(uniqueId)}
            />
        );
    });

    return(
        <div>
            <div className="DayTimes">{times}</div>
        </div>
    )
}

export default DayTimes;
