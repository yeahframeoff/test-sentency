import React, { useEffect, useState } from "react";

const IndexPage = () => {
    const [mainTitle, setMainTitle] = useState("Oh shit here we go again");

    useEffect(() => {
        document.addEventListener("paste", async e => {
            e.preventDefault();
            const text = await navigator.clipboard.readText();
            
            setMainTitle("Loading...")
            
            const response = await fetch("/_api/", {
                method: "post", 
                body: JSON.stringify({ text }),
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            
            setMainTitle(await response.json());
        });
    });
    return <h1>{mainTitle}</h1>;
};

export default IndexPage;