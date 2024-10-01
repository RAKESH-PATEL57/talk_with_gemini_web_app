import { useState } from "react"

function GeneratingData()
{
    const [text,generatedText] = useState(" ");

    function data()
    {
        
    }

    return(
        <div className="container">
            <input type="text" onChange={data} />
            <ul>
                
            </ul>
        </div>
    )
}

export default GeneratingData