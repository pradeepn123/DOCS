import { getCurrentBreakpoint } from "JsComponents/breakpoints"


const getGap = () => {
    const gaps = {
      "default": "12px",
      "sm": "12px",
      "md": "16px",
      "lg": "24px"
    }

    console.log(getCurrentBreakpoint, "fn")

    const currentBreakpoint = getCurrentBreakpoint();
    return gaps[currentBreakpoint];
} 


export const LAYOUT = {
    gap: getGap
}

export const BREAKPOINTS = {
    "0": "default",
    "769": "sm",
    "1024": "md",
    "1200": "lg"
}

