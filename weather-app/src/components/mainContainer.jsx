import React from "react";
import SearchCity from "./search";
import City from "./cityDisplay";
import History from "./history";

const divStyle = {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    border: "2px solid black",
    width: "50%",
    height: "60vh",
    borderRadius: "20px",
    padding: "10px",
    boxShadow: "2px 2px 2px black",
    backgroundColor: "white"
}

const dataDivStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gridTemplateGows: "1fr",
    gridColumnGap: "0px",
    gridRowGap: "0px",
}

export default function MainContainer() {

    return (
        <div style={divStyle}>
            <SearchCity />
            <div style={dataDivStyle}>
                <City />
                <History />
            </div>

        </div>
    )
}