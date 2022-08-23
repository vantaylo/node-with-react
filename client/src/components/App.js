import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Header from './Header';
const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>
const Landing = () => <h2>Landing</h2>


const App = () => {
    console.log("Hi There");
    
    return (
        <div className="container">
            <BrowserRouter>
                <Header/>

                <Routes>
                    <Route exact path="/" element={<Landing/>}/>
                    <Route exact path="/surveys" element={<Dashboard/>}></Route>
                    <Route path="/surveys/new" element={<SurveyNew/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;