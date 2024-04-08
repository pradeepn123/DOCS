import getBreakpoint from "./breakpoints"

const getGap = () => {
    const gaps = {
      "index": "12px",
      "sm": "12px",
      "md": "16px",
      "lg": "24px"
    }

    const currentBreakpoint = getBreakpoint();
    return gaps[currentBreakpoint];
} 


export const LAYOUT = {
    gap: getGap()
}

export const BREAKPOINTS = {
    "0": "index",
    "769": "sm",
    "1024": "md",
    "1200": "lg"
}

