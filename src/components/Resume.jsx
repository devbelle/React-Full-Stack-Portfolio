import React from "react";
import MyResume from "../pdf/Devin-Belle-Resume.pdf";
//import { Link } from "react-router-dom";

function Resume() {
  console.log(MyResume);
  return (
    <section class="mb-5">
      <h1 className="resume">Devin Belle's Resume</h1>
      <hr></hr>

      {/* <Link href="https://docs.google.com/document/d/1BBYNCbd8tvP1b9AqB7bzxyJXRrc1d-D2rDkUdiy1MNw/edit?usp=sharing">Resume</Link> */}

      <iframe src={MyResume} width="100%" height="800px"></iframe>
    </section>
  );
}

export default Resume;
