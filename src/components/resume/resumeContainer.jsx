import React, { useState } from "react";
import { initialData } from "../data";
import SingleResume from "./singleResume";

function ResumeContainer({ resume }) {
  // console.log("resume in asdasda",resume)npm install react-dnd react-dnd-html5-backend
  return (
    <div className="Resume__container__global">
      {resume.map((item, index) => (
        <SingleResume key={index} resume={item} />
      ))}
    </div>
  );
}

export default ResumeContainer;
