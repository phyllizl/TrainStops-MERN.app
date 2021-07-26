import React from "react";
import { useState, useEffect } from "react";

//This will be the landing page where you get: (a) MRT lines, which are (b) drop down lists that show all the stations in that line

const Main = () => {

    const [mrtStations, setMrtStations] = useState([]);

    useEffect(() => {
        fetch("/v1/mrt")
        .then((res) => res.json())
        .then((data) => setMrtStations(data));
        console.log("data", mrtStations);
    }, [])


    return(
        <>
            <h1> Landing Page </h1>
            {mrtStations?.map((ele, index) => ( <p>{ele?.Station}</p> ))}
        </>
    )
}

export default Main;