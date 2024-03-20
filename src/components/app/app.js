import React, {Component} from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "../pages/home";
import Menu from "../pages/menu";
import About from "../pages/about";
import Contact from "../pages/contact";
import Promotions from "../pages/promotions";
import NotFound from "../pages/notFound";
import Contacts from "../task33/contacts";
import HomeTask33 from "../task33/home";
import Materials from "../task33/materials";
import Question from "../task33/question/question";

class App extends Component {
    render() {
        return (
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/menu" element={<Menu/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/promotions" element={<Promotions/>}/>
                <Route path="/task33" element={<HomeTask33/>}/>
                <Route path="/contacts" element={<Contacts/>}/>
                <Route path="/materials" element={<Materials/>}/>
                <Route path="/question" element={<Question/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        );
    }
}

export default App;