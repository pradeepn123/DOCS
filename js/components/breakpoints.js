import { BREAKPOINTS} from "./constants";

export default () => {
    if(BREAKPOINTS) {
    console.log(BREAKPOINTS, "breakpoints")
    const browserWidth = window.innerWidth;
    let currentBreakpoint = 0;
    for (let breakpoint of Object.keys(BREAKPOINTS)) {
        if(breakpoint >= browserWidth) {
          return;
        }
        currentBreakpoint = currentBreakpoint + 1;
    }
    return BREAKPOINTS[currentBreakpoint];
  }
}
