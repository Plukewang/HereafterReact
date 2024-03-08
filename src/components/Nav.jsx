import React from "react";
import { useState } from "react";
import Home from "./Home";
import Page from "./Page/Page";
import PlayerPage from "./Page/PlayerDisplay";


function Nav(){
    const initial = [
        {name: "Home", img: "nav-img-hidden", page: <Home/>, src: "../../color_icons/Depth.png"},
        {name: "PlayerPage", img: "nav-img-hidden", page: <PlayerPage/>, src: "../../color_icons/Instinct.png"},
        {name: "Page", img: "nav-img-hidden", page: <Page/>, src: "../../color_icons/Agility.png"},
        {name: "Page", img: "nav-img-hidden", page: <Page/>, src: "../../color_icons/Physique.png"},
        {name: "Page", img: "nav-img-hidden", page: <Page/>, src: "../../color_icons/Precision.png"},
        {name: "Page", img: "nav-img-hidden", page: <Page/>, src: "../../color_icons/Level.png"},
        {name: "Page", img: "nav-img-hidden", page: <Page/>, src: "../../color_icons/Intelligence.png"},
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
                return {...x, img: "nav-img-pop"};
            } else return {...x, img: "nav-img"};
        }));
    }

    function handleMouseOut(event){
        setVis(vis.map(x=>{
            if(x.name===event.target.name){
                return{...x, img: "nav-img"};
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
            <div className="nav">
            {vis.map(icon=>{
                    return (<button><img name = {icon.name} src = {icon.src} alt = "nav icon" className = {icon.img} onLoad={handleLoad} onClick={handleClick} onMouseOver = {handleMouseOver} onMouseOut={handleMouseOut}/></button>);
                })}
            </div>
            <div className="page">
                {page}
            </div>
            
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