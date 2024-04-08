import styled from "styled-components";
import React from "react";


const baseButton = ({className, onClick, children}:{onClick:()=>void, className?:string, children?: React.ReactNode, filled?: boolean}) => {
    return <>
        <button className={className} onClick={onClick}>
            {children}
        </button>
    </>
}

export const Button = styled(baseButton)`
    background: ${props => props.theme.bg};
    font-size: 1em;
    padding: 0.5em;
    font-weight: bold;
    white-space: nowrap;
    border: 0.2em solid ${props => props.theme.accent};
    border-radius: 3em;
`