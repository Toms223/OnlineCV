import styled from "styled-components";
import React from "react";


const baseButton = ({className, onClick, children}:{onClick:()=>void, className?:string, children: React.ReactNode, filled?: boolean}) => {
    return <>
        <button className={className} onClick={onClick}>
            {children}
        </button>
    </>
}

export const Button = styled(baseButton)`
    background: ${props => props.theme.bg};
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid ${props => props.theme.accent};
    border-radius: 3em;
`