import { createContext } from 'react';
import { getCurrentBreakpoint } from '../breakpoints';
export const BreakPointContext = createContext(getCurrentBreakpoint());