import React from "react";
import SearchCity from "./search";

const divStyle = {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    border: "2px solid black",
    width: "50%",
    height: "60vh",
    borderRadius: "20px",
    padding: "10px"
}

export default function MainContainer() {

    return (
        <div style={divStyle}>
            <SearchCity />
        </div>
    )
}