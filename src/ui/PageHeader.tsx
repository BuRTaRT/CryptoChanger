'use client'
import {ReactNode} from "react";

const PageHeader = function ({children}: { children: ReactNode }) {
    return (
        <h1 className={'text-2xl font-bold text-[#3e3737] mb-3'}>{children}</h1>
    );
}
export default PageHeader;