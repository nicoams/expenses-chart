import React from "react";

import '../styles/Header.scss'

export default function Header (){
    return (
        <header className="header">
            <div className="balance">
                <h1 className="title">My balance</h1>
                <p className="amount">$921.48</p>
            </div>
            <img src={process.env.PUBLIC_URL + '/images/logo.svg'} alt="" ></img>
        </header>
    )
}