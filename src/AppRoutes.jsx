import { BrowserRouter, Routes, Route } from "react-router-dom";
import TemperatureApp from "./pages/TemperatureApp";

function AppRoutes() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<TemperatureApp/>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRoutes