import * as React from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
import Page5 from "./pages/Page5";
import Page6 from "./pages/Page6";
import Header from './components/Header';
import Navbar from './components/Navbar';


interface IRoute {
    path: string;
    isExact: boolean;
    component: any;
    name: string;
}
const RoutesList: IRoute[] = [
    { path: '/page1', name:'Page 1', isExact: false, component: Page1 },
    { path: '/page2', name:'Page 2', isExact: false, component: Page2 },
    { path: '/page3', name:'Page 3', isExact: false, component: Page3 },
    { path: '/page4', name:'Page 4', isExact: false, component: Page4 },
    { path: '/page5', name:'Page 5', isExact: false, component: Page5 },
    { path: '/page6', name:'Page 6', isExact: false, component: Page6 }

]

class App extends React.Component {
    public render() {
        return (
            <Router>
                <div className="container">
                    <Header>
                        <Navbar>
                            <ul>
                                {RoutesList.map(({path, name}: IRoute, i) => (
                                    <li key={i}>
                                        <NavLink to={path} activeClassName="active">{name}</NavLink>
                                    </li>
                                ))}
                            </ul>
                        </Navbar>
                    </Header>

                    <main>
                        {
                            RoutesList.map(({path,isExact, component}: IRoute, i)=>(
                                <Route key={i} path={path} exact={isExact} component={component} />
                            ))
                        }

                    </main>

                </div>

            </Router>
        );
    }
}

export default App;
