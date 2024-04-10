import {Button} from "../../components/Button";
import React from "react";
import styled from "styled-components";

const BaseMinecraft = ({className, setSelection}:{className?: string, setSelection:React.Dispatch<React.SetStateAction<boolean | undefined>>}) => {
    return <>
        <Button onClick={() => setSelection(true)}>
            <div className={className}>
                <div className="cube">
                    <div className="face top"></div>
                    <div className="face left"></div>
                    <div className="face right"></div>
                    <div className="face front"></div>
                </div>
            </div>
        </Button>
    </>
}

export const Minecraft = styled(BaseMinecraft)`
    width: 100px;
    height: 100px;
    background: none;
    & .cube {
        position: relative;
        width: 100%;
        height: 100%;
        transform-style: preserve-3d;
        transform: rotateX(45deg) rotateY(45deg);
        background: none;
    }

    & .face {
        position: absolute;
        width: 50px;
        height: 50px;
        background: ${props => props.theme.accent};
        outline: ${props => props.theme.accent} solid 1px;
    }

    & .top {
        transform: rotateX(-90deg) translateZ(50px);
        top: 0;
        left: 25px;
    }

    & .left {
        transform: rotateY(90deg) translateZ(50px);
        top: 25px;
        left: 0;
    }

    & .right {
        transform: rotateY(-90deg) translateZ(50px);
        top: 25px;
        left:50px;
    }

    & .front {
        transform: translateZ(25px);
        top: 25px;
        left: 25px;
    }
`