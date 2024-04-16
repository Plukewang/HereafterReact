import { useLayoutEffect } from "react";
import gsap from "gsap";
export default function Loading(){
    useLayoutEffect(()=>{
        gsap.to("#image", {
            rotation: 360,
            duration: 2,
            repeat: -1, // -1 for infinite loop
            ease: "linear"
          });
    },[]);
    
    
    return (
        <div style={{backgroundColor: "#161315", display: "flex", flexDirection: "column", alignItems: "center"}}>
            <h1 style={{margin: 0, padding: "100px"}}>Loading...</h1>
            <p style={{textAlign: "center"}}>Spinning up the data. This may take a few seconds...</p>
            <img id = 'image' src="../../favicon.png" alt="loading"/>
        </div>
    )

}