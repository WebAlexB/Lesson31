import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../header/header.css';

class Header extends Component {
    render() {
        return (
            <header className="header-yummu">
                <div className="menu-header">
                    <Link to="/contact">Контакти</Link>
                    <Link to="/menu">Меню</Link>
                    <Link to="/promotions">Акції</Link>
                    <Link to="/task33">ДЗ/33</Link>
                </div>
                <div className="logo-header">
                    <Link to="/"><img src="static/images/logo/logo_pizza.png" alt="logo"/></Link>
                </div>
                <div className="info-header">
                    <p>Щодня 10:00-21:00</p>
                    <a href="#">+380999999999</a>
                </div>
            </header>
        );
    }
}

export default Header;