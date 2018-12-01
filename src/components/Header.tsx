import * as React from 'react';

interface IPropsHeader {
    children: React.ReactNode;
}

const Header: React.FunctionComponent<IPropsHeader> = ({children}:IPropsHeader) =>(
    <header>
        {children}
    </header>
)

export default Header;