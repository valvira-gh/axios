/**
 * Layout component.
 *
 * @component
 * @param { React.ReactNode } children - The children components.
 * @returns { JSX.Element } => The rendered component.
 */
import React from 'react';
import './globals.css';
import { Header } from './header/header';
import HomePage from './page';

type LayoutProps = {
    children: React.ReactNode;
}

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
    return (
        <div>
            <header>
                <Header />
            </header>
            <main>{children}</main>
        </div>
    );
};

export default Layout;