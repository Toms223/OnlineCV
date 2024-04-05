import {convertToHex} from "./ColorPicker";

export const theme = (colorValue: number, inverted: boolean) => {
    if(inverted){
        return {
            bg: "black",
            accent: `#${convertToHex(colorValue)}`
        }
    } else {
        return {
            bg: `#${convertToHex(colorValue)}`,
            accent: "black"
        }
    }
}