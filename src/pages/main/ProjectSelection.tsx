import styled from "styled-components";
import React from "react";
import {Minecraft} from "./Minecraft";
import {SnowCrystal} from "./SnowCrystal";

const BaseProjects = ({className, selection, setSelection}:{className?: string, selection: boolean | undefined, setSelection:React.Dispatch<React.SetStateAction<boolean | undefined>>}) => {
    return <>
        <div className={className}>
            <div className={"mc"}>
                <Minecraft setSelection={setSelection}/>
            </div>
            <div className={"w"}>
                <SnowCrystal setSelection={setSelection}/>
            </div>
        </div>
    </>
}

export const ProjectSelection = styled(BaseProjects)`
    display: flex;
    justify-content: space-between;
    padding-top: 10em;
    padding-left: 25vw;
    padding-right: 25vw;

    & .mc {
        opacity: ${props => (props.selection === undefined || !props.selection) ? 1 : 0};
        transform: scale(${props => (props.selection === undefined || !props.selection) ? 1 : 0}) 
        ${props => (!props.selection && props.selection !== undefined) ? `translateX(${25 - (61/(window.innerWidth/100))}vw)` : ''};
        transition: .4s;
    }

    & .w {
        opacity: ${props => (props.selection === undefined || props.selection) ? 1 : 0};
        transform: scale(${props => (props.selection === undefined || props.selection) ? 1 : 0}) 
            ${props => (props.selection) ? `translateX(${-25 + (61/(window.innerWidth/100))}vw)` : ''};
        transition: .4s;
    }
`