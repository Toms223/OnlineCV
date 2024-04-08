import React, {Dispatch, SetStateAction} from 'react';
import styled from 'styled-components';

// Define styled components
const SwitchContainer = styled.label`
    position: relative;
    display: inline-block;
    width: 40px;
    height: 1.2em;
`;

const Slider = styled.span`
    position: absolute;
    cursor: pointer;
    width: 40px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${props => props.theme.bg};
    border-radius: 20px;
    outline: ${props => props.theme.accent} solid 2px;
    -webkit-transition: transform .4s;
    transition: transform .4s;


    &:before {
        position: absolute;
        content: "";
        height: 1em;
        width: 1em;
        left: 0.1em;
        bottom: 0.1em;
        background-color: ${props => props.theme.accent};
        -webkit-transition: transform .4s;
        transition: transform .4s;
        border-radius: 50%;
    }
`;

const Input = styled.input`
    opacity: 0;
    width: 0;
    height: 0;

    &:checked + ${Slider} {
        background-color: ${props => props.theme.bg};
        outline: ${props => props.theme.accent} solid 2px;
    }

    &:checked + ${Slider}:before {
        -webkit-transform: translateX(20px);
        -ms-transform: translateX(20px);
        transform: translateX(20px);
        background-color: ${props => props.theme.accent};
    }
`;

// ToggleSwitch component
export const ToggleSwitch = ({checked, setChecked}: {checked: boolean, setChecked:Dispatch<SetStateAction<boolean>>}) => {


    return (
        <SwitchContainer>
            <Input type="checkbox" checked={checked} onChange={(event) => setChecked(event.target.checked)} />
            <Slider />
        </SwitchContainer>
    );
};