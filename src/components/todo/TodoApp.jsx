import "./TodoApp.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import LogoutComponent from "./LogoutComponent"
import FooterComponent from "./FooterComponent"
import HeaderComponent from "./HeaderComponent"
import ListTodosComponennt from "./ListTodosComponent"
import WelcomeComponent from "./WelcomeComponent"
import ErrorComponent from "./ErrorComponent"
import LoginComponent from "./LoginComponent"

export default function TodoApp() {
    return (
        <div className="TodoApp">

            <BrowserRouter>
                <HeaderComponent />
                <Routes>
                    <Route path="/" element={<LoginComponent />} ></Route>
                    <Route path="/login" element={<LoginComponent />} ></Route>
                    <Route path="/welcome/:username" element={<WelcomeComponent />} ></Route>
                    <Route path="/todos" element={<ListTodosComponennt />} ></Route>
                    <Route path="/logout" element={<LogoutComponent />} ></Route>
                    <Route path="*" element={<ErrorComponent />} ></Route>
                </Routes>
                <FooterComponent />
            </BrowserRouter>

        </div>
    )

}













