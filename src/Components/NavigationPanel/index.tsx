import React from "react";
import { NavLink } from "react-router-dom";
import { NavigationObj } from "../../helper/NavigationDetails";

const NavigationPanel: React.FunctionComponent = () => {
    return <section id='nav-container'>
        <nav>
            {Object.keys(NavigationObj).map((key) => {
                const item = NavigationObj[key];
                return (<NavLink key={item.label} to={item.link}>{item.label}</NavLink>);
            })}
        </nav>
    </section>;
};

export default NavigationPanel;