import * as React from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
import Page5 from "./pages/Page5";
import Page6 from "./pages/Page6";


class App extends React.Component {
    public render() {
        return (
            <Router>
                <div className="container">
                    <header>
                        <nav>
                            <div className="row">
                                <div className="col-xs-12">
                                    <ul>
                                        <li>
                                            <Link to="/">Sitio 1</Link>
                                        </li>
                                        <li>
                                            <Link to="/page2/">Sitio 2</Link>
                                        </li>
                                        <li>
                                            <Link to="/page3/">Sitio 3</Link>
                                        </li>
                                        <li>
                                            <Link to="/page4/">Sitio 4</Link>
                                        </li>
                                        <li>
                                            <Link to="/page5/">Sitio 5</Link>
                                        </li>
                                        <li>
                                            <Link to="/page6/">Sitio 6</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>

                    </header>

                    <main>
                        <Route path="/" exact={true} component={Page1}/>
                        <Route path="/page2" component={Page2}/>
                        <Route path="/page3" component={Page3}/>
                        <Route path="/page4" component={Page4}/>
                        <Route path="/page5" component={Page5}/>
                        <Route path="/page6" component={Page6}/>


                    </main>

                </div>

            </Router>
        );
    }
}

export default App;
