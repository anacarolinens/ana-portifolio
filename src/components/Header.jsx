/**
 * @copyright 2025 Ana
 * @license Apache-2.0
 */

/** 
 * Components
*/
import React from "react";
import Navbar from "./Navbar";

const Header = () => {
    return (
    <header className="fixed inset-x-0 top-4 z-50">
        <div className="mx-auto w-full max-w-screen-xl bg-gradient-to-r from-[var(--color-bg-light)] to-[var(--color-bg-lighter)] backdrop-blur-md border border-[var(--color-border-gray)] rounded-[20px] h-[75px] py-2 px-4 md:px-6 flex items-center justify-between shadow-lg">
            <a className="flex items-center space-x-2 text-gray-800 font-normal">
                <img
                src="/images/logo.svg"
                alt="Ana Caroline Logo"
                width={32}
                height={32}
                className="block"
                />
            <span className="text-[18px]">Ana Caroline</span>
            </a>
        <Navbar />
        </div>
    </header>
    );
};

export default Header;