import styled from "styled-components";
import React from "react";
import {Minecraft} from "./Minecraft";
import {SnowCrystal} from "./SnowCrystal";

const BaseProjects = ({className, selection, setSelection}:{className?: string, selection: boolean | undefined, setSelection:React.Dispatch<React.SetStateAction<boolean | undefined>>}) => {
    return <>
        <div className={className}>
            <div className={"mc"} >
                <Minecraft setSelection={setSelection}/>
            </div>
            <div className={"w"} >
                <SnowCrystal setSelection={setSelection}/>
            </div>
        </div>
    </>
}

export const Projects = styled(BaseProjects)`
    display: flex;
    justify-content: space-between;
    padding-left: 30em;
    padding-right: 30em;
    padding-top: 10em;
    
    & .mc{
        opacity: ${props => (props.selection === undefined || !props.selection) ? 1 : 0};
        transition: opacity .4s;
    }

    & .w{
        opacity: ${props => (props.selection === undefined || props.selection) ? 1 : 0};
        transition: opacity .4s;
    }
`