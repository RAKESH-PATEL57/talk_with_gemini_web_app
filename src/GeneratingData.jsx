import { useState } from "react";

import { GoogleGenerativeAI } from "@google/generative-ai";
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_REACT_APP_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

function GeneratingData()
{
    const [prompt,setPrompt] = useState(" ");
    const [text,generatedText] = useState(" ");

    let allContents = []

    function data(e)
    {
        setPrompt(e.target.value);
    }

    async function generateContent()
    {
        
        const result = await model.generateContent(prompt);
        generatedText(result.response.text());
    }
    
    allContents = text.split(".");

    return(
        <>
        <img className="bg" src="/src/assets/bg.jpg" alt="" />
        <div className="container">
            <input type="text" value={prompt} onChange={data} />
            <ul className="generatexText-container">
                {allContents.map((data,index) => {
                    return <li className="generatexText" key={index}>{data}</li>
                })}
            </ul>
            <button id="submitBtn" onClick={generateContent}>SUBMIT</button>
        </div>
        </>
    )
}

export default GeneratingData