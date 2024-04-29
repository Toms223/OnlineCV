import React, {Dispatch, ReactNode, SetStateAction} from "react";
import styled from "styled-components";

const baseBar = ({className, children, setOnMouse, setScrollUp}: {className?: string, children?: ReactNode, onMouse: boolean, setOnMouse: Dispatch<SetStateAction<boolean>>, setScrollUp: Dispatch<SetStateAction<boolean>>;}) => {
    return <>
        <nav
            className={className}
            onMouseEnter={() => {
                setOnMouse(true)
                setScrollUp(false)
            }}
            onMouseLeave={() => {
                setOnMouse(false)
                setScrollUp(false)
            }}
        >
            {children}
        </nav>
    </>
}



export const NavBar = styled(baseBar)`
    position: fixed;
    display: flex;
    width: 100%;
    justify-content: space-around;
    background-color: ${props => props.theme.bg};
    align-items: center;
    opacity: ${props => props.onMouse ? 1 : 0};
    transition: opacity .2s;
    z-index: 1;
    & .buttons{
        font-size: ${window.innerWidth < 500 ? '3vw' : '1em'};
        display: flex;
        gap: 1vw;
    }
`