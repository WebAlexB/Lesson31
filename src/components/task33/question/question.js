import React, { Component } from 'react';
import './question.css';
import Footer from "../../footer";
import Header from "../../header";

class Question extends Component {
    render() {
        return (
            <>
                <Header/>
                <div className="question">
                    <h2>Питання</h2>
                </div>
                <Footer/>
            </>
        );
    }
}

export default Question;