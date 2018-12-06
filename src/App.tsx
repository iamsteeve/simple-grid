import * as React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
import Page5 from "./pages/Page5";
import Page6 from "./pages/Page6";
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Index from "./pages/Index";
// @ts-ignore
import Loader from 'react-loader-spinner'
import Title from "./components/Title";

export interface IRoute {
    path: string;
    isExact: boolean;
    component: any;
    name: string;
    extraClassName?: string;
}


export interface IStateApp {
    loading: boolean;
    isMenuOpen: boolean;
}


class App extends React.Component<{}, IStateApp> {
    private routesList: IRoute[] = [
        {path: '/', name: 'Home', isExact: true, component: Index, extraClassName: 'home'},
        {path: '/page1', name: 'Layout 1', isExact: false, component: Page1},
        {path: '/page2', name: 'Layout 2', isExact: false, component: Page2},
        {path: '/page3', name: 'Layout 3', isExact: false, component: Page3},
        {path: '/page4', name: 'Layout 4', isExact: false, component: Page4},
        {path: '/page5', name: 'Layout 5', isExact: false, component: Page5},
        {path: '/page6', name: 'Layout 6', isExact: false, component: Page6}
    ]

    public state: IStateApp = {
        loading: true,
        isMenuOpen: false
    };

    public componentDidMount(): void {
        this.setState({loading: false});
    }

    public handleClickMenu = (event: React.SyntheticEvent): void => {
        event.preventDefault();
        this.setState((prevState, props) => ({
            ...prevState,
            isMenuOpen: !prevState.isMenuOpen
        }));
    }

    public render() {


        const {loading, isMenuOpen} = this.state;
        if (loading) {
            return (
                <main>
                    <Loader type="Bars" color="#somecolor" height={80} width={80}/>
                </main>
            )
        }
        return (
            <Router>
                <div className="container">
                    <Header>
                        <Title>Site Title Layout</Title>
                        <Navbar handleClickMenu={this.handleClickMenu}
                                routes={this.routesList}
                                isMenuOpen={isMenuOpen}
                        />
                    </Header>

                    <main>
                        {
                            this.routesList.map(({path, isExact, component}: IRoute, i) => (
                                <Route key={i} path={path} exact={isExact} component={component}/>
                            ))
                        }

                    </main>

                    <Footer>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique voluptatum atque est
                            debitis,
                            magni ex veniam fugiat quaerat inventore obcaecati necessitatibus praesentium iste impedit
                            quisquam quo eum aliquid. Repellat, atque.
                        </p>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique voluptatum atque est
                            debitis,
                            magni ex veniam fugiat quaerat inventore obcaecati necessitatibus praesentium iste impedit
                            quisquam quo eum aliquid. Repellat, atque.
                        </p>
                    </Footer>

                </div>

            </Router>
        );
    }
}

export default App;
