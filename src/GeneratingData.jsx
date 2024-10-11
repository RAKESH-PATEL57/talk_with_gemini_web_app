import { useState } from "react";

import { GoogleGenerativeAI } from "@google/generative-ai";
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_REACT_APP_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

function GeneratingData()
{
    const [prompt,setPrompt] = useState("");
    const [text,generatedText] = useState("");

    const[containerId,setContainerId] = useState("hideContainer");

    let allContents = []

    function data(e)
    {
        setPrompt(e.target.value);
    }

    async function generateContent()
    {
        const result = await model.generateContent(prompt);
        setContainerId("displayContainer");
        generatedText(result.response.text());
        console.log(result.response.text());
    }
    
    allContents = text.split(".");
    allContents.length = allContents.length - 1;
    // console.log(allContents);

    return(
        <>
        <img className="bg" src="/src/assets/bg.jpg" alt="" />
        <div className="container">
            <input type="text" placeholder="what you want to search today" value={prompt} onChange={data} />
            <ul className="generatexText-container" id={containerId}>
            {(allContents.length > 1) ? allContents.map((data,index) => {
                    return <li className="generatexText" key={index}>{data}</li>
                }) : null}
               
            </ul>
            <button id="submitBtn" onClick={generateContent}>SUBMIT</button>
        </div>
        </>
    )
}

export default GeneratingData