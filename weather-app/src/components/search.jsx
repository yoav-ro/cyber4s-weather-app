import React, { useState } from "react";

export default function SearchCity() {
    const [city, setCity] = useState("");

    const handleChange = (newCity) => {
        SearchCity(newCity);
    }

    const handleClick = () => {
        
    }

    return (
        <div>
            <input type="text" placeholder="Search city" onChange={(e) => { handleChange(e.target.value) }} />
            <button onClick={handleClick}>Submit</button>
        </div>
    )
}