'use client'

import {useState} from "react";
import {useRouter} from "next/navigation";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const router = useRouter()

    const DUMMY_CREDENTIALS = {
        email: "test@maddox123.ai",
        password: "supersecure",
    };

    const handleLogin = (e) => {
        e.preventDefault();
        if (email === DUMMY_CREDENTIALS.email && password === DUMMY_CREDENTIALS.password) {
            localStorage.setItem("token", "dummy_token_12345");
            router.push("/");
        } else {
            setMessage("Invalid email or password. Try again.");
        }
    };

    return (
        <div style={{margin: "0 auto"}}>
            <h2 style={{margin: "24px", textAlign: "center"}}>Demo Login Form</h2>
            <form onSubmit={handleLogin} style={{
                textAlign: "left",
                padding: "24px",
                width: "450px",
                margin: "0 auto",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                backgroundColor: "white",
                borderRadius: "8px"
            }}>
                <div style={{"marginBottom": "16px"}}>
                    <label style={{"display": "block", padding: "8px 0"}}>Email</label>
                    <input
                        style={{"width": "100%", padding: "8px"}}
                        id="email-input"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div style={{"marginBottom": "16px"}}>
                    <label style={{display: "block", padding: "8px 0"}}>Password</label>
                    <input
                        id="password-input"
                        style={{"width": "100%", padding: "8px"}}
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
                {message && <p style={{margin: "16px 0", padding: "16px",color: "rgb(95, 36, 47)", backgroundColor: "rgb(253, 238, 241)"}}>{message}</p>}
            </form>
        </div>
    );
}