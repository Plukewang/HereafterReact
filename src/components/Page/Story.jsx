import React from "react";
import styles from "../../styles/Story.module.css";
import DocViewer, {PDFRenderer} from "@cyntler/react-doc-viewer";
import { useWindowSize } from "@uidotdev/usehooks";
import { useRef } from "react";

function Story(props){
    //TODO: MAKE INTO NON PLACEHOLDER
    const stories = [{uri: require("../../Stories/A World of Two Artists.pdf")},
                    {uri: require("../../Stories/A World of Two Artists.pdf")},  
                    {uri: require("../../Stories/A World of Two Artists.pdf")},
                    {uri: require("../../Stories/A World of Two Artists.pdf")},
                    {uri: require("../../Stories/Outer Heaven 1.pdf")},
                    {uri: require("../../Stories/Outer Heaven 2.pdf")},
                    {uri: require("../../Stories/Outer Heaven 3.pdf")},
                    ];
    

    const zoomRef = useRef(null);

    const size = useWindowSize();
    //adjust size
    React.useEffect(()=>{
        if(size.width<=300){
            zoomRef.current = 2;
        }else{
            zoomRef.current = 1;
        }
    },[size])


    return (
        <div className = {styles.story}>
            <h1>{stories[props.active].uri.substring(14, stories[props.active].uri.indexOf('.'))}</h1>
            <DocViewer documents={stories} activeDocument={stories[props.active]} pluginRenderers={[PDFRenderer]} ref={zoomRef}
                config={
                    {
                    header: {
                        disableHeader: true,
                        disableFileName: true,
                        retainURLParams: false,
                    },

                    pdfZoom: {
                        defaultZoom: zoomRef.current, // 1 as default,
                        zoomJump: 0.2, // 0.1 as default,
                    },
                }}
            />
        </div>
    )
}

export default Story;