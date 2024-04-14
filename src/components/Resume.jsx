import React from "react";
import MyResume from "../pdf/Devin-Belle-Resume";

function Resume() {
    return(
    <section class="mb-5">
    <h1 className="resume">Devin Belle's Resume</h1>
        <hr></hr>

    <ReactPDF file={{data: MyResume}}/>

    {/* <iframe src={MyResume} width="100%" height="800px"></iframe> */}

       
</section>
    );
    
}

export default Resume; 