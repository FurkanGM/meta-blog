'use client'

import {ThemeProvider} from 'next-themes'
import {FC, PropsWithChildren} from "react";

const Providers: FC<PropsWithChildren> = ({children}) => {
    return (
        <ThemeProvider enableColorScheme={false}>{children}</ThemeProvider>
    );
};

export default Providers;
