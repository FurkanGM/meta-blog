'use client'
import React, {MouseEvent, PropsWithChildren} from 'react';

type ButtonProps = PropsWithChildren<{
    action?: (event: MouseEvent<HTMLButtonElement>) => void
}>

const Advertisement = ({children, action}: ButtonProps) => {
    return (
        <button
            onClick={e => action ? action(e) : null}
            className="rounded-md px-5 py-3 border border-zinc-200 text-zinc-600 font-medium transition hover:shadow-xl"
        >
            {children}
        </button>
    );
};

export default Advertisement;
