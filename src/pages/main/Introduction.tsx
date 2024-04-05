import styled from "styled-components";

const baseIntroduction = ({className}:{className?:string}) => {
    return <>
        <div className={className}>
            <div>
                <h1>WELCOME</h1>
                <h2>This is my Online CV</h2>
            </div>
            <div className={"left"}>
                <p>Hi! I'm Tomás, a future full-stack engineer</p>
                <p>and micro-services enthusiast</p>
            </div>
        </div>
    </>
}

export const Introduction = styled(baseIntroduction)`
    
    border: 0.5em dashed ${props => props.theme.accent};
    padding-left: 0.5em;
    font-size: 2em;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    text-justify: inter-word;
    p{
        text-align: right;
    }
    
    .left
    
`