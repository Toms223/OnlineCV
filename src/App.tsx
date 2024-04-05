import React, {useState} from 'react';
// @ts-ignore
import logo from './logo.svg';
import './App.css';
import {Button} from "./components/Button";
import {ColorPicker} from "./components/ColorPicker";
import {createGlobalStyle, ThemeProvider} from "styled-components";
import {theme} from "./components/theme";
import {ToggleSwitch} from "./components/ToggleSwitch";
import {GlobalStyle} from "./components/GlobalStyle";
import {Introduction} from "./pages/main/Introduction";

function App() {
  const [value, setValue] = useState(0x00ff00)
  const [checked, setChecked] = useState(false);

  return <>
    <ThemeProvider theme={theme(value, checked)}>
      <GlobalStyle/>
        <Button filled onClick={() => {alert("Clicked!");}}>Hello me button!</Button>
        <ColorPicker setValue={setValue} value={value}/>
        <ToggleSwitch checked={checked} setChecked={setChecked}/>
      <Introduction/>
    </ThemeProvider>
  </>
}

export default App;
