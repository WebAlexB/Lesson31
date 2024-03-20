import React, { Component } from 'react';
import './materials.css';
import Footer from "../../footer";
import Header from "../../header";

class Materials extends Component {
    render() {
        return (
            <>
                <Header/>
                <div className="materials">
                    <h2>Матеріали</h2>
                </div>
                <Footer/>
            </>
        );
    }
}

export default Materials;