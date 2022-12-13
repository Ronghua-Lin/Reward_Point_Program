import "./App.css";
import DetailTable from "./components/detail_table/detail_table.jsx";
import OverviewTable from "./components/overview_table/overview_table.jsx";
import Page404 from "./components/page404/page404.jsx";
import { Route, Routes, Link, Navigate, Form } from "react-router-dom";
import { useState } from "react";

function App() {
    const[groupByUser,setGroupByUser] = useState(true)
    return (
        <div className="App">  
            <div className="header-container">
                <h2>Rewards Table</h2>
                <div className="checkbox-container">
                    <label>Group By User</label>
                    <input type='checkbox'
                        checked={groupByUser}
                        onChange={() => { setGroupByUser(!groupByUser) }}>
                    </input>
                </div>

            </div>    
            <div className="content-container">
                {
                    groupByUser ? <DetailTable/> : <OverviewTable />
                }
            </div>
            
        </div>
    );
}

export default App;
