import React from "react";
import { Provider } from "react-redux";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import GreetingContainer from "./greeting/greeting_container";
import SignUpFormContainer from "./session_form/signup_form_container";
import SignInFormContainer from "./session_form/signin_form_container";
import Main from "./main/main";
import Splash from "./splash";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import Modal from "./modal/modal";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="root-container">
        <Modal />
        <Switch>
          <Route exact path="/" component={Splash} />
          <AuthRoute exact path="/signin" component={SignInFormContainer} />
          <AuthRoute exact path="/signup" component={SignUpFormContainer} />
          <ProtectedRoute exact path="/main" component={Main} />
        </Switch>
      </div>
    );
  }
}

export default App;
