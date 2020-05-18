import React from "react";
import loadingGif from "../images/gif/loading-gear.gif"

const Loader = ()=> {
    return(
        <div className="loading">
            <h4> loading...</h4>
            <img src={loadingGif} alt="Loading"/>
        </div>
    )
};

export default  Loader
