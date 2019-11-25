import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Provider } from "react-redux";
import store from "../store/index";
import App from "./App";
import Detail from "./Detail";
import Callback from "./Callback";
import User from "./User";

// Este é o Componente Base da aplicação onde vão ser carregados os dois "sub-componentes" List e Form

const Root = ({ store }) => (
    <Provider store={store}>
        <Router>
            <div>
                <nav>
                    <ul className="nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/detail/">Detail</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/users/">Users</Link>
                        </li>

                        <User />

                    </ul>
                </nav>

                <Route path="/" exact component={App} />

                <Route path="/detail/:id" component={Detail} />

                {/* Route que irá obter a resposta do Laravel (api) com o código para pedir o access token  */}
                <Route path="/callback" component={Callback} />

            </div>
        </Router>
    </Provider>
)

export default Root;
