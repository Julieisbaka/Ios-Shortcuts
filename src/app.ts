import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import EditorPage from './pages/Editor';
import Settings from './pages/Settings';
import './index.css';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Dashboard} />
                <Route path="/editor" component={EditorPage} />
                <Route path="/settings" component={Settings} />
            </Switch>
        </Router>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));