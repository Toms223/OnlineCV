import styled from "styled-components";
import React from "react";
import {Button} from "../../components/Button";
import {NavigateFunction} from "react-router-dom";



const BaseProjects = ({className, selection, navigate}:{className?: string, selection: boolean | undefined, navigate: NavigateFunction}) => {
    return <>
        <div className={className}>
            <div className={"mc"}>
                <p>DockerCord is an integration between Docker and BungeeCord to enable
                    server instantiation and control through Docker, fully integrating it.</p>
                <p>It also opens up the possibility for integration by exposing those same controls in an API.</p>
                <Button onClick={() => navigate("/projects/dockercord")}>Try It!</Button>
            </div>
            <div className={"w"}>
                <p>Winter is a IOC library designed to facilitate the creation of web applications through the use of
                    Http4k.</p>
                <p>It leverages the power of Http4k with the familiar syntax of the Spring framework.</p>
                <p>With it you can create controllers, filters, exception handlers and SPA's.</p>
                <Button onClick={() => navigate("/projects/winter")}>Try It!</Button>
            </div>
        </div>
    </>
}

export const Projects = styled(BaseProjects)`
    position: relative;
    display: flex;
    padding-left: 10vw;
    padding-right: 10vw;
    flex-wrap: wrap-reverse;
    align-items: center;
    justify-content: center;
    margin-top: 2vw;
    transform: scale(${props => props.selection != undefined ? 1 : 0});
    
    & p{
        font-size: 1.5em;
    }
    
    & .mc {
        position: fixed;
        z-index: 1;
        opacity: ${props => (props.selection === undefined || !props.selection) ? 1 : 0};
        transform: scale(${props => (props.selection === undefined || !props.selection) ? 1 : 0});
        transition: transform .4s, opacity .4s;
    }

    & .w {
        position: relative;
        z-index: 2;
        opacity: ${props => (props.selection === undefined || props.selection) ? 1 : 0};
        transform: scale(${props => (props.selection === undefined || props.selection) ? 1 : 0});
        transition: transform .4s,  opacity .4s;
    }
`