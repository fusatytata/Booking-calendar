import React from "react";
import "./IncreaseButton.css";

const IncreaseButton = (props) => {
    return (
        <button className="IncreaseButton-Button" onClick={props.onIncrease}>
            <svg
                alt=""
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-circle-arrow-right"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#2c3e50"
                fill="#c0b8b8"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0 -18" />
                <path d="M16 12l-4 -4" />
                <path d="M16 12h-8" />
                <path d="M12 16l4 -4" />
            </svg>
        </button>
    );
};

export default IncreaseButton;
