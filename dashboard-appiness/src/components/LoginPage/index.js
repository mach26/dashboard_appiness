import React, { useState } from "react";
import { connect } from "react-redux";
import {
    useHistory,
  } from "react-router-dom";
import { onLogin } from "../../redux/actions/login"
import "./style.css";


function LoginPage({ login }) {
    const history = useHistory();
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const onChangeUser = (e) => {
        setUser(e.target.value)
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const checkUser = (event) => {
        event.preventDefault();
        if (user.trim().toLowerCase() === "hruday@gmail.com" && password === "hruday123") {
            login(user);
            history.push("/dashboard")
        } else {
            setError(true);
            setTimeout(()=>setError(false),1000)
        }
    };

    return (
        <div className="container-wrapper">
            <form>
                <h1>Login</h1>
                <div className="form-group" >
                    <label htmlFor="email">Email Id </label>
                    <input type="email" className="form-control" value={user} onChange={onChangeUser} required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Password </label>
                    <input type="password" className="form-control" value={password} onChange={onChangePassword} required />
                </div>
                <input type="submit" className="btn" value="login" onClick={checkUser} />
               {error &&  <div className="error">Invalid Credential</div>}
            </form>
        </div>
    )

}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (user) => dispatch(onLogin(user))
    }
}

const withConnect = connect(null, mapDispatchToProps)

export default withConnect(LoginPage);