import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom'

// const Header = () => <h2>Header</h2>
// const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>
const Landing = () => <h2>Landing</h2>


const App = () => {
    console.log("Hi There");
    
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Landing/>}/>
                    <Route path="/surveys" element={<SurveyNew/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;