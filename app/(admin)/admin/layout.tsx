import Navbar from "@/components/Navbar";
import React from "react";

export default function layout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <main className="relative bg-black-100 flex
        justify-center items-center flex-col overflow-hidden
        mx-auto sm:px-10 px-5">
            {children}
        </main>
    )
}