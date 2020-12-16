import './House.css';
import React from "react";
import Sidebar from "./Sidebar";
import Plan from "./Plan";
import PropertiesSidebar from "./PropertiesSidebar";
import HouseProvider from "./HouseProvider";

function House() {
    return (
        <HouseProvider>
            <div id="house">
                <header>
                    <h1>This is the house</h1>
                </header>
                <main>
                    <Sidebar />
                    <Plan />
                </main>
            </div>
            <PropertiesSidebar />

        </HouseProvider>
    )
}

export default House;
