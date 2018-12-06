import * as React from 'react';
import {CSSTransitionGroup} from "react-transition-group";
import {NavLink} from "react-router-dom";
import {IRoute} from "../App";

export interface IPropsNavbar {
    children?: React.ReactNode;
    handleClickMenu(event: React.SyntheticEvent): void;
    isMenuOpen: boolean;
    routes: IRoute[];
}



const Navbar: React.FunctionComponent<IPropsNavbar> = ({children, handleClickMenu, isMenuOpen, routes}: IPropsNavbar) => {
    const styleFull = {width: isMenuOpen? '100%': '0%', height: isMenuOpen ? '100%': '0%'};

    return(
        <React.Fragment>
            <nav>
                <div id="responsive-navbar">
                    <a href="#" onClick={handleClickMenu} className="bt-menu"><span
                        className="icon-menu"/>
                        menu
                    </a>
                    <h1>Menú</h1>
                </div>

                <CSSTransitionGroup
                    transitionName="examples"

                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}>

                    {isMenuOpen && <div className={`overlay`} style={styleFull}>
                        <a href="#" className="closebtn" onClick={handleClickMenu}>
                            &times;
                        </a>
                        <ul id="ulResponsive" className="overlay-content">
                            {routes.map(({path, name, extraClassName}: IRoute, i) => (
                                <li key={i} onClick={handleClickMenu}>
                                    <NavLink to={path} activeClassName="active"
                                             className={extraClassName ? extraClassName : ""}>{name}</NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>}

                </CSSTransitionGroup>

                <ul>
                    {routes.map(({path, name, extraClassName}: IRoute, i) => (
                        <li key={i}>
                            
                            <NavLink to={path} activeClassName="active"
                                     className={extraClassName ? extraClassName : ""}>{name}</NavLink>
                        </li>
                    ))}
                </ul>
                {children}
            </nav>
        </React.Fragment>
    )
}
export default Navbar;