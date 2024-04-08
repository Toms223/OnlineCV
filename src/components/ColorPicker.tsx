import React from "react";
import styled from "styled-components";

const basePicker = ({className, value, setValue} : {className?: string, value: number, setValue: React.Dispatch<React.SetStateAction<number>>}) => {
    return <>
        <input className={className} type="range" min="0" max="360" value={value} onChange={(event) => {setValue(event.target.valueAsNumber)}}/>
    </>
}

export const convertToHex = (value: number) => {
    const hue = (value % 360 + 360) % 360;

    // Convert hue to RGB using a simplified version of the HSL to RGB conversion
    let r, g, b;
    if (hue < 60) {
        r = 255;
        g = Math.round(hue / 60 * 255);
        b = 0;
    } else if (hue < 120) {
        r = Math.round((120 - hue) / 60 * 255);
        g = 255;
        b = 0;
    } else if (hue < 180) {
        r = 0;
        g = 255;
        b = Math.round((hue - 120) / 60 * 255);
    } else if (hue < 240) {
        r = 0;
        g = Math.round((240 - hue) / 60 * 255);
        b = 255;
    } else if (hue < 300) {
        r = Math.round((hue - 240) / 60 * 255);
        g = 0;
        b = 255;
    } else {
        r = 255;
        g = 0;
        b = Math.round((360 - hue) / 60 * 255);
    }

    // Convert the decimal values to hexadecimal
    // Pad the hexadecimal string with leading zeros to ensure it's 6 characters long
    return ((r << 16) | (g << 8) | b).toString(16).padStart(6, '0');
};

export const ColorPicker = styled(basePicker)`
    --accent-color: #${props => convertToHex(props.value)};
    -webkit-appearance: none; /* Override default CSS styles */
    appearance: none;
    width: 30em;
    height: 1em; /* Specified height */
    background-color: var(--accent-color);
    border: ${props => props.theme.accent} solid 0.3em; /* Remove outline */
    -webkit-transition: height .2s; /* 0.2 seconds transition on hover */
    transition: height .2s;
    border-radius: 3em;

    &:hover {
        height: 2em;
    }

    &::-webkit-slider-thumb {
        -webkit-appearance: none; /* Override default look */
        appearance: none;
        outline: var(--accent-color) solid 1em;
    }

    &::-moz-range-thumb {
        width: 25px;
        height: 25px;
        background-color: black;
        border-radius: 50%;
        border: 0.2em solid white;
    }

`