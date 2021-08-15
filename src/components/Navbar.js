import React,  { Fragment } from 'react'
import Home from './Home';
import Users from './Users';
import AddUsers from './AddUsers'
import { 
    BrowserRouter as Router,
    Switch,
    Route,
    Link 
} from "react-router-dom";

export const Navbar = () => {
    const navLinkStyle = {
        color: 'white',
    }
    return (
        <Fragment>
            <Router>
                <nav className="navbar">
                    <ul className="navbar__list">
                        <li className="navbar__link">
                            <Link style={navLinkStyle} to="/">Home</Link> 
                        </li>
                        <li className="navbar__link">
                            <Link style={navLinkStyle} to="/users">Users</Link>
                        </li>
                        <li className="navbar__link">
                            <Link style={navLinkStyle} to="/addUsers">AddUsers</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/users">
                        <Users />
                    </Route>
                    <Route exact path="/addUsers">
                        <AddUsers />
                    </Route>
                </Switch>
            </Router>
        </Fragment>
        
    )
}

export default Navbar;