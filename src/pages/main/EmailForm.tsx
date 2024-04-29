import styled from "styled-components";
import {Button} from "../../components/Button";

const baseEmailForm = ({className}:{className?: string}) => {
    return <>
        <div className={className}>
            <Button onClick={() => window.location.href = "mailto:tomamiramart@gmail.com?subject=Contact%20for%20Interview"}>
                Contact me!
            </Button>
        </div>
    </>
}

export const EmailForm = styled(baseEmailForm)`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1em;
    
    & ${Button}{
        font-size: 2em;
    }
`