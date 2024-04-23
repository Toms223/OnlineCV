import styled, {ThemeProvider} from "styled-components";
import {NavBar} from "../../components/NavBar";
import React, {useState} from "react";
import {Button} from "../../components/Button";
import {useNavigate} from "react-router-dom";
import {ColorPicker} from "../../components/ColorPicker";
import {theme} from "../../components/theme";
import {ToggleSwitch} from "../../components/ToggleSwitch";
import {GlobalStyle} from "../../components/GlobalStyle";
import {ProjectSelection} from "./ProjectSelection";
import {Projects} from "./Projects";

const BaseIntroduction = ({className}:{className?:string}) => {
    const [onMouse, setOnMouse] = useState(true)
    const navigate = useNavigate()
    const [color, setColor] = useState(0)
    const [inverted, setInverted] = useState(true)
    const [selection, setSelection] = useState<boolean | undefined>(undefined)
    return (<>
        <ThemeProvider theme={theme(color,inverted)}>
            <GlobalStyle/>
            <NavBar onMouse={onMouse} setOnMouse={setOnMouse}>
                <div>
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
                </div>
                <div>
                    <p>Hi! I'm Tomás, your future full-stack engineer</p>
                    <p>and micro-services enthusiast</p>
                </div>
            </div>
            <ProjectSelection selection={selection} setSelection={setSelection}/>
            <Projects selection={selection}/>
        </ThemeProvider>
    </>)
}

export const Introduction = styled(BaseIntroduction)`
    border: 0.3em dashed ${props => props.theme.accent};
    padding: 0.5em;
    position: relative;
    font-size: 2em;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: flex-end;
    text-justify: inter-word;
    p{
        text-align: right;
    }
    
`