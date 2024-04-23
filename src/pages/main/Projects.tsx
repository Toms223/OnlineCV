import styled from "styled-components";
import React from "react";
import {Minecraft} from "./Minecraft";
import {SnowCrystal} from "./SnowCrystal";



const BaseProjects = ({className, selection}:{className?: string, selection: boolean | undefined}) => {
    return <>
        <div className={className}>
            <div className={"mc"}>
                Henlo
            </div>
            <div className={"w"}>
                Henlo2
            </div>
        </div>
    </>
}

export const Projects = styled(BaseProjects)`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2vw;
    transform: scale(${props => props.selection != undefined ? 1 : 0});
    
    & .mc {
        position: absolute;
        z-index: 1;
        opacity: ${props => (props.selection === undefined || !props.selection) ? 1 : 0};
        transform: scale(${props => (props.selection === undefined || !props.selection) ? 1 : 0});
        transition: .4s;
    }

    & .w {
        position: absolute;
        z-index: 2;
        opacity: ${props => (props.selection === undefined || props.selection) ? 1 : 0};
        transform: scale(${props => (props.selection === undefined || props.selection) ? 1 : 0});
        transition: .4s;
    }
`