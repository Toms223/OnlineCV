import styled from "styled-components";

const baseBiography = ({className}:{className?: string}) => {
    return <>
        <div className={className}>
            <p>Born and raised in Portugal, took an interest in computers since 3 years old (Thanks Dad!).</p>
            <p>Self-taught basics of programming by grade 8, and currently a year away from finishing my CS degree</p>
            <p>I have a special interest in System Architecture and love crafting scalable distributed systems.</p>
            <p>In fact, checkout some of my projects bellow!</p>
        </div>
    </>
}

export const Biography = styled(baseBiography)`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    font-size: 1.65em;
    color: ${props => props.theme.bg};
    background-image: repeating-linear-gradient(
            45deg,
            ${props => props.theme.accent},
            ${props => props.theme.accent} 1em,
            ${props => props.theme.bg} 1em,
            ${props => props.theme.bg} 4em
    );
    background-size: 200% 200%;
    transition: background-position .6s ease-in-out;

    animation: gradientMove 12s ease-in-out infinite;

    @keyframes gradientMove {
        0% {
            background-position: 0 0;
        }
        50% {
            background-position: 100% 100%;
        }
        100% {
            background-position: 0 0;
        }
    }
    
    &:hover p{
        background-color: ${props => props.theme.accent};
        color: ${props => props.theme.bg};
    }
    
    &:hover {
        background-position: 5% 5%;
    }
    
    & p{
        transition: background-color .1s, color .1s;
        padding: 1em
    }
`