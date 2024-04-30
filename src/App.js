import { useState } from "react";

import MainNavbar from "./MainNavbar";

import "./App.css";

import moment from "moment/moment";
import DayTimes from "./DayTimes";
import DateNavbar from "./DateNavbar";

function App() {
    const [date, setDate] = useState(moment());

    return (
        <div>
            <MainNavbar />
            <DateNavbar date={date} setDate={setDate} />
            <DayTimes date={date} />
        </div>
    );
}

export default App;
