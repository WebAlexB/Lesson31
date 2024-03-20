import React, { Component } from 'react';
import './contacts.css';
import Footer from "../../footer";
import Header from "../../header";

class Contacts extends Component {
    render() {
        return (
            <>
                <Header/>
                <div className="contacts">
                    <h2>Контакти</h2>
                </div>
                <Footer/>
            </>
        );
    }
}

export default Contacts;