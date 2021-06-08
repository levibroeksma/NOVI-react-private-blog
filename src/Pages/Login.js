import {useState} from "react";
import { useHistory } from "react-router-dom";

function Login({authenticated, setAuthenticated}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const history = useHistory();

    const onSubmit = () => {
        if (username === "levi" && password === "test") {
            setAuthenticated(true)
            console.log('je bent ingelogd!')
            history.push('blog')
        }
        else {
            console.log("Helaas")
        }
    }

    return (
        <>
            <h1>Login</h1>
            <div className="button-wrapper">
                <label htmlFor="username">
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={username}
                        onChange={(e)=> setUsername(e.target.value)}
                    />
                </label>
                <label htmlFor="password">
                    <input
                        type="password"
                        name="password"
                        placeholder="Password..."
                        value={password}
                        onChange={(e)=> setPassword(e.target.value)}
                    />
                </label>
                <button type="submit" onClick={onSubmit}>Login</button>
            </div>
        </>
    )
}

export default Login;