import React from "react";
import { useState } from "react";
import Home from "./Routes/Home";
import Page from "./Page/Page";
import PlayerPage from "./Routes/Player/PlayerDisplay";
import ContactMe from "./Routes/ContactMe";
import Blog from "./Routes/Blog/Blog";
import Stories from "./Routes/Stories/Stories";
import Compendium from "./Routes/Compendium/Compendium";
import SessionManager from "./Routes/Session";
import Footer from "./Footer";
import {Link, Outlet} from "react-router-dom";
import { Drawer } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useWindowSize } from "@uidotdev/usehooks";
import { useNavigation } from 'react-router-dom';
import Loading from "./Routes/Loading";

function Nav(){
    let nav = useNavigation();
    //for mobile sidebar
    const mobile = useWindowSize().width < 1280;
    const [open, setOpen] = useState(false);


    const toggleDrawer = (newOpen) => {
        setOpen(newOpen);
      };

    const initial = [
        {name: "Home", img: "nav-img-hidden", page: <Home/>, src: "../../color_icons/Depth.png", hover: "nav-p", url: ""},
        {name: "Player Page", img: "nav-img-hidden", page: <PlayerPage/>, src: "../../color_icons/Instinct.png " , hover: "nav-p", url: "players"},
        {name: "Compendium", img: "nav-img-hidden", page: <Compendium />, src: "../../color_icons/Agility.png", hover: "nav-p", url: "compendium"},
        {name: "Stories", img: "nav-img-hidden", page: <Stories/>, src: "../../color_icons/Physique.png", hover: "nav-p", url: "stories"},
        {name: "Blog", img: "nav-img-hidden", page: <Blog/>, src: "../../color_icons/Precision.png", hover: "nav-p", url: "blog"},
        {name: "Session", img: "nav-img-hidden", page: <SessionManager/>, src: "../../color_icons/Level.png", hover: "nav-p", url: "session"},
        {name: "Contact Me", img: "nav-img-hidden", page: <ContactMe/>, src: "../../color_icons/Intelligence.png", hover: "nav-p", url: "contactme"},
    ];




    return (
        <div >
        
            <div className="nav" >
                {
                    mobile? <div>
                    <button className="navFixedButton" onClick={()=>{toggleDrawer(true)}}><MenuIcon/></button>

                        <Drawer  className="navDrawer" open={open} onClose={()=>{
                            toggleDrawer(false)
                        }}>
                                {initial.map((icon,i)=>{
                                return (
                                    <button key = {i} className="navButton">
                                        <Link to={icon.url}>
                                            <img name = {icon.name} src = {icon.src} alt = "nav icon" className ="navIcon"  />
                                            <h3>{icon.name}</h3>
                                        </Link>
                                    </button>
                                );
                            })}
                            
                        </Drawer>
                        </div>
                        : 
                        initial.map((icon,i)=>{
                                return (
                                    <button key = {i}>
                                        <Link to={icon.url}><img name = {icon.name} src = {icon.src} alt = "nav icon" className ="navIcon"  />
                                        <h3>{icon.name}</h3></Link>
                                    </button>
                                );
                            })
                    
                }
                {}
                
            </div>
            
            <div className="page">
            {nav.state==='loading'?<Loading/>: <Outlet />}
                
            </div>
            <Footer />
        </div>
        );
}

export default Nav;
/* <button onClick={toggleDrawer(true)}>Open drawer</button>
                <Drawer open={open} onClose={toggleDrawer(false)}>
                    {initial.map((icon,i)=>{
                    return (
                        <button key = {i}>
                            <Link to={icon.url}><img name = {icon.name} src = {icon.src} alt = "nav icon" className ="navIcon"  />
                            <h3>{icon.name}</h3></Link>
                        </button>
                    );
                })}
                </Drawer>*/

/**
* 
*/