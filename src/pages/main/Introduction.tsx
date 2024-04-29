import styled, {ThemeProvider} from "styled-components";
import {NavBar} from "../../components/NavBar";
import React, {useCallback, useEffect, useState} from "react";
import {Button} from "../../components/Button";
import {useNavigate} from "react-router-dom";
import {ColorPicker} from "../../components/ColorPicker";
import {theme} from "../../components/theme";
import {ToggleSwitch} from "../../components/ToggleSwitch";
import {GlobalStyle} from "../../components/GlobalStyle";
import {ProjectSelection} from "./ProjectSelection";
import {Projects} from "./Projects";
import {Biography} from "./Biography";
import {EmailForm} from "./EmailForm";

const BaseIntroduction = ({className}:{className?:string}) => {
    const [onMouse, setOnMouse] = useState(false)
    const navigate = useNavigate()
    const [color, setColor] = useState(0)
    const [inverted, setInverted] = useState(true)
    const [selection, setSelection] = useState<boolean | undefined>(undefined)
    const [y, setY] = useState(window.scrollY);
    const [scrollUp, setScrollUp] = useState(false);

    const handleNavigation = useCallback(() => {
        if (y > window.scrollY) {
            setScrollUp(true);
        } else if (y < window.scrollY) {
            setScrollUp(false);
        }
        setY(window.scrollY);
    }, [y]);

    useEffect(() => {
        setY(window.scrollY);
        window.addEventListener("scroll", () => handleNavigation());

        // Cleanup function to remove the event listener
        return () => window.removeEventListener("scroll", handleNavigation);
    }, [handleNavigation]);

    return (
        <>
        <ThemeProvider theme={theme(color,inverted)}>
            <GlobalStyle/>
            <NavBar onMouse={onMouse || scrollUp} setOnMouse={setOnMouse} setScrollUp={setScrollUp}>
                <div className={"buttons"}>
                    <Button onClick={() => navigate("/")}>Home</Button>
                    <Button onClick={() => navigate("/projects")}>Projects</Button>
                    <Button onClick={() => navigate("/contacts")}>Contacts</Button>
                </div>
                <ColorPicker setValue={setColor} value={color}/>
                <ToggleSwitch checked={inverted} setChecked={setInverted}/>


            </NavBar>
            <div className={className}>
                <div>
                    <h1>WELCOME</h1>
                    <h2>This is my Online CV</h2>
                    <br/>
                </div>
                <div>
                    <p>Hi! I'm Tomás, your future full-stack engineer and micro-services enthusiast</p>
                </div>
            </div>
            <Biography/>
            <ProjectSelection selection={selection} setSelection={setSelection}/>
            <Projects selection={selection} navigate={navigate}/>
            <EmailForm/>
        </ThemeProvider>
    </>)
}

export const Introduction = styled(BaseIntroduction)`
    border: 0.3em dashed ${props => props.theme.accent};
    padding: 0.5em;
    position: relative;
    font-size: 2em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`