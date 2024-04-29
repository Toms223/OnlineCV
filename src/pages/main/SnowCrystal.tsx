import styled from "styled-components"
import {Button} from "../../components/Button";
import React from "react";

const BaseSnowCrystal = ({className, setSelection}:{className?: string, setSelection:React.Dispatch<React.SetStateAction<boolean| undefined>>}) => {
    return <>
        <Button onClick={() => setSelection(true)}>
            <div className={className}>❅</div>
        </Button>
    </>
}

export const SnowCrystal = styled(BaseSnowCrystal)`
    width: 100px;
    height: 100px;
    background: none;
    font-size: 4em;
    display: flex;
    justify-content: center;
    align-items: center;
    
`