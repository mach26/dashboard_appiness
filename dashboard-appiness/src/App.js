import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  // useHistory,
  // useLocation
} from "react-router-dom";
import { connect } from "react-redux";


import LoginPage from "./components/LoginPage";
import Dashboard from "./components/Dashboard";

function PrivateRoute({ children,isAuthenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
      isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}


function App({isAuthenticated}) {
  return (
    <Router>
      <Switch>
      <Route
                exact
                path="/"
                render={() => {
                    return (isAuthenticated?
                      (<Redirect to="/dashboard" /> ):
                      (<Redirect to="/login" /> )
                    )
                }}
              />
            <Route path="/login">
              <LoginPage />
            </Route>
            <PrivateRoute path="/dashboard" isAuthenticated={isAuthenticated}>
              <Dashboard />
            </PrivateRoute>
          </Switch>
      </Router>
  );
}

const mapStateToProps = (state) => {
  return{
      isAuthenticated:state.login.is_authenticated
  }
}

const withConnect = connect(mapStateToProps,null)

export default withConnect(App);
