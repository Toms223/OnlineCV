import React, {ReactNode} from "react";
import styled from "styled-components";

const baseBar = ({className, children, setOnMouse}: {className?: string, children?: ReactNode, onMouse: boolean, setOnMouse: React.Dispatch<React.SetStateAction<boolean>>}) => {
    return <>
        <nav
            className={className}
            onMouseEnter={() => setOnMouse(true)}
            onMouseLeave={() =>setOnMouse(false)}
        >
            {children}
        </nav>
    </>
}



export const NavBar = styled(baseBar)`
    padding: 10px 20px;
    position: relative;
    display: flex;
    justify-content: space-around;
    background-color: ${props => props.theme.bg};
    align-items: center;
    opacity: ${props => props.onMouse ? 1 : 0};
    max-height: ${props => props.onMouse ? 30 : 0}px;
    transition: opacity .4s, max-height .4s;
    transform: scale(1);
    z-index: 1;
`