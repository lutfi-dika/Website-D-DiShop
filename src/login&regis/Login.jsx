import React, { useState } from "react";
import supabase from "../supabaseClient";
import "../styles/auth.css";

export default function Login({ setPage }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [msg, setMsg] = useState("");
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);

        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            setMsg(error.message);
            setLoading(false);
            return;
        }

        setMsg("Login berhasil!");
        setLoading(false);
    };

    return (
        <div className="auth-container">
            <form className="auth-box" onSubmit={handleLogin}>
                <h2>Login</h2>

                {msg && <p className="auth-msg">{msg}</p>}

                <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} required />

                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />

                <button disabled={loading}>{loading ? "Processing..." : "Login"}</button>

                <p className="auth-bottom-text">
                    Belum punya akun? <span onClick={() => setPage("register")}>Register</span>
                </p>
            </form>
        </div>
    );
}
