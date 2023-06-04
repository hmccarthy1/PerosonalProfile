import React from "react";
import HunterResume from '../assets/files/HunterResume.pdf'
import { Link } from "react-router-dom";

const Download = (props) => {

    // Function will execute on click of button
    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('/download/resume').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'SamplePDF.pdf';
                alink.click();
            })
        })
    }
    return (
        <>
        <div className="row justify-content-center" style={{
            width: '100vw'
        }}>
            <center >
                
            <h2>Hunter McCarthy</h2>

<Link
  to={HunterResume}
  download= 'Hunter McCarthy Resume'
  target="_blank"
  rel="noreferrer"
>
  dowload my resume
</Link>
            </center>
            </div>
        </>
    );
};





export default Download



