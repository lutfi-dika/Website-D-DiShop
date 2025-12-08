import React, { useState } from "react";
import supabase from "../supabaseClient";
import "../styles/auth.css";

export default function Register({ setPage }) {
    const [fullName, setFullName] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [msg, setMsg] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();
        setLoading(true);

        const { data: authData, error: authError } = await supabase.auth.signUp({
            email,
            password,
        });

        if (authError) {
            setMsg(authError.message);
            setLoading(false);
            return;
        }

        const user = authData.user;

        const { error: profileError } = await supabase.from("user_profil").insert([
            {
                id: user.id,
                full_name: fullName,
                phone,
                address,
                role: "user",
                created: new Date(),
            },
        ]);

        if (profileError) {
            setMsg(profileError.message);
            setLoading(false);
            return;
        }

        setMsg("Registrasi berhasil! Silakan login.");
        setLoading(false);
        setPage("login");
    };

    return (
        <div className="auth-container">
            <form className="auth-box" onSubmit={handleRegister}>
                <h2>Register</h2>

                {msg && <p className="auth-msg">{msg}</p>}

                <input type="text" placeholder="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} required />

                <input type="text" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} required />

                <input type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} required />

                <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} required />

                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />

                <button disabled={loading}>{loading ? "Processing..." : "Register"}</button>

                <p className="auth-bottom-text">
                    Sudah punya akun? <span onClick={() => setPage("login")}>Login</span>
                </p>
            </form>
        </div>
    );
}
