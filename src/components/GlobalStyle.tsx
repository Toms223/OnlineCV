import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Reddit+Mono:wght@200..900&display=swap');

    body {
        margin: 0;
    }
    * {
        font-family: 'Reddit Mono', monospace;
        color: ${props => props.theme.accent};
        background-color: ${props => props.theme.bg};
    }
`