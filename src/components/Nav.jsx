import React from "react";
import { useState } from "react";
import Home from "./Main_Pages/Home";
import Page from "./Page/Page";
import PlayerPage from "./Main_Pages/PlayerDisplay";
import ContactMe from "./Main_Pages/ContactMe";
import Blog from "./Main_Pages/Blog";
import Stories from "./Main_Pages/Stories";
import Compendium from "./Main_Pages/Compendium";
import Footer from "./Footer";
function Nav(){
    const initial = [
        {name: "Home", img: "nav-img-hidden", page: <Home/>, src: "../../color_icons/Depth.png", hover: "nav-p",},
        {name: "Player Page", img: "nav-img-hidden", page: <PlayerPage/>, src: "../../color_icons/Instinct.png " , hover: "nav-p"},
        {name: "Compendium", img: "nav-img-hidden", page: <Compendium />, src: "../../color_icons/Agility.png", hover: "nav-p"},
        {name: "Stories", img: "nav-img-hidden", page: <Stories/>, src: "../../color_icons/Physique.png", hover: "nav-p"},
        {name: "Blog", img: "nav-img-hidden", page: <Blog/>, src: "../../color_icons/Precision.png", hover: "nav-p"},
        {name: "Guide", img: "nav-img-hidden", page: <Page/>, src: "../../color_icons/Level.png", hover: "nav-p"},
        {name: "Contact Me", img: "nav-img-hidden", page: <ContactMe/>, src: "../../color_icons/Intelligence.png", hover: "nav-p"},
    ];

    const [vis, setVis] = useState(initial);
    const [page, setPage] = useState(<Home/>)


    function handleLoad(){
        setVis(vis.map(x=>{
            return{...x, img: "nav-img-load"};
        }));
       
    }

    function handleMouseOver(event){
        setVis(vis.map(x=>{
            if(x.name===event.target.name){
                return {...x, img: "nav-img-pop", hover: "nav-hover"};
            } else return {...x, img: "nav-img", hover: "nav-p"};
        }));
    }

    function handleMouseOut(event){
        setVis(vis.map(x=>{
            if(x.name===event.target.name){
                return{...x, img: "nav-img", hover: "nav-p"};
            } else return {...x, img: "nav-img"};
        }));
    }

    function handleClick(event){
        setPage(vis.find(x=>{
            return x.name===event.target.name;
        }).page
        );
        
    }

    return (
        <div >
            <div className="nav" >
            {vis.map((icon,i)=>{
                    return (
                        <button key = {i}>
                            <img name = {icon.name} src = {icon.src} alt = "nav icon" className = {icon.img} onLoad={handleLoad} onClick={handleClick} onMouseOver = {handleMouseOver} onMouseOut={handleMouseOut}/>
                            <h3 className={icon.hover}>{icon.name}</h3>
                        </button>
                    );
                })}
            </div>
            <div className="page">
                {page}
            </div>
            <Footer />
        </div>
        );
}

export default Nav;
/*<button><img name = "Home" src = "../../color_icons/Depth.png" alt = "nav icon" className={vis.img} onLoad={handleLoad} onClick={handleClick} onMouseOver = {handleMouseOver} onMouseOut={handleMouseOut}/></button>
                <button><img name = "Page" src = "../../color_icons/Instinct.png" alt = "nav icon" className={vis.img} onClick={handleClick} onMouseOver = {handleMouseOver} onMouseOut={handleMouseOut}/></button>
                <button><img name = "Page" src = "../../color_icons/agility1.png" alt = "nav icon" className={vis.img} onClick={handleClick} onMouseOver = {handleMouseOver} onMouseOut={handleMouseOut}/></button>
                <button><img name = "Page" src = "../../color_icons/Physique.png" alt = "nav icon" className={vis.img} onClick={handleClick} onMouseOver = {handleMouseOver} onMouseOut={handleMouseOut}/></button>
                <button><img name = "Page" src = "../../color_icons/precision1.png" alt = "nav icon" className={vis.img} onClick={handleClick} onMouseOver = {handleMouseOver} onMouseOut={handleMouseOut}/></button>
                <button><img name = "Page" src = "../../color_icons/Level.png" alt = "nav icon" className={vis.img} onClick={handleClick} onMouseOver = {handleMouseOver} onMouseOut={handleMouseOut}/></button>
                <button><img name = "Page" src = "../../color_icons/Intelligence.png" alt = "nav icon" className={vis.img} onClick={handleClick} onMouseOver = {handleMouseOver} onMouseOut={handleMouseOut}/></button> */