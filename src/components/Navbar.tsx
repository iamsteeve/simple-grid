import * as React from 'react';

interface IPropsNavbar {
    children: React.ReactNode;
}

const Navbar: React.FunctionComponent<IPropsNavbar> = ({ children }: IPropsNavbar) => (
    <React.Fragment>
        <nav >
            <div className="row">
                <div className="col-xs-12">
                    {children}
                </div>
            </div>
        </nav>
    </React.Fragment>
)

export default Navbar;