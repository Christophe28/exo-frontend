import React from "react";
import { Routes, Route } from "react-router-dom";

//Component import
import Login from "./pages/login";
import Messages from "./pages/messages";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/chat" element={<Messages />} /> 
        </Routes>
    );
};

export default App;