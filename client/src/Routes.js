import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Users from "./pages/Users"
import CreateUser from "./pages/CreateUser"
import EditUser from "./pages/EditUser"


export default function Routing() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Users />} />
                <Route path="user/create" element={<CreateUser />} />
                <Route path="user/edit/:id" element={<EditUser />} />
            </Routes>
        </BrowserRouter>
    )
}
