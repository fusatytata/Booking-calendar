import React from "react";
import "./DecreaseButton.css";

const DecreaseButton = ({ onDecrease, disabled }) => {
    return (
        <button className="DecreaseButton-Button" onClick={onDecrease} disabled={disabled}>
            <svg
                alt=""
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-circle-arrow-left"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#c0b8b8"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 21a9 9 0 1 0 0 -18a9 9 0 0 0 0 18" />
                <path d="M8 12l4 4" />
                <path d="M8 12h8" />
                <path d="M12 8l-4 4" />
            </svg>
        </button>
    );
};

export default DecreaseButton;
