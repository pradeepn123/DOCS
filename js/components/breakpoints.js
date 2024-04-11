import { BREAKPOINTS } from "JsComponents/constants";

export const getCurrentBreakpoint = () => {
  let browserWidth = window.innerWidth;
  const getCurrentBreakpoint = () => {
    const matchedBreakpointArray = [];
    if(BREAKPOINTS) {
      let currentBreakpointIndex = 0;
      for (let breakpoint of Object.keys(BREAKPOINTS)) {
          if(browserWidth >= breakpoint) {
            matchedBreakpointArray.push(parseInt(breakpoint));
          }
          currentBreakpointIndex = currentBreakpointIndex + 1;
      }
    }
    const selectedBreakpoint = (matchedBreakpointArray.toSorted((a, b) => b - a))[0]
   return BREAKPOINTS[selectedBreakpoint]
  }
  return getCurrentBreakpoint();
}

window.addEventListener('resize', () => {
  getCurrentBreakpoint();
})