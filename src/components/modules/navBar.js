import React from 'react';
import './navBar.css';
import {useState, useEffect} from "react";

const NavBar = (props) => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    const hours = date.getHours();
    const ampm = hours >= 12 ? (hours > 18 ? "晚上": "下午") : '上午';
    return (
        <nav className="navbar">
            <ul>
                <div className="navbar-logo">统一身份认证系统</div>
                <li><a href="/index/profile">Profile</a></li>
                <li><a href="/index/security">Security</a></li>
                <p className="welcome-p">Welcome {props.username},  {ampm}好!, 现在是 {date.toLocaleDateString()} {date.toLocaleTimeString()}
                </p>
            </ul>
        </nav>
    );
};

export default NavBar;