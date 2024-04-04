import React from "react";
import styles from "../../../styles/Page.module.css";
import storiesStyle from "../../../styles/Stories.module.css"
import Story from "./Story";
import { Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, Pagination} from 'swiper/modules';
import { useState, useRef, useCallback } from "react";


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Stories(){
    const [activeStory,setActiveStory] = useState(3);

    const handleClick = (e)=>{
        setActiveStory(e.target.alt-1);
    }

    const sliderRef = useRef(null);

    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);

    return (
        <div className={styles.background}>
            <h1>Stories</h1>

            <div className={styles.center}>
                <h2>Explore the lore of the Hereafter</h2>
                <p>Whether it's the daily lives of the people in the vertex world or the ancient mythos of civilizations long past, discover it here.</p>

            </div>
            <div>

                <h2>Find a collection</h2>
            </div>
            <div className={storiesStyle.carousel}> 
            
                <button className="prev-arrow" onClick={handlePrev}> <img src = "../../icons/prev.png" alt = "previous button" width="40px"/> </button>
                <Swiper style={{height: "300px", width: "70%", "--swiper-pagination-color": "#996de3", "--swiper-pagination-bullet-inactive-color": "#ffffff",}} ref={sliderRef}
                        // install Swiper modules
                        //PLACEHOLDER IMAGES. REPLACE WITH LINKS
                    modules={[Navigation, Pagination]}
                    spaceBetween={100}
                    slidesPerView={4}
                    breakpoints={{
                        300:{
                            spaceBetween:0,
                            slidesPerView:2,
                        },
                        800:{
                            spaceBetween:100,
                            slidesPerView:4,
                        },
                    }}
                    pagination={{ clickable: true }}
                    loop
                    >
                    <SwiperSlide onClick={handleClick}><img src= "../../color_icons/Depth.png" alt = "1" height="200px" /><p style={{textAlign:"center"}}></p></SwiperSlide>
                    <SwiperSlide onClick={handleClick}><img src= "../../color_icons/Instinct.png" alt = "2" height="200px"/><p style={{textAlign:"center"}}></p></SwiperSlide>
                    <SwiperSlide onClick={handleClick}><img src= "../../color_icons/Agility.png" alt = "3" height="200px"/><p style={{textAlign:"center"}}></p></SwiperSlide>
                    <SwiperSlide onClick={handleClick}><img src= "../../color_icons/Physique.png" alt = "4" height="200px"/><p style={{textAlign:"center"}}>A World of Two Artists</p></SwiperSlide>
                    <SwiperSlide onClick={handleClick}><img src= "../../color_icons/Precision.png" alt = "5" height="200px"/><p style={{textAlign:"center"}}></p></SwiperSlide>
                    <SwiperSlide onClick={handleClick}><img src= "../../color_icons/Level.png" alt = "6" height="200px"/><p style={{textAlign:"center"}}></p></SwiperSlide>
                    <SwiperSlide onClick={handleClick}><img src= "../../color_icons/Intelligence.png" alt = "7" height="200px"/><p style={{textAlign:"center"}}></p></SwiperSlide>
                </Swiper>
                <br/>
                
                <button className="next-arrow" onClick={handleNext}>  <img src = "../../icons/next.png" alt = "next button" width="40px"/> </button>
            </div>

                <Story active = {activeStory} />
            
        </div>
    )
}

export default Stories;
