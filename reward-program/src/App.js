import "./App.css";
import Detail_table from "./components/detail_table/detail_table.jsx";
import Overview_table from "./components/overview_table/overview_table.jsx";
import Page404 from "./components/page404/page404.jsx";
import { Route, Routes, Link, Navigate } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Navigate to="/Detail_table" />} />
                <Route path="/Detail_table" element={<Detail_table />} />
                <Route path="/Overview_table" element={<Overview_table />} />
                <Route path="/*" element={<Page404 />} />
            </Routes>
        </div>
    );
}

export default App;
