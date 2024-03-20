import React, {Component} from 'react';
import './home.css';
import {Link} from "react-router-dom";
import Footer from "../../footer";
import Header from "../../header";

class Home extends Component {
    render() {
        return (
            <>
                <Header/>
                <div className="home-task33">
                    <Link to="/contacts">Контакти</Link>
                    <Link to="/materials">Матеріали</Link>
                    <Link to="/question">Питання</Link>
                </div>
                <Footer/>
            </>
        );
    }
}

export default Home;