import React from "react";
import styles from "../../../styles/Story.module.css";
import DocViewer, {DocViewerRenderers, PDFRenderer} from "@cyntler/react-doc-viewer";
import { useWindowSize } from "@uidotdev/usehooks";
import { useRef } from "react";
import { pdfjs } from 'react-pdf';
import { Document, Page } from 'react-pdf';
import { useState } from "react";

import file1 from '../../../Stories/A World of Two Artists.pdf';
import file2 from '../../../Stories/Outer Heaven 1.pdf';
import file3 from '../../../Stories/Outer Heaven 3.pdf';
import file4 from '../../../Stories/Outer Heaven 2.pdf';
import Loading from "../Loading";


pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

function Story(props){
    //TODO: MAKE INTO NON PLACEHOLDER
    const stories = [file1,
                    file2,
                    file3,
                    file4];
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setPageNumber(1);
      }
    
      function changePage(offset) {
        setPageNumber(prevPageNumber => prevPageNumber + offset);
      }
    
      function previousPage() {
        changePage(-1);
      }
    
      function nextPage() {
        changePage(1);
      }
    
    
    //points to zoom default value
    const [zoom, setZoom] = useState(0);

    const size = useWindowSize();
    //adjust size
    React.useEffect(()=>{
        
        if(size.width<=1200){
            setZoom(0.85);
        }else{
            setZoom(0.55);
        }
    },[size])


    return (
        <div className = {styles.story}>
            <div style={{display: 'flex',flexDirection: 'row',justifyContent:'space-between'}}>
                    <button
                    type="button"
                    disabled={pageNumber <= 1}
                    onClick={previousPage}
                    >
                        Back
                    </button>
                    <p>Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'} </p>    
                    <button
                    type="button"
                    disabled={pageNumber >= numPages}
                    onClick={nextPage}
                    >
                        Next
                    </button>
            </div>
                    
            
            <Document 
            file={stories[props.active]} 
            onLoadSuccess={onDocumentLoadSuccess} 
            renderMode="canvas">
                {stories[props.active]?<Page pageNumber={pageNumber} width={window.innerWidth*zoom} scale = {1}/>: <Loading/>}
            </Document>
            <div>
                    

                    <button
                    type="button"
                    disabled={pageNumber <= 1}
                    onClick={previousPage}
                    >
                        Back
                    </button>

                    <button
                    type="button"
                    disabled={pageNumber >= numPages}
                    onClick={nextPage}
                    >
                        Next
                    </button>
            </div>
        </div>
    )
}

export default Story;