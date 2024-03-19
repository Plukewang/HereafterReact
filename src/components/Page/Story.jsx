import React from "react";
import styles from "../../styles/Story.module.css";
import DocViewer, {PDFRenderer} from "@cyntler/react-doc-viewer";

function Story(){
    //TODO: MAKE INTO NON PLACEHOLDER
    const stories = [{uri: require("../../Stories/A World of Two Artists.pdf")}];

    return (
        <div className = {styles.story}>
            <DocViewer documents={stories} pluginRenderers={[PDFRenderer]}
                config={
                    {
                    header: {
                        disableHeader: true,
                        disableFileName: true,
                        retainURLParams: false,
                    },

                    pdfZoom: {
                        defaultZoom: 1, // 1 as default,
                        zoomJump: 0.2, // 0.1 as default,
                    },
                }}
            />
        </div>
    )
}

export default Story;