import React from "react";
import "../styles/LoadingScreen.css";

function LoadingScreen() {
    return (
        <div className="loading-overlay">
            <div className="loading-spinner"></div>
            <p className="loading-text">Loading...</p>
        </div>
    );
}

export default LoadingScreen;
