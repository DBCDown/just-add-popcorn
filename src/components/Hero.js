import React from 'react'
import Nav from "./Nav";
import BgCover from "./BgCover";
const Hero = () => {
    return (
        <div className="hero">
            <div className="wrapper">
                <div className="row">
                    <div className="md-col-6">
                        <h1 style={{textTransform: 'uppercase'}}>Just add popcorn</h1>
                        <h4>Movie download and streaming</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Nav/>
                    </div>
                </div>
            </div>
            <BgCover/>
        </div>

    )
}

export default Hero