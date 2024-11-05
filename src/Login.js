import React from "react";

const Login = () => {
    return(
        <div>
            <h1>Login</h1>
            <div>
                <input type="email" placeholder="user email" required></input>
            </div>
            <div>
                <input type="password" placeholder="user password" required></input>
            </div>
            <button type="submit">Login</button>
        </div>
    )
}
export default Login;